CREATE TABLE public.seo_pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  url text NOT NULL UNIQUE,
  label text NOT NULL,
  status text NOT NULL DEFAULT 'inconnue',
  last_crawl date,
  note text,
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE public.seo_issues (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page text NOT NULL,
  title text NOT NULL,
  severity text NOT NULL DEFAULT 'moyenne',
  status text NOT NULL DEFAULT 'a_traiter',
  action text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.seo_pages, public.seo_issues TO anon, authenticated;
GRANT ALL ON public.seo_pages, public.seo_issues TO service_role;
ALTER TABLE public.seo_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_issues ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public read seo_pages" ON public.seo_pages FOR SELECT USING (true);
CREATE POLICY "public read seo_issues" ON public.seo_issues FOR SELECT USING (true);

INSERT INTO public.seo_pages (url,label,status,last_crawl,note) VALUES
('/','Accueil','indexee','2026-07-14','Page principale, visible dans Google'),
('/rdv','Prendre rendez-vous','detectee',NULL,'Connue de Google, en attente d''exploration'),
('/flossing','Flossing thérapeutique','detectee',NULL,'Demander l''indexation manuellement dans la Search Console');

INSERT INTO public.seo_issues (page,title,severity,status,action) VALUES
('/rdv','Page détectée mais non indexée','moyenne','a_traiter','Demander l''indexation dans la Search Console'),
('/flossing','Page détectée mais non indexée','haute','a_traiter','Demander l''indexation et obtenir des liens externes'),
('Tout le site','Peu de liens externes pointant vers le site','moyenne','a_traiter','Inscription annuaires (ASCA, search.ch, Google Business)'),
('/flossing','Meta description trop longue','basse','resolu','Raccourcie'),
('/dashboard','Canonical et Open Graph manquants','basse','resolu','Ajoutés'),
('/rdv','og:type manquant','basse','resolu','Ajouté');