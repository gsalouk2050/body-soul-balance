
-- Table for monthly analytics snapshots
CREATE TABLE public.analytics_monthly (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  month_label TEXT NOT NULL,
  visitors INTEGER NOT NULL DEFAULT 0,
  pageviews INTEGER NOT NULL DEFAULT 0,
  is_partial BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(month_label)
);

-- Table for daily analytics
CREATE TABLE public.analytics_daily (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL,
  visitors INTEGER NOT NULL DEFAULT 0,
  pageviews INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(date)
);

-- Table for geographic data (simulated)
CREATE TABLE public.analytics_geo (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  country TEXT NOT NULL,
  region TEXT,
  visitors INTEGER NOT NULL DEFAULT 0,
  percentage NUMERIC(5,2) NOT NULL DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(country, region)
);

-- Table for top days
CREATE TABLE public.analytics_top_days (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  date TEXT NOT NULL,
  visitors INTEGER NOT NULL DEFAULT 0,
  pageviews INTEGER NOT NULL DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(date)
);

-- Table for KPI totals
CREATE TABLE public.analytics_kpis (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value NUMERIC NOT NULL DEFAULT 0,
  label TEXT,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.analytics_monthly ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_daily ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_geo ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_top_days ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_kpis ENABLE ROW LEVEL SECURITY;

-- Public read-only policies (dashboard is public)
CREATE POLICY "Public read analytics_monthly" ON public.analytics_monthly FOR SELECT USING (true);
CREATE POLICY "Public read analytics_daily" ON public.analytics_daily FOR SELECT USING (true);
CREATE POLICY "Public read analytics_geo" ON public.analytics_geo FOR SELECT USING (true);
CREATE POLICY "Public read analytics_top_days" ON public.analytics_top_days FOR SELECT USING (true);
CREATE POLICY "Public read analytics_kpis" ON public.analytics_kpis FOR SELECT USING (true);

-- Service role only for inserts/updates (edge function uses service role)
CREATE POLICY "Service insert analytics_monthly" ON public.analytics_monthly FOR INSERT WITH CHECK (false);
CREATE POLICY "Service insert analytics_daily" ON public.analytics_daily FOR INSERT WITH CHECK (false);
CREATE POLICY "Service insert analytics_geo" ON public.analytics_geo FOR INSERT WITH CHECK (false);
CREATE POLICY "Service insert analytics_top_days" ON public.analytics_top_days FOR INSERT WITH CHECK (false);
CREATE POLICY "Service insert analytics_kpis" ON public.analytics_kpis FOR INSERT WITH CHECK (false);
