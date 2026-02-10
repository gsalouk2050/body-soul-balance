import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Eye, BarChart3, ArrowLeft, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, LineChart, Line, Area, AreaChart } from "recharts";

// Données réelles du site (analytics Lovable)
const monthlyData = [
  { month: "Nov 25", visiteurs: 129, pages: 214 },
  { month: "Déc 25", visiteurs: 109, pages: 149 },
  { month: "Jan 26", visiteurs: 231, pages: 307 },
  { month: "Fév 26", visiteurs: 55, pages: 67 },
];

const dailyDataJan = [
  { jour: "1", visiteurs: 3 },
  { jour: "3", visiteurs: 3 },
  { jour: "4", visiteurs: 9 },
  { jour: "5", visiteurs: 21 },
  { jour: "6", visiteurs: 9 },
  { jour: "8", visiteurs: 13 },
  { jour: "9", visiteurs: 16 },
  { jour: "11", visiteurs: 10 },
  { jour: "12", visiteurs: 7 },
  { jour: "13", visiteurs: 8 },
  { jour: "14", visiteurs: 18 },
  { jour: "15", visiteurs: 6 },
  { jour: "16", visiteurs: 4 },
  { jour: "18", visiteurs: 4 },
  { jour: "19", visiteurs: 4 },
  { jour: "20", visiteurs: 7 },
  { jour: "21", visiteurs: 6 },
  { jour: "23", visiteurs: 11 },
  { jour: "24", visiteurs: 12 },
  { jour: "25", visiteurs: 6 },
  { jour: "26", visiteurs: 7 },
  { jour: "28", visiteurs: 10 },
  { jour: "29", visiteurs: 7 },
  { jour: "31", visiteurs: 15 },
];

const dailyDataFeb = [
  { jour: "1", visiteurs: 6 },
  { jour: "2", visiteurs: 6 },
  { jour: "3", visiteurs: 6 },
  { jour: "4", visiteurs: 5 },
  { jour: "5", visiteurs: 4 },
  { jour: "6", visiteurs: 10 },
  { jour: "7", visiteurs: 5 },
  { jour: "8", visiteurs: 2 },
  { jour: "9", visiteurs: 4 },
  { jour: "10", visiteurs: 7 },
];

const topDays = [
  { date: "25 Nov 2025", visiteurs: 33, pages: 52 },
  { date: "26 Nov 2025", visiteurs: 32, pages: 39 },
  { date: "5 Jan 2026", visiteurs: 21, pages: 33 },
  { date: "14 Jan 2026", visiteurs: 18, pages: 24 },
  { date: "19 Déc 2025", visiteurs: 16, pages: 23 },
  { date: "9 Jan 2026", visiteurs: 16, pages: 18 },
  { date: "14 Nov 2025", visiteurs: 15, pages: 34 },
  { date: "31 Jan 2026", visiteurs: 15, pages: 19 },
];

const chartConfig = {
  visiteurs: { label: "Visiteurs", color: "hsl(var(--primary))" },
  pages: { label: "Pages vues", color: "hsl(var(--accent))" },
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Tableau de bord</h1>
            <p className="text-muted-foreground">Statistiques réelles — DCG Sandrine · depuis le 14 nov. 2025</p>
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
                <p className="text-2xl font-bold">524</p>
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
                <p className="text-2xl font-bold">737</p>
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
                <p className="text-2xl font-bold">1.41</p>
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
                <p className="text-2xl font-bold">231</p>
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
              <p className="text-xs text-muted-foreground mt-2 text-center">* Fév 2026 : données partielles (1-10 fév)</p>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Visiteurs quotidiens — Février 2026</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[250px] w-full">
                <LineChart data={dailyDataFeb}>
                  <XAxis dataKey="jour" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="visiteurs" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4, fill: "hsl(var(--primary))" }} />
                </LineChart>
              </ChartContainer>
              <p className="text-xs text-muted-foreground mt-2 text-center">Données du 1er au 10 février 2026</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🏆 Top 8 — Jours les plus fréquentés</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topDays.map((day, i) => (
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

        {/* Footer */}
        <div className="text-center border-t pt-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} <span className="font-semibold">Tekila Conseils</span> — Tous droits réservés
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Dernière mise à jour : 10 février 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
