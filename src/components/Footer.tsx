import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-earth text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">DCG</h3>
            <p className="text-beige">Thérapie psychocorporelle</p>
          </div>
          
          <div className="mb-8 text-cream/80 max-w-2xl mx-auto">
            <p className="italic">
              "Apaiser le corps, éclairer l'émotion, retrouver l'élan de vie."
            </p>
          </div>

          <div className="space-y-2 text-cream/70 text-sm">
            <p>Rue des Vollandes 6, 1207 Genève, Suisse</p>
            <p>Tél: <a href="tel:+41783434527" className="hover:text-cream transition-colors">078 343 45 27</a></p>
          </div>

          <div className="mt-8 pt-8 border-t border-cream/20">
            <p className="text-sm text-cream/60 flex items-center justify-center gap-2">
              Créé avec <Heart className="w-4 h-4 text-primary" /> pour accompagner votre guérison
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
