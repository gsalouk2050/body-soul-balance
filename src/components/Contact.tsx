import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Bus, Clock } from "lucide-react";
import logoAsca from "@/assets/logo-asca.png";
const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary/10 via-sage-light/30 to-beige/25">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Contact & Rendez-vous
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Je serai heureuse de vous accompagner dans votre cheminement vers l'équilibre.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 bg-background/90 backdrop-blur-sm border-primary/10">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Informations pratiques
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Téléphone</h4>
                    <a
                      href="tel:+41783434527"
                      className="text-lg text-primary hover:underline"
                    >
                      +41 78 343 45 27
                    </a>
                    <div className="mt-3">
                      <h4 className="font-semibold text-foreground mb-2">Email</h4>
                      <a
                        href="mailto:contact@dcg-therapie-psychocorporelle.ch"
                        className="text-primary hover:underline text-sm sm:text-base"
                      >
                        contact@dcg-therapie-psychocorporelle.ch
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Adresse</h4>
                    <a 
                      href="https://maps.google.com/?q=Rue+des+Vollandes+6,+1207+Genève,+Suisse"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      <p className="text-muted-foreground">
                        Rue des Vollandes 6<br />
                        1207 Genève, Suisse<br />
                        <span className="text-sm">(Rez-de-chaussée)</span>
                      </p>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bus className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Transports</h4>
                    <p className="text-muted-foreground">
                      Arrêt de bus : Rue des Eaux-Vives<br />
                      Ligne 2
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Horaires</h4>
                    <p className="text-muted-foreground">
                      Lundi : 8h-16h<br />
                      Mardi : uniquement à domicile<br />
                      Jeudi : 9h-19h<br />
                      Vendredi : 9h-19h<br />
                      Samedi : 8h-14h
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="w-full"
                >
                  <a href="tel:+41783434527">
                    <Phone className="w-5 h-5 mr-2" />
                    Appeler maintenant
                  </a>
                </Button>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 bg-background/90 backdrop-blur-sm border-primary/10">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Carte
              </h3>
              <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.1887445875445!2d6.155956476826134!3d46.19830817112088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c7b0c6c8c8c8d%3A0x8c8c8c8c8c8c8c8c!2sRue%20des%20Vollandes%206%2C%201207%20Gen%C3%A8ve!5e0!3m2!1sfr!2sch!4v1234567890123!5m2!1sfr!2sch"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation DCG Thérapie"
                  className="w-full h-full"
                />
              </div>
            </Card>
          </div>

          <div className="mt-8 flex justify-center">
            <img 
              src={logoAsca} 
              alt="Thérapeute agréé ASCA - Fondation suisse pour les médecines complémentaires" 
              className="h-20 sm:h-24 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
