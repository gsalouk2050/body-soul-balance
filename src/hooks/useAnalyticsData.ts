import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function useAnalyticsData() {
  const monthly = useQuery({
    queryKey: ["analytics-monthly"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("analytics_monthly")
        .select("*")
        .order("created_at", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  const daily = useQuery({
    queryKey: ["analytics-daily"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("analytics_daily")
        .select("*")
        .order("date", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  const geo = useQuery({
    queryKey: ["analytics-geo"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("analytics_geo")
        .select("*")
        .order("visitors", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const topDays = useQuery({
    queryKey: ["analytics-top-days"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("analytics_top_days")
        .select("*")
        .order("visitors", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const kpis = useQuery({
    queryKey: ["analytics-kpis"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("analytics_kpis")
        .select("*");
      if (error) throw error;
      return data;
    },
  });

  const isLoading =
    monthly.isLoading || daily.isLoading || geo.isLoading || topDays.isLoading || kpis.isLoading;

  return { monthly, daily, geo, topDays, kpis, isLoading };
}
