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
