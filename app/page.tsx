import About from "@/components/About";
import Agency from "@/components/Agency";
import Contact from "@/components/Contact";
import Earlybird from "@/components/Earlybird";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Story from "@/components/Story";
import WhyUs from "@/components/WhyUs";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Agency />
        <WhyUs />
        <Story />
        <Earlybird />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
