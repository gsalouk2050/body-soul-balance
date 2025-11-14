import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import heroImage from "@/assets/hero-therapy.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToApproach = () => {
    const element = document.getElementById("approche");
    if (element) {
      const offsetTop = element.offsetTop - 100; // Offset pour le header
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Thérapie douce et apaisante"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6 animate-fade-in">
            <Leaf className="w-8 h-8 text-primary" />
            <span className="text-primary font-medium tracking-wide">
              Libération Somato-Émotionnelle
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            Retrouver l'équilibre,<br />
            <span className="text-primary">c'est revenir à soi</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Parce que la guérison commence quand on s'écoute vraiment.
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-xl leading-relaxed">
            Méthode de libération somato-émotionnelle par la thérapie manuelle. 
            Un accompagnement holistique où le corps, les émotions et la psyché sont intimement liés.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={scrollToContact} size="lg" className="text-lg px-8">
              Prendre rendez-vous
            </Button>
            <Button 
              onClick={scrollToApproach}
              variant="outline" 
              size="lg"
              className="text-lg px-8 border-2"
            >
              Découvrir l'approche
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
