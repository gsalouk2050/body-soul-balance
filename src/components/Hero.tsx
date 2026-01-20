import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import heroImage from "@/assets/hero-therapy.jpg";

const ONEDOC_URL = "https://onedoc.ch/fr/widget/6a970205d36d11ab5603d6631a5c3524c3a692408e276252632ad1ce9d6f0a47";

const Hero = () => {

  const scrollToApproach = () => {
    const element = document.getElementById("approche");
    if (element) {
      const offsetTop = element.offsetTop - 100; // Offset pour le header
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Thérapie douce et apaisante"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6 animate-fade-in">
            <Leaf className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            <span className="text-sm md:text-base text-primary font-medium tracking-wide">
              Libération Somato-Émotionnelle
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Button asChild size="lg" className="text-base md:text-lg px-6 md:px-8">
              <a href={ONEDOC_URL} target="_blank" rel="noopener noreferrer">
                Prendre rendez-vous
              </a>
            </Button>
            <Button 
              onClick={scrollToApproach}
              variant="outline" 
              size="lg"
              className="text-base md:text-lg px-6 md:px-8 border-2"
            >
              Découvrir l'approche
            </Button>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            Retrouver l'équilibre,<br />
            <span className="text-primary">c'est revenir à soi</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 leading-relaxed">
            Parce que la guérison commence quand on s'écoute vraiment.
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Méthode de libération somato-émotionnelle par la thérapie manuelle. 
            Un accompagnement holistique où le corps, les émotions et la psyché sont intimement liés.
          </p>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
