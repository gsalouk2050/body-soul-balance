import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import dcgLogo from "@/assets/dcg-logo.png";

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
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={dcgLogo} alt="DCG Logo" className="h-16 w-16 object-contain" />
            <div>
              <h1 className="text-xl font-bold text-foreground">DCG</h1>
              <p className="text-sm text-muted-foreground">Thérapie psychocorporelle</p>
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
            <Button onClick={() => scrollToSection("contact")} variant="default" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Prendre RDV
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
            <Button onClick={() => scrollToSection("contact")} className="w-full">
              <Phone className="w-4 h-4 mr-2" />
              Prendre RDV
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
