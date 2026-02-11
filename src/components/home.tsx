import Navigation from "./Navigation";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import PortfolioGrid from "./PortfolioGrid";
import About from "./About";
import Process from "./Process";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Navigation />
      <Hero />
      <AboutMe />
      <PortfolioGrid />
      <About />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
export default Home;
