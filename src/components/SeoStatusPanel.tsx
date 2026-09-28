import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, AlertTriangle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Page = { id: string; url: string; label: string; status: string; last_crawl: string | null; note: string | null };
type Issue = { id: string; page: string; title: string; severity: string; status: string; action: string | null };

const pageStatus: Record<string, { label: string; variant: "default" | "secondary" | "outline" | "destructive" }> = {
  indexee: { label: "Indexée", variant: "default" },
  detectee: { label: "Détectée, non indexée", variant: "secondary" },
  inconnue: { label: "Inconnue de Google", variant: "outline" },
  erreur: { label: "Erreur", variant: "destructive" },
};
const sevVariant: Record<string, "destructive" | "secondary" | "outline"> = { haute: "destructive", moyenne: "secondary", basse: "outline" };

const SeoStatusPanel = () => {
  const [pages, setPages] = useState<Page[]>([]);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    const db = supabase as any;
    db.from("seo_pages").select("*").order("url").then(({ data }: any) => setPages(data ?? []));
    db.from("seo_issues").select("*").order("created_at").then(({ data }: any) => setIssues(data ?? []));
  }, []);

  const open = issues.filter((i) => i.status !== "resolu");
  const done = issues.filter((i) => i.status === "resolu");
  const indexed = pages.filter((p) => p.status === "indexee").length;

  return (
    <div className="grid gap-6 lg:grid-cols-2 mb-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Search className="h-5 w-5 text-primary" /> Indexation Google
            <span className="ml-auto text-sm font-normal text-muted-foreground">{indexed}/{pages.length} indexées</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {pages.map((p) => {
            const s = pageStatus[p.status] ?? pageStatus.inconnue;
            return (
              <div key={p.id} className="flex items-start justify-between gap-3 border-b pb-3 last:border-0">
                <div className="min-w-0">
                  <p className="font-medium">{p.label} <span className="text-xs text-muted-foreground">{p.url}</span></p>
                  {p.note && <p className="text-xs text-muted-foreground">{p.note}</p>}
                  {p.last_crawl && <p className="text-xs text-muted-foreground">Dernière visite Google : {new Date(p.last_crawl).toLocaleDateString("fr-CH")}</p>}
                </div>
                <Badge variant={s.variant} className="shrink-0">{s.label}</Badge>
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <AlertTriangle className="h-5 w-5 text-primary" /> Erreurs SEO à traiter
            <span className="ml-auto text-sm font-normal text-muted-foreground">{open.length} ouvertes · {done.length} résolues</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {open.length === 0 && <p className="text-sm text-muted-foreground">Aucune erreur en cours.</p>}
          {open.map((i) => (
            <div key={i.id} className="border-b pb-3 last:border-0">
              <div className="flex items-center justify-between gap-2">
                <p className="font-medium">{i.title}</p>
                <Badge variant={sevVariant[i.severity] ?? "outline"} className="shrink-0 capitalize">{i.severity}</Badge>
              </div>
              <p className="text-xs text-muted-foreground">{i.page}{i.action ? ` — ${i.action}` : ""}</p>
            </div>
          ))}
          {done.length > 0 && (
            <details className="pt-2">
              <summary className="cursor-pointer text-sm text-muted-foreground">Voir les corrections effectuées</summary>
              <ul className="mt-2 space-y-1">
                {done.map((i) => (
                  <li key={i.id} className="text-xs text-muted-foreground">✓ {i.page} — {i.title}</li>
                ))}
              </ul>
            </details>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SeoStatusPanel;
