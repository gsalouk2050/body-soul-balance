import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const VISITOR_KEY = "dcg_analytics_visitor";

const getVisitorId = () => {
  try {
    const existing = window.localStorage.getItem(VISITOR_KEY);
    if (existing) return existing;

    const next = crypto.randomUUID();
    window.localStorage.setItem(VISITOR_KEY, next);
    return next;
  } catch {
    return crypto.randomUUID();
  }
};

const getDeviceType = () => {
  const width = window.innerWidth;
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
};

export function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/dashboard") return;

    void supabase.functions.invoke("track-analytics", {
      body: {
        pagePath: `${location.pathname}${location.search}`,
        visitorId: getVisitorId(),
        referrer: document.referrer,
        deviceType: getDeviceType(),
      },
    });
  }, [location.pathname, location.search]);

  return null;
}