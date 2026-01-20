import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "approche", label: "Mon Approche" },
    { id: "services", label: "Services" },
    { id: "about", label: "À Propos" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/98 backdrop-blur-lg shadow-lg" : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 p-2 flex items-center justify-center">
              <img src={logoIcon} alt="DCG Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">DCG Sandrine</h1>
              <p className="text-xs text-muted-foreground">Massothérapie & Thérapie psychocorporelle</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button asChild variant="default" size="sm">
              <a href="https://onedoc.ch/fr/widget/6a970205d36d11ab5603d6631a5c3524c3a692408e276252632ad1ce9d6f0a47" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" />
                Prendre RDV
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-border pt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button asChild className="w-full">
              <a href="https://onedoc.ch/fr/widget/6a970205d36d11ab5603d6631a5c3524c3a692408e276252632ad1ce9d6f0a47" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" />
                Prendre RDV
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
