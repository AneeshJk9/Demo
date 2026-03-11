import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Services from "../components/Services";
import BeforeAfter from "../components/BeforeAfter";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <BeforeAfter />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
