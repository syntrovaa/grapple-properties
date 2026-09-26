import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PropertiesSection from "@/components/PropertiesSection";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-sand">
      <Header />
      <Hero />
      <PropertiesSection />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
