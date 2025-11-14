import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import SessionProcess from "@/components/SessionProcess";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Approach />
      <Services />
      <SessionProcess />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
