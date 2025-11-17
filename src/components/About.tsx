import { Card } from "@/components/ui/card";
import therapistPhoto from "@/assets/therapist-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-sage-light/30 via-beige/20 to-accent/40">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                À propos de moi
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Après plus de 20 ans à pratiquer le massage bien-être, j'ai ressenti le besoin 
                  d'aller plus loin dans ma démarche d'accompagnement. Au fil des années, j'ai 
                  constaté que le corps garde en mémoire bien plus que les tensions physiques : 
                  il exprime aussi nos émotions, des mémoires, nos vécus, nos blocages, des 
                  mouvements intérieurs qui façonnent notre être.
                </p>

                <p>
                  <strong className="text-foreground">C'est à travers mes enfants que ce chemin s'est éclairé.</strong> Face à leurs maux, j'ai exploré de nombreuses approches, conventionnelles ou 
                  naturelles, sans toujours trouver les réponses que je cherchais.
                </p>

                <p>
                  Et puis, le somato-émotionnel s'est présenté à moi comme une évidence, une 
                  rencontre entre le corps et l'âme. Cette approche m'a profondément aidée, en 
                  tant que mère et en tant que femme, à comprendre autrement la souffrance et 
                  la guérison.
                </p>

                <p>
                  C'est ce qui m'a conduite à me former au massage thérapeutique et à la 
                  libération somato-émotionnelle, pour offrir à mes patients un espace d'écoute 
                  du corps, du cœur et de l'esprit.
                </p>

                <p className="text-lg text-foreground italic font-medium">
                  Aujourd'hui, j'accompagne chaque personne comme on accompagne un voyage : 
                  avec bienveillance et respect, pour l'aider à retrouver le chemin de son 
                  équilibre, à renouer avec ce qu'il y a de vivant, de libre et de vibrant en elle.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <Card className="overflow-hidden border-primary/20 shadow-xl bg-background/95 backdrop-blur-sm">
                <img
                  src={therapistPhoto}
                  alt="Thérapeute psychocorporelle DCG"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>

          <Card className="mt-16 p-8 md:p-12 bg-gradient-to-br from-primary/15 via-sage-light/25 to-beige/20 border-primary/30 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-foreground">
              Mon Intention
            </h3>
            <div className="max-w-3xl mx-auto space-y-4 text-center">
              <p className="text-lg text-foreground leading-relaxed">
                Accompagner la personne là où elle en est.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Chaque séance est une rencontre, un espace où le corps peut s'exprimer, 
                se déposer, et retrouver sa capacité naturelle d'autorégulation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mon accompagnement repose sur l'écoute, la présence et le respect du rythme 
                de chacun car c'est dans cette douceur que la guérison trouve son chemin.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
