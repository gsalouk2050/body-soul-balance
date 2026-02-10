import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Eye, BarChart3, ArrowLeft, TrendingUp, Globe, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, AreaChart, Area, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { useAnalyticsData } from "@/hooks/useAnalyticsData";

const chartConfig = {
  visiteurs: { label: "Visiteurs", color: "hsl(var(--primary))" },
  pages: { label: "Pages vues", color: "hsl(var(--accent))" },
};

const GEO_COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--primary) / 0.8)",
  "hsl(var(--primary) / 0.6)",
  "hsl(var(--primary) / 0.4)",
  "hsl(var(--accent))",
  "hsl(var(--accent) / 0.8)",
  "hsl(var(--accent) / 0.6)",
  "hsl(var(--accent) / 0.4)",
  "hsl(var(--muted-foreground) / 0.6)",
  "hsl(var(--muted-foreground) / 0.4)",
];

const Dashboard = () => {
  const { monthly, daily, geo, topDays, kpis, isLoading } = useAnalyticsData();

  const getKpi = (key: string) => {
    const item = kpis.data?.find((k: any) => k.key === key);
    return item?.value ?? 0;
  };

  const monthlyData = (monthly.data ?? []).map((m: any) => ({
    month: m.month_label,
    visiteurs: m.visitors,
    pages: m.pageviews,
    is_partial: m.is_partial,
  }));

  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  const dailyDataJan = (daily.data ?? [])
    .filter((d: any) => {
      const date = new Date(d.date);
      return date.getMonth() === 0 && date.getFullYear() === 2026;
    })
    .map((d: any) => ({
      jour: new Date(d.date).getDate().toString(),
      visiteurs: d.visitors,
    }));

  const dailyDataCurrentMonth = (daily.data ?? [])
    .filter((d: any) => {
      const date = new Date(d.date);
      return date.getMonth() === currentMonth - 1 && date.getFullYear() === currentYear;
    })
    .map((d: any) => ({
      jour: new Date(d.date).getDate().toString(),
      visiteurs: d.visitors,
    }));

  const geoData = (geo.data ?? []).map((g: any) => ({
    name: g.region ? `${g.country} – ${g.region}` : g.country,
    country: g.country,
    region: g.region,
    visitors: g.visitors,
    percentage: Number(g.percentage),
  }));

  // Group geo by country for pie chart
  const geoByCountry: Record<string, number> = {};
  (geo.data ?? []).forEach((g: any) => {
    geoByCountry[g.country] = (geoByCountry[g.country] || 0) + g.visitors;
  });
  const pieData = Object.entries(geoByCountry).map(([country, visitors]) => ({
    name: country,
    value: visitors,
  }));

  const topDaysData = (topDays.data ?? []).map((d: any) => ({
    date: d.date,
    visiteurs: d.visitors,
    pages: d.pageviews,
  }));

  const lastUpdated = kpis.data?.[0]?.updated_at
    ? new Date(kpis.data[0].updated_at).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "—";

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Chargement des statistiques…</p>
      </div>
    );
  }

  const currentMonthName = now.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Tableau de bord</h1>
            <p className="text-muted-foreground">
              Statistiques réelles — DCG Sandrine · mise à jour auto chaque nuit
            </p>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Visiteurs uniques</p>
                <p className="text-2xl font-bold">{getKpi("total_visitors")}</p>
                <p className="text-xs text-muted-foreground">Total depuis le lancement</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-full bg-accent/20">
                <Eye className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pages vues</p>
                <p className="text-2xl font-bold">{getKpi("total_pageviews")}</p>
                <p className="text-xs text-muted-foreground">Total depuis le lancement</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pages / visite</p>
                <p className="text-2xl font-bold">{getKpi("pages_per_visit")}</p>
                <p className="text-xs text-muted-foreground">Moyenne globale</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-full bg-accent/20">
                <TrendingUp className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Meilleur mois</p>
                <p className="text-2xl font-bold">{getKpi("best_month_visitors")}</p>
                <p className="text-xs text-muted-foreground">Janvier 2026</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Visiteurs & pages vues par mois</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[280px] w-full">
                <BarChart data={monthlyData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="visiteurs" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="pages" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Visiteurs quotidiens — Janvier 2026</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[280px] w-full">
                <AreaChart data={dailyDataJan}>
                  <XAxis dataKey="jour" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="visiteurs" fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--primary))" strokeWidth={2} />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg capitalize">
                Visiteurs quotidiens — {currentMonthName}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[250px] w-full">
                <LineChart data={dailyDataCurrentMonth}>
                  <XAxis dataKey="jour" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="visiteurs" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4, fill: "hsl(var(--primary))" }} />
                </LineChart>
              </ChartContainer>
              <p className="text-xs text-muted-foreground mt-2 text-center">Données partielles du mois en cours</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🏆 Top 8 — Jours les plus fréquentés</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topDaysData.map((day, i) => (
                  <div key={day.date} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground font-mono w-5 text-right">{i + 1}.</span>
                      <span className="font-medium">{day.date}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-primary font-semibold">{day.visiteurs} visiteurs</span>
                      <span className="text-muted-foreground">{day.pages} pages</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Geographic Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Provenance par pays
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{ visiteurs: { label: "Visiteurs", color: "hsl(var(--primary))" } }} className="h-[300px] w-full">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={true}
                  >
                    {pieData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={GEO_COLORS[index % GEO_COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Détail par pays / région
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {geoData.map((g, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: GEO_COLORS[i % GEO_COLORS.length] }}
                      />
                      <span className="font-medium">{g.name}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-primary font-semibold">{g.visitors}</span>
                      <span className="text-muted-foreground w-14 text-right">{g.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center border-t pt-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} <span className="font-semibold">Tekila Conseils</span> — Tous droits réservés
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Dernière mise à jour : {lastUpdated}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
