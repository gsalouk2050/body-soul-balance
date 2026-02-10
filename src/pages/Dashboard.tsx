import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Eye, Clock, MousePointerClick, Globe, Smartphone, Monitor, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const visitData = [
  { month: "Sep", visites: 120 },
  { month: "Oct", visites: 185 },
  { month: "Nov", visites: 240 },
  { month: "Déc", visites: 190 },
  { month: "Jan", visites: 310 },
  { month: "Fév", visites: 275 },
];

const pageData = [
  { page: "Accueil", vues: 850 },
  { page: "Services", vues: 420 },
  { page: "Approche", vues: 310 },
  { page: "Contact", vues: 290 },
  { page: "RDV", vues: 195 },
  { page: "À propos", vues: 180 },
];

const deviceData = [
  { name: "Mobile", value: 58, color: "hsl(var(--primary))" },
  { name: "Desktop", value: 35, color: "hsl(var(--accent))" },
  { name: "Tablette", value: 7, color: "hsl(var(--muted-foreground))" },
];

const sourceData = [
  { source: "Google", visites: 520 },
  { source: "Direct", visites: 310 },
  { source: "Réseaux sociaux", visites: 145 },
  { source: "Référents", visites: 85 },
];

const chartConfig = {
  visites: { label: "Visites", color: "hsl(var(--primary))" },
  vues: { label: "Pages vues", color: "hsl(var(--accent))" },
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
            <p className="text-muted-foreground">Statistiques du site DCG Sandrine</p>
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
                <p className="text-2xl font-bold">1 320</p>
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
                <p className="text-2xl font-bold">3 245</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Durée moy. session</p>
                <p className="text-2xl font-bold">2m 45s</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-full bg-accent/20">
                <MousePointerClick className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Taux de rebond</p>
                <p className="text-2xl font-bold">38%</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Visites mensuelles</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[250px] w-full">
                <BarChart data={visitData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="visites" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pages les plus vues</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[250px] w-full">
                <BarChart data={pageData} layout="vertical">
                  <XAxis type="number" />
                  <YAxis dataKey="page" type="category" width={80} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="vues" fill="hsl(var(--accent))" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                Appareils
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center gap-8">
                <ChartContainer config={chartConfig} className="h-[200px] w-[200px]">
                  <PieChart>
                    <Pie data={deviceData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} strokeWidth={2}>
                      {deviceData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ChartContainer>
                <div className="space-y-3">
                  {deviceData.map((item) => (
                    <div key={item.name} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-sm text-muted-foreground">{item.name}</span>
                      <span className="text-sm font-semibold">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Sources de trafic
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[200px] w-full">
                <LineChart data={sourceData}>
                  <XAxis dataKey="source" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="visites" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 5 }} />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center border-t pt-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} <span className="font-semibold">Tekila Conseils</span> — Tous droits réservés
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
