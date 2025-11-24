import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HandHeart, Activity, Baby, Sparkles, Footprints } from "lucide-react";

const therapyServices = [
  {
    icon: HandHeart,
    title: "Thérapie Somato-Émotionnelle",
    description: "Libération profonde des tensions et blocages émotionnels inscrits dans le corps.",
    note: "Non prise en charge par les assurances complémentaires",
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
    description: "Par un examen palpatoire précis, libère les tensions musculaires, corrige les déséquilibres posturaux et améliore la mobilité articulaire.",
    note: "Anamnèse de 15 minutes comprise pour le premier rendez-vous"
  },
  {
    icon: Sparkles,
    title: "Massage classique",
    description: "Gestes doux et réguliers qui invitent au lâcher-prise total. Un moment de détente absolue pour harmoniser la circulation et apaiser le quotidien.",
    note: "Anamnèse de 15 minutes comprise pour le premier rendez-vous"
  },
  {
    icon: Activity,
    title: "Massage sportif - récupération",
    description: "Conçu pour aider le corps après l'effort, relâche les tensions, soulage les zones sollicitées et limite les courbatures."
  },
  {
    icon: Baby,
    title: "Massage prénatal",
    description: "Du troisième mois à la fin de la grossesse. Accompagne les changements du corps, soulage les tensions et aide à vivre pleinement ce temps unique."
  },
  {
    icon: Footprints,
    title: "Réflexologie plantaire",
    description: "Stimulation des zones réflexes des pieds pour régulariser les fonctions des organes. Participe aux mécanismes d'auto-défense et d'auto-régénération.",
    note: "Non prise en charge par les assurances complémentaires"
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
    <section id="services" className="py-24 bg-gradient-to-br from-sage-light/40 via-background to-beige/20">
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
          <TabsList className="grid w-full grid-cols-2 mb-12 h-auto gap-2">
            <TabsTrigger value="therapy" className="text-sm sm:text-base lg:text-lg py-3 px-2 sm:px-4 cursor-pointer hover:bg-primary/20 transition-colors">
              <span className="hidden sm:inline">👆 Thérapie Somato-Émotionnelle</span>
              <span className="sm:hidden">👆 Thérapie</span>
            </TabsTrigger>
            <TabsTrigger value="massage" className="text-sm sm:text-base lg:text-lg py-3 px-2 sm:px-4 cursor-pointer hover:bg-primary/20 transition-colors">
              <span className="hidden sm:inline">👆 Massothérapie</span>
              <span className="sm:hidden">👆 Massage</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="therapy" className="space-y-8">
            {therapyServices.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm border-primary/10">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    {service.note && (
                      <p className="text-sm text-destructive/80 italic mb-4">
                        ⚠️ {service.note}
                      </p>
                    )}
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

            <Card className="p-8 bg-gradient-to-br from-beige/20 via-sage-light/15 to-primary/10 border-primary/30 backdrop-blur-sm">
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

            <Card className="p-6 bg-gradient-to-br from-primary/10 via-sage-light/15 to-beige/20 border-primary/30 backdrop-blur-sm">
              <h4 className="font-bold text-foreground mb-4">
                Tarif des soins
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">45 minutes</span>
                  <span className="font-semibold text-foreground">CHF 90.-</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">60 minutes</span>
                  <span className="font-semibold text-foreground">CHF 130.-</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">90 minutes</span>
                  <span className="font-semibold text-foreground">CHF 180.-</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">120 minutes</span>
                  <span className="font-semibold text-foreground">CHF 230.-</span>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="massage" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {massageServices.map((service, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 bg-background/90 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-3">{service.description}</p>
                  {service.note && (
                    <p className="text-sm text-muted-foreground/80 italic">
                      ℹ️ {service.note}
                    </p>
                  )}
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-gradient-to-br from-primary/10 via-sage-light/15 to-beige/20 border-primary/30 backdrop-blur-sm">
              <h4 className="font-bold text-foreground mb-4">
                Tarif des soins
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">45 minutes</span>
                  <span className="font-semibold text-foreground">CHF 90.-</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">60 minutes</span>
                  <span className="font-semibold text-foreground">CHF 130.-</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">90 minutes</span>
                  <span className="font-semibold text-foreground">CHF 180.-</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">120 minutes</span>
                  <span className="font-semibold text-foreground">CHF 230.-</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-sage-light/20 via-primary/10 to-beige/15 border-primary/30 backdrop-blur-sm">
              <h4 className="font-bold text-foreground mb-4">
                ✨ Options supplémentaires
              </h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <span>🎁</span>
                  <div>
                    <span className="font-semibold text-foreground">Bons cadeaux disponibles</span>
                    <p className="text-sm">Offrez un moment de bien-être à vos proches</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span>📋</span>
                  <div>
                    <span className="font-semibold text-foreground">Abonnements possibles</span>
                    <p className="text-sm">Profitez d'un suivi régulier adapté à vos besoins</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-sage-light/20 via-primary/10 to-beige/15 border-primary/30 backdrop-blur-sm mt-6">
              <h4 className="font-bold text-foreground mb-2">
                ✨ Prise en charge par les assurances
              </h4>
              <p className="text-muted-foreground mb-3">
                <strong className="text-foreground">Thérapeute agréée ASCA et RME</strong> - labels de qualité reconnus.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>ASCA</strong> (Fondation Suisse pour les Médecines Complémentaires) et <strong>RME</strong> (Registre de Médecine Empirique) sont des labels de qualité garantissant une formation professionnelle reconnue.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Les massages sont pris en charge par les assurances complémentaires. Je vous recommande de vérifier directement auprès de votre caisse.
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
