import { Card } from "@/components/ui/card";
import { Heart, Brain, Hand, Users } from "lucide-react";

const approaches = [
  {
    icon: Heart,
    title: "Théorie de l'attachement",
    description: "Comprendre comment nos premiers liens affectifs façonnent notre manière d'aimer, de communiquer et de gérer nos émotions."
  },
  {
    icon: Brain,
    title: "Thérapie des Schémas",
    description: "Identifier et transformer les modes de pensée et comportements créés par des expériences douloureuses de l'enfance."
  },
  {
    icon: Hand,
    title: "Enseignement de Reich",
    description: "Libérer les tensions musculaires et blocages émotionnels à travers les anneaux corporels pour une réconciliation profonde."
  },
  {
    icon: Users,
    title: "Les 5 blessures",
    description: "Apaiser les blessures fondamentales (trahison, rejet, abandon, humiliation, injustice) par la libération des tensions physiques."
  },
];

const methods = [
  "Rolfing - Intégration posturale et fascias",
  "Massage Biodynamique - Libération émotionnelle viscérale",
  "Nerf Vague - Régulation du système nerveux",
  "Axe Hypothalamo-Hypophysaire - Équilibre hormonal",
  "Exercices TRE - Tremblements thérapeutiques"
];

const Approach = () => {
  return (
    <section id="approche" className="py-24 bg-gradient-to-br from-beige/30 via-cream to-sage-light/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            🌿 Mon Approche
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Mon travail s'appuie sur une vision globale de l'être humain, où le corps, les émotions 
            et la psyché sont intimement liés. Chaque tension, chaque symptôme ou blocage raconte 
            une histoire, souvent inscrite dans la mémoire corporelle et émotionnelle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {approaches.map((approach, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 border-border/50 bg-background/90 backdrop-blur-sm"
              >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <approach.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{approach.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{approach.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-sage-light/20 via-primary/10 to-beige/15 border-primary/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
              Méthodes Complémentaires
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {methods.map((method, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-background/50"
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground">{method}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-lg text-muted-foreground italic">
            "Le toucher thérapeutique est une méthode puissante qui renforce la relation de confiance, 
            créant un espace de sécurité, d'écoute et de lâcher-prise."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Approach;
