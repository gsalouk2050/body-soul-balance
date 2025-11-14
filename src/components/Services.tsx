import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HandHeart, Activity, Baby, Sparkles, Footprints } from "lucide-react";

const therapyServices = [
  {
    icon: HandHeart,
    title: "Thérapie Somato-Émotionnelle",
    duration: "90 minutes",
    description: "Libération profonde des tensions et blocages émotionnels inscrits dans le corps.",
    benefits: [
      "Comprendre le sens de vos tensions et blocages",
      "Retrouver une sécurité intérieure",
      "Traverser stress chronique et burn-out",
      "Libérer mémoires émotionnelles et schémas répétitifs"
    ]
  }
];

const massageServices = [
  {
    icon: Activity,
    title: "Massage thérapeutique",
    duration: "60-90 minutes",
    description: "Par un examen palpatoire précis, libère les tensions musculaires, corrige les déséquilibres posturaux et améliore la mobilité articulaire."
  },
  {
    icon: Sparkles,
    title: "Massage classique",
    duration: "60-90 minutes",
    description: "Gestes doux et réguliers qui invitent au lâcher-prise total. Un moment de détente absolue pour harmoniser la circulation et apaiser le quotidien."
  },
  {
    icon: Activity,
    title: "Massage sportif - récupération",
    duration: "60 minutes",
    description: "Conçu pour aider le corps après l'effort, relâche les tensions, soulage les zones sollicitées et limite les courbatures."
  },
  {
    icon: Baby,
    title: "Massage prénatal",
    duration: "60 minutes",
    description: "Du troisième mois à la fin de la grossesse. Accompagne les changements du corps, soulage les tensions et aide à vivre pleinement ce temps unique."
  },
  {
    icon: Footprints,
    title: "Réflexologie plantaire",
    duration: "60 minutes",
    description: "Stimulation des zones réflexes des pieds pour régulariser les fonctions des organes. Participe aux mécanismes d'auto-défense et d'auto-régénération.",
    note: "Non pris en charge par les assurances complémentaires"
  }
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Services & Soins
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un accompagnement personnalisé pour retrouver l'équilibre entre le corps et l'esprit.
          </p>
        </div>

        <Tabs defaultValue="therapy" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12 h-auto">
            <TabsTrigger value="therapy" className="text-lg py-3">
              Thérapie Somato-Émotionnelle
            </TabsTrigger>
            <TabsTrigger value="massage" className="text-lg py-3">
              Massothérapie
            </TabsTrigger>
          </TabsList>

          <TabsContent value="therapy" className="space-y-8">
            {therapyServices.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                      <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                        {service.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Pour qui ?</h4>
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-8 bg-accent/30 border-primary/20">
              <h4 className="text-xl font-bold mb-4 text-foreground">Également indiqué pour :</h4>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <span>•</span>
                  <span>Douleurs chroniques (lombalgies, cervicalgies, tendinites)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>•</span>
                  <span>Troubles du sommeil et digestifs</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>•</span>
                  <span>Maux de tête récurrents</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>•</span>
                  <span>Troubles hormonaux et tensions viscérales</span>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="massage" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {massageServices.map((service, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-border/50"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-foreground mb-1">{service.title}</h3>
                      <span className="text-sm text-muted-foreground">{service.duration}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  {service.note && (
                    <p className="text-sm text-destructive/80 italic mt-3">
                      ⚠️ {service.note}
                    </p>
                  )}
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h4 className="font-bold text-foreground mb-2">
                ✨ Thérapeute agréée ASCA et RME
              </h4>
              <p className="text-muted-foreground">
                Certaines assurances complémentaires remboursent une partie des séances. 
                Je vous recommande de vérifier la prise en charge directement auprès de votre caisse.
              </p>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button onClick={scrollToContact} size="lg" className="text-lg px-8">
            Prendre rendez-vous
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
