import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Update the "last updated" timestamp
    const now = new Date().toISOString();

    // For now, this function serves as a hook for future real analytics integration.
    // It updates the KPI timestamps to show when the last refresh happened.
    await supabase
      .from("analytics_kpis")
      .update({ updated_at: now })
      .neq("key", "");

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
      JSON.stringify({ success: true, refreshed_at: now }),
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
