import { Card } from "@/components/ui/card";
import { MessageCircle, Hand, Heart } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Le temps d'échange",
    description: "Chaque séance débute par un moment d'écoute et d'observation pour comprendre votre état du moment, vos besoins et vos attentes. Ce temps inclut une anamnèse (antécédents médicaux, mode de vie) et un bilan postural."
  },
  {
    icon: Hand,
    title: "Le soin",
    description: "Se déroule dans un climat de bienveillance et de respect, alternant écoute, respiration et toucher conscient (massage). Il n'y a rien à \"faire\" simplement à ressentir et à laisser être."
  },
  {
    icon: Heart,
    title: "L'intégration",
    description: "Un temps d'intégration et de partage permet d'ancrer les effets et de soutenir le processus d'équilibre. Ce moment favorise la conscience et la compréhension de votre expérience."
  }
];

const SessionProcess = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/20 to-beige/15">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Le Déroulement d'une Séance
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un accompagnement personnalisé adapté à vos besoins et en toute sécurité.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-lg transition-all duration-300 border-border/50 bg-background/90 backdrop-blur-sm"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-12 text-center">
          <Card className="p-8 bg-gradient-to-br from-primary/10 via-sage-light/20 to-beige/15 border-primary/30 backdrop-blur-sm">
            <p className="text-lg text-foreground italic leading-relaxed">
              "Accompagner la personne là où elle en est. Chaque séance est une rencontre, 
              un espace où le corps peut s'exprimer, se déposer, et retrouver sa capacité 
              naturelle d'autorégulation."
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SessionProcess;
