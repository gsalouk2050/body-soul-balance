CREATE TABLE public.analytics_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_date DATE NOT NULL DEFAULT CURRENT_DATE,
  visitor_key TEXT NOT NULL,
  page_path TEXT NOT NULL,
  referrer_host TEXT,
  device_type TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT ALL ON public.analytics_events TO service_role;

ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "No public read analytics_events"
ON public.analytics_events
FOR SELECT
USING (false);

CREATE INDEX idx_analytics_events_event_date ON public.analytics_events(event_date);
CREATE INDEX idx_analytics_events_visitor_date ON public.analytics_events(visitor_key, event_date);