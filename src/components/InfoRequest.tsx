import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

const InfoRequest = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 via-beige/20 to-sage-light/30">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto p-8 text-center bg-gradient-to-br from-sage-light/20 via-primary/10 to-beige/15 border-primary/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Je suis à votre écoute
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Pour tout renseignement complémentaire, n'hésitez pas à me contacter. 
            Je serai ravie de répondre à vos questions et de vous accompagner dans votre démarche.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default InfoRequest;
