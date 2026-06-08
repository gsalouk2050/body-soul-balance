import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HandHeart, Activity, Baby, Sparkles, Footprints, Waves } from "lucide-react";

const therapyServices = [
  {
    icon: HandHeart,
    title: "Thérapie Somato-Émotionnelle",
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
    description: "Par un examen palpatoire précis, libère les tensions musculaires, corrige les déséquilibres posturaux et améliore la mobilité articulaire."
  },
  {
    icon: Sparkles,
    title: "Massage classique",
    description: "Gestes doux et réguliers qui invitent au lâcher-prise total. Un moment de détente absolue pour harmoniser la circulation et apaiser le quotidien."
  },
  {
    icon: Waves,
    title: "Flossing thérapeutique",
    description: "Technique manuelle utilisant des bandes élastiques compressives associées au mouvement pour favoriser la mobilité, le relâchement tissulaire et la récupération myofasciale."
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
            Un suivi personnalisé pour retrouver l'équilibre entre le corps et l'esprit.
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
              <div className="mt-6 pt-4 border-t border-primary/20">
                <h5 className="font-semibold text-foreground mb-3">Services à domicile</h5>
                <div className="space-y-3 text-sm">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <span className="text-muted-foreground">Rive, Eaux-Vives, Terrassière</span>
                    <span className="font-semibold text-foreground whitespace-nowrap">+ CHF 50.-</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <span className="text-muted-foreground">Champel, Thônex, Chêne-Bourgeries, Chêne-Bourg, Veyrier</span>
                    <span className="font-semibold text-foreground whitespace-nowrap">+ CHF 80.-</span>
                  </div>
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

            <Card className="p-8 bg-background/90 backdrop-blur-sm border-primary/20">
              <details className="group">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Waves className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">En savoir plus sur le flossing thérapeutique</h3>
                  </div>
                  <span className="text-primary text-sm font-medium group-open:hidden">Afficher</span>
                  <span className="text-primary text-sm font-medium hidden group-open:inline">Masquer</span>
                </summary>
                <div className="mt-6 space-y-6 text-muted-foreground leading-relaxed">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Flossing thérapeutique à Genève</h4>
                    <p className="italic mb-3">Bandes compressives, mobilité et récupération myofasciale</p>
                    <p className="mb-3">
                      Le flossing thérapeutique est une technique de thérapie manuelle utilisant des bandes élastiques compressives associées au mouvement afin de favoriser la mobilité, le relâchement tissulaire et la récupération fonctionnelle du corps.
                    </p>
                    <p>
                      Proposé au cabinet DCG Sandrine Massothérapie & Thérapie psychocorporelle à Genève, le flossing s'intègre dans une approche globale du corps, des fascias et du mouvement.
                    </p>
                  </div>

                  <div>
                    <p className="mb-3">Cette approche peut être proposée dans l'accompagnement :</p>
                    <ul className="space-y-2 ml-1">
                      {[
                        "des douleurs musculaires et articulaires,",
                        "des restrictions de mobilité,",
                        "des tensions myofasciales,",
                        "des sensations de raideur corporelle,",
                        "de la récupération sportive,",
                        "de certaines suites post-opératoires,",
                        "des tensions chroniques du corps.",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Une approche corporelle basée sur les fascias et le mouvement</h4>
                    <p className="mb-3">
                      Le flossing agit grâce à une compression tissulaire temporaire réalisée avec des bandes spécifiques, combinée à des mouvements adaptés et progressifs.
                    </p>
                    <p className="mb-3">Cette technique peut contribuer à :</p>
                    <ul className="space-y-2 ml-1">
                      {[
                        "améliorer la mobilité articulaire,",
                        "favoriser le glissement des tissus et des fascias,",
                        "soutenir la circulation sanguine et lymphatique,",
                        "améliorer la récupération musculaire,",
                        "diminuer certaines tensions mécaniques,",
                        "favoriser une meilleure perception corporelle.",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3">
                      Le travail est toujours réalisé de manière progressive, personnalisée et adaptée aux besoins de la personne.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Flossing thérapeutique et récupération post-opératoire</h4>
                    <p className="mb-3">
                      Le flossing thérapeutique peut également être intégré dans certains accompagnements post-opératoires, en complément d'un suivi médical adapté.
                    </p>
                    <p>
                      Selon les besoins, cette approche peut aider à soutenir la mobilité, la récupération fonctionnelle et certaines sensations de raideur ou de tension tissulaire après une intervention.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Une prise en charge globale à Genève</h4>
                    <p className="mb-3">
                      Au cabinet situé à Genève – Eaux-Vives, le flossing thérapeutique peut être intégré à différentes approches complémentaires :
                    </p>
                    <ul className="space-y-2 ml-1">
                      {[
                        "massage thérapeutique,",
                        "massage sportif récupération,",
                        "travail des fascias,",
                        "thérapie psychocorporelle,",
                        "accompagnement du stress et des tensions chroniques.",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3">
                      L'objectif est d'accompagner le corps vers davantage de mobilité, de fluidité et de confort durable.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-primary/20 flex flex-col sm:flex-row sm:justify-between gap-2">
                    <span><strong className="text-foreground">Durée de la séance :</strong> 60 minutes</span>
                    <span><strong className="text-foreground">Tarif :</strong> 130 CHF</span>
                  </div>
                </div>
              </details>
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
              <div className="mt-6 pt-4 border-t border-primary/20">
                <h5 className="font-semibold text-foreground mb-3">Services à domicile</h5>
                <div className="space-y-3 text-sm">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <span className="text-muted-foreground">Rive, Eaux-Vives, Terrassière</span>
                    <span className="font-semibold text-foreground whitespace-nowrap">+ CHF 50.-</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <span className="text-muted-foreground">Champel, Thônex, Chêne-Bourgeries, Chêne-Bourg, Veyrier</span>
                    <span className="font-semibold text-foreground whitespace-nowrap">+ CHF 80.-</span>
                  </div>
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
                ✨ Prise en charge par certaines assurances complémentaires
              </h4>
              <p className="text-muted-foreground mb-3">
                <strong className="text-foreground">Agréée ASCA.</strong>
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>ASCA</strong> (Fondation Suisse pour les Médecines Complémentaires) est un label de qualité garantissant une formation professionnelle reconnue.
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
