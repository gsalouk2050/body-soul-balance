import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

type AnalyticsEvent = {
  event_date: string;
  visitor_key: string;
  page_path: string;
};

type DailyRow = {
  date: string;
  visitors: number;
  pageviews: number;
};

const monthFormatter = new Intl.DateTimeFormat("fr-CH", {
  month: "short",
  year: "2-digit",
  timeZone: "UTC",
});

const monthLabel = (date: string) => {
  const label = monthFormatter.format(new Date(`${date}T00:00:00Z`)).replace(".", "");
  return label.charAt(0).toUpperCase() + label.slice(1);
};

const fetchAllEvents = async (supabase: ReturnType<typeof createClient>) => {
  const rows: AnalyticsEvent[] = [];
  const pageSize = 1000;

  for (let from = 0; ; from += pageSize) {
    const { data, error } = await supabase
      .from("analytics_events")
      .select("event_date, visitor_key, page_path")
      .range(from, from + pageSize - 1);

    if (error) throw error;
    rows.push(...((data ?? []) as AnalyticsEvent[]));
    if (!data || data.length < pageSize) break;
  }

  return rows;
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const now = new Date().toISOString();
    const events = await fetchAllEvents(supabase);

    if (events.length > 0) {
      const dailyMap = new Map<string, { pageviews: number; visitors: Set<string> }>();

      for (const event of events) {
        const day = event.event_date;
        const current = dailyMap.get(day) ?? { pageviews: 0, visitors: new Set<string>() };
        current.pageviews += 1;
        current.visitors.add(event.visitor_key);
        dailyMap.set(day, current);
      }

      const eventDailyRows = [...dailyMap.entries()].map(([date, values]) => ({
        date,
        visitors: values.visitors.size,
        pageviews: values.pageviews,
      }));

      const { error: dailyUpsertError } = await supabase
        .from("analytics_daily")
        .upsert(eventDailyRows, { onConflict: "date" });

      if (dailyUpsertError) throw dailyUpsertError;
    }

    const { data: dailyRows, error: dailyError } = await supabase
      .from("analytics_daily")
      .select("date, visitors, pageviews")
      .order("date", { ascending: true });

    if (dailyError) throw dailyError;

    const monthlyMap = new Map<string, { visitors: number; pageviews: number; latestDate: string }>();

    for (const row of (dailyRows ?? []) as DailyRow[]) {
      const label = monthLabel(row.date);
      const current = monthlyMap.get(label) ?? { visitors: 0, pageviews: 0, latestDate: row.date };
      current.visitors += row.visitors;
      current.pageviews += row.pageviews;
      if (row.date > current.latestDate) current.latestDate = row.date;
      monthlyMap.set(label, current);
    }

    const today = new Date().toISOString().slice(0, 10);
    const monthlyRows = [...monthlyMap.entries()].map(([label, values]) => ({
      month_label: label,
      visitors: values.visitors,
      pageviews: values.pageviews,
      is_partial: values.latestDate.slice(0, 7) === today.slice(0, 7),
      updated_at: now,
    }));

    if (monthlyRows.length > 0) {
      const { error: monthlyUpsertError } = await supabase
        .from("analytics_monthly")
        .upsert(monthlyRows, { onConflict: "month_label" });

      if (monthlyUpsertError) throw monthlyUpsertError;
    }

    const totalVisitors = ((dailyRows ?? []) as DailyRow[]).reduce((sum, row) => sum + row.visitors, 0);
    const totalPageviews = ((dailyRows ?? []) as DailyRow[]).reduce((sum, row) => sum + row.pageviews, 0);
    const pagesPerVisit = totalVisitors > 0 ? Number((totalPageviews / totalVisitors).toFixed(2)) : 0;
    const bestMonthVisitors = monthlyRows.reduce((max, row) => Math.max(max, row.visitors), 0);

    // For now, this function serves as a hook for future real analytics integration.
    // It updates the KPI timestamps to show when the last refresh happened.
    await supabase
      .from("analytics_kpis")
      .upsert(
        [
          { key: "total_visitors", value: totalVisitors, label: "Visiteurs uniques", updated_at: now },
          { key: "total_pageviews", value: totalPageviews, label: "Pages vues", updated_at: now },
          { key: "pages_per_visit", value: pagesPerVisit, label: "Pages / visite", updated_at: now },
          { key: "best_month_visitors", value: bestMonthVisitors, label: "Meilleur mois", updated_at: now },
        ],
        { onConflict: "key" }
      );

    await supabase
      .from("analytics_geo")
      .update({ updated_at: now })
      .neq("country", "");

    await supabase
      .from("analytics_top_days")
      .update({ updated_at: now })
      .neq("date", "");

    await supabase
      .from("analytics_monthly")
      .update({ updated_at: now })
      .neq("month_label", "");

    console.log("Analytics refresh completed at", now);

    return new Response(
      JSON.stringify({ success: true, refreshed_at: now, events: events.length }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error refreshing analytics:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
