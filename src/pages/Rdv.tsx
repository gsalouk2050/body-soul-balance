import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Rdv = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande envoyée",
      description: "Je vous recontacterai dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-light/30 via-beige/20 to-primary/10">
      {/* Header simple */}
      <header className="py-6 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-foreground">DCG Thérapie</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Prendre rendez-vous
            </h1>
            <p className="text-lg text-muted-foreground">
              Remplissez le formulaire ci-dessous ou contactez-moi directement
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Formulaire */}
            <Card className="p-8 bg-background/95 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                Demande de rendez-vous
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Type de service souhaité *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="somato">Thérapie Somato-Émotionnelle (90 min)</option>
                    <option value="therapeutique-60">Massage thérapeutique (60 min)</option>
                    <option value="therapeutique-90">Massage thérapeutique (90 min)</option>
                    <option value="classique-60">Massage classique (60 min)</option>
                    <option value="classique-90">Massage classique (90 min)</option>
                    <option value="sportif">Massage sportif (60 min)</option>
                    <option value="prenatal">Massage prénatal (60 min)</option>
                    <option value="reflexologie">Réflexologie plantaire (60 min)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message (optionnel)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Parlez-moi de votre demande, vos disponibilités..."
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Envoyer ma demande
                </Button>

                <p className="text-sm text-muted-foreground text-center mt-4">
                  📋 Une fiche de renseignements vous sera envoyée après confirmation
                </p>
              </form>
            </Card>

            {/* Informations pratiques */}
            <div className="space-y-6">
              <Card className="p-8 bg-background/95 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Informations pratiques
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Téléphone</h3>
                      <a href="tel:+41783434527" className="text-primary hover:underline">
                        +41 78 343 45 27
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                      <a 
                        href="https://maps.google.com/?q=Rue+des+Vollandes+6,+1207+Genève,+Suisse"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Rue des Vollandes 6<br />
                        1207 Genève, Suisse
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Horaires</h3>
                      <p className="text-muted-foreground">
                        Lundi : 9h-19h<br />
                        Mardi : 8h-15h<br />
                        Jeudi : 8h-15h<br />
                        Vendredi : 9h-19h<br />
                        Samedi : 8h-16h
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <Button asChild size="lg" className="w-full">
                    <a href="tel:+41783434527">
                      <Phone className="w-5 h-5 mr-2" />
                      Appeler directement
                    </a>
                  </Button>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-sage-light/20 via-primary/10 to-beige/15 border-primary/30">
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Temps de réponse
                </h3>
                <p className="text-sm text-muted-foreground">
                  Je réponds généralement dans les 24h. Pour une réponse plus rapide, 
                  n'hésitez pas à m'appeler directement.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Rdv;
