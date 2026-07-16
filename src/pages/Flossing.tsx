import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Waves, MapPin, Clock, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ONEDOC_URL = "https://app.onedoc.ch/fr/embed/widget/sandrine-jaccoud";

const faq = [
  {
    q: "Qu'est-ce que le flossing thérapeutique ?",
    a: "Une technique manuelle utilisant des bandes élastiques compressives associées au mouvement, pour favoriser la mobilité articulaire, le relâchement des fascias et la récupération myofasciale.",
  },
  {
    q: "Où se déroulent les séances à Genève ?",
    a: "Au cabinet DCG Sandrine, Rue Maunoir 13, 1207 Genève – quartier des Eaux-Vives (au fond de la cour à gauche, 1er étage).",
  },
  {
    q: "Combien coûte une séance ?",
    a: "Une séance de flossing thérapeutique dure 60 minutes et coûte 130 CHF.",
  },
  {
    q: "À qui s'adresse cette technique ?",
    a: "Aux personnes souffrant de douleurs musculaires ou articulaires, de restrictions de mobilité, de tensions myofasciales, ainsi qu'en récupération sportive ou en suites post-opératoires.",
  },
  {
    q: "Est-ce remboursé par les assurances ?",
    a: "En tant que thérapeute agréée ASCA, les séances peuvent être prises en charge par la plupart des assurances complémentaires suisses, selon votre couverture.",
  },
];

const Flossing = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: "Flossing thérapeutique",
    description:
      "Technique de thérapie manuelle utilisant des bandes élastiques compressives associées au mouvement afin de favoriser la mobilité, le relâchement tissulaire et la récupération fonctionnelle du corps.",
    url: "https://dcg-therapie-psychocorporelle.ch/flossing",
    provider: {
      "@type": "MedicalBusiness",
      name: "DCG Sandrine - Massothérapie & Thérapie psychocorporelle",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rue Maunoir 13",
        postalCode: "1207",
        addressLocality: "Genève",
        addressCountry: "CH",
      },
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-light/30 via-beige/20 to-primary/10">
      <Helmet>
        <title>Flossing thérapeutique à Genève — DCG Sandrine (Eaux-Vives)</title>
        <meta
          name="description"
          content="Flossing thérapeutique à Genève (Eaux-Vives) : bandes compressives, mobilité et fascias. Séance 60 min – 130 CHF. Agréée ASCA."
        />
        <link rel="canonical" href="https://dcg-therapie-psychocorporelle.ch/flossing" />
        <meta property="og:title" content="Flossing thérapeutique à Genève — DCG Sandrine" />
        <meta
          property="og:description"
          content="Bandes compressives, mobilité et récupération myofasciale au cabinet de Genève – Eaux-Vives."
        />
        <meta property="og:url" content="https://dcg-therapie-psychocorporelle.ch/flossing" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>

      {/* Fallback texte pour bots qui n'exécutent pas le JS */}
      <noscript>
        <div style={{ padding: 24, maxWidth: 800, margin: "0 auto", fontFamily: "system-ui, sans-serif" }}>
          <h1>Flossing thérapeutique à Genève — DCG Sandrine</h1>
          <p>
            Le flossing thérapeutique est une technique de thérapie manuelle utilisant des bandes élastiques
            compressives associées au mouvement afin de favoriser la mobilité, le relâchement tissulaire et la
            récupération fonctionnelle du corps. Proposé au cabinet DCG Sandrine Massothérapie & Thérapie
            psychocorporelle à Genève (Rue Maunoir 13, 1207 Genève — Eaux-Vives), il s'intègre dans une approche
            globale du corps, des fascias et du mouvement.
          </p>
          <h2>Indications</h2>
          <ul>
            <li>Douleurs musculaires et articulaires</li>
            <li>Restrictions de mobilité</li>
            <li>Tensions myofasciales</li>
            <li>Récupération sportive</li>
            <li>Suites post-opératoires</li>
            <li>Tensions chroniques du corps</li>
          </ul>
          <h2>Tarif</h2>
          <p>Séance de 60 minutes — 130 CHF. Thérapeute agréée ASCA.</p>
        </div>
      </noscript>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Waves className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm uppercase tracking-wide text-muted-foreground">Massothérapie</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Flossing thérapeutique à Genève
          </h1>
          <p className="text-lg text-muted-foreground italic">
            Bandes compressives, mobilité et récupération myofasciale
          </p>
        </header>

        <Card className="p-6 md:p-8 mb-8 bg-background/70 backdrop-blur-sm">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Le flossing thérapeutique est une technique de thérapie manuelle utilisant des bandes élastiques
            compressives associées au mouvement afin de favoriser la mobilité, le relâchement tissulaire et la
            récupération fonctionnelle du corps.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Proposé au cabinet DCG Sandrine Massothérapie & Thérapie psychocorporelle à Genève, le flossing
            s'intègre dans une approche globale du corps, des fascias et du mouvement.
          </p>
        </Card>

        <Card className="p-6 md:p-8 mb-8 bg-background/70 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-foreground mb-4">Indications</h2>
          <p className="text-muted-foreground mb-3">Cette approche peut être proposée dans l'accompagnement :</p>
          <ul className="space-y-2">
            {[
              "des douleurs musculaires et articulaires,",
              "des restrictions de mobilité,",
              "des tensions myofasciales,",
              "des sensations de raideur corporelle,",
              "de la récupération sportive,",
              "de certaines suites post-opératoires,",
              "des tensions chroniques du corps.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6 md:p-8 mb-8 bg-background/70 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Une approche basée sur les fascias et le mouvement
          </h2>
          <p className="text-muted-foreground mb-3">
            Le flossing agit grâce à une compression tissulaire temporaire réalisée avec des bandes spécifiques,
            combinée à des mouvements adaptés et progressifs.
          </p>
          <p className="text-muted-foreground mb-3">Cette technique peut contribuer à :</p>
          <ul className="space-y-2 mb-3">
            {[
              "améliorer la mobilité articulaire,",
              "favoriser le glissement des tissus et des fascias,",
              "soutenir la circulation sanguine et lymphatique,",
              "améliorer la récupération musculaire,",
              "diminuer certaines tensions mécaniques,",
              "favoriser une meilleure perception corporelle.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground">
            Le travail est toujours réalisé de manière progressive, personnalisée et adaptée aux besoins de la
            personne.
          </p>
        </Card>

        <Card className="p-6 md:p-8 mb-8 bg-background/70 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-foreground mb-4">Récupération post-opératoire</h2>
          <p className="text-muted-foreground mb-3">
            Le flossing thérapeutique peut également être intégré dans certains accompagnements post-opératoires,
            en complément d'un suivi médical adapté.
          </p>
          <p className="text-muted-foreground">
            Selon les besoins, cette approche peut aider à soutenir la mobilité, la récupération fonctionnelle et
            certaines sensations de raideur ou de tension tissulaire après une intervention.
          </p>
        </Card>

        <Card className="p-6 md:p-8 mb-8 bg-gradient-to-br from-sage-light/30 via-background to-beige/20 border-primary/20">
          <h2 className="text-2xl font-bold text-foreground mb-4">Au cabinet de Genève – Eaux-Vives</h2>
          <p className="text-muted-foreground mb-3 flex items-start gap-2">
            <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <span>
              <strong className="text-foreground">Rue Maunoir 13, 1207 Genève</strong> — au fond de la cour à
              gauche, 1<sup>er</sup> étage. Quartier des Eaux-Vives, à deux pas de Rive, la Terrassière et Champel.
            </span>
          </p>
          <p className="text-muted-foreground flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            <span>
              <strong className="text-foreground">60 minutes</strong> — Tarif :{" "}
              <strong className="text-foreground">130 CHF</strong>
            </span>
          </p>
        </Card>

        <Card className="p-6 md:p-8 mb-8 bg-background/70 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-foreground mb-4">Questions fréquentes</h2>
          <div className="space-y-4">
            {faq.map((item) => (
              <details key={item.q} className="rounded-md border border-primary/10 bg-background/60 p-4">
                <summary className="cursor-pointer font-medium text-foreground">{item.q}</summary>
                <p className="mt-2 text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </Card>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => window.open(ONEDOC_URL, "_blank", "noopener,noreferrer")}
          >
            Prendre RDV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Flossing;
