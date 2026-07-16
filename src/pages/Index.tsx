import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import SessionProcess from "@/components/SessionProcess";
import About from "@/components/About";
import InfoRequest from "@/components/InfoRequest";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <link rel="canonical" href="https://dcg-therapie-psychocorporelle.ch/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "DCG Sandrine - Massothérapie & Thérapie psychocorporelle",
          "image": "https://dcg-therapie-psychocorporelle.ch/favicon.png",
          "url": "https://dcg-therapie-psychocorporelle.ch/",
          "telephone": "+41783434527",
          "email": "contact@dcg-therapie-psychocorporelle.ch",
          "priceRange": "CHF 90 - CHF 230",
          "areaServed": [
            { "@type": "Place", "name": "Genève" },
            { "@type": "Place", "name": "Eaux-Vives" },
            { "@type": "Place", "name": "Rive" },
            { "@type": "Place", "name": "Champel" },
            { "@type": "Place", "name": "Thônex" }
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rue Maunoir 13",
            "postalCode": "1207",
            "addressLocality": "Genève",
            "addressCountry": "CH"
          },
          "geo": { "@type": "GeoCoordinates", "latitude": 46.2017, "longitude": 6.1622 },
          "medicalSpecialty": "PhysicalTherapy",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Soins proposés",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Flossing thérapeutique",
                  "description": "Technique manuelle utilisant des bandes élastiques compressives associées au mouvement pour favoriser mobilité, relâchement myofascial et récupération.",
                  "areaServed": "Genève - Eaux-Vives"
                },
                "price": "130",
                "priceCurrency": "CHF"
              }
            ]
          }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Qu'est-ce que le flossing thérapeutique ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Le flossing thérapeutique est une technique de thérapie manuelle utilisant des bandes élastiques compressives associées au mouvement, afin de favoriser la mobilité articulaire, le relâchement des fascias et la récupération myofasciale."
              }
            },
            {
              "@type": "Question",
              "name": "Où se déroulent les séances de flossing à Genève ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Les séances ont lieu au cabinet DCG Sandrine, Rue Maunoir 13, 1207 Genève, dans le quartier des Eaux-Vives (au fond de la cour à gauche, 1er étage)."
              }
            },
            {
              "@type": "Question",
              "name": "Combien coûte une séance de flossing thérapeutique ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Une séance de flossing thérapeutique dure 60 minutes et coûte 130 CHF au cabinet de Genève - Eaux-Vives."
              }
            },
            {
              "@type": "Question",
              "name": "À qui s'adresse le flossing thérapeutique ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Le flossing s'adresse aux personnes présentant des douleurs musculaires ou articulaires, des restrictions de mobilité, des tensions myofasciales, ainsi qu'en récupération sportive ou dans certaines suites post-opératoires."
              }
            },
            {
              "@type": "Question",
              "name": "Le flossing thérapeutique est-il remboursé par les assurances ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "En tant que thérapeute agréée ASCA, les séances peuvent être prises en charge par la plupart des assurances complémentaires suisses, selon votre couverture."
              }
            }
          ]
        })}</script>
      </Helmet>
      <Header />
      <Hero />
      <Approach />
      <Services />
      <SessionProcess />
      <About />
      <InfoRequest />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
