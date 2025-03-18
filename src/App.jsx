import { useState } from "react";
import Navbar from "./UI/Navbar";
import MobileMenu from "./UI/MobileMenu";
import LoadingScreenAnimation from "./UI/LoadingScreenAnimation";
import Home from "./sections/Home";
import AnimationWaves from "./UI/AnimationWaves";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import RevealOnScroll from "./UI/RevealOnScroll";
import Footer from "./sections/Footer";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      {!isLoading && (
        <LoadingScreenAnimation onComplete={() => setIsLoading(true)} />
      )}
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <RevealOnScroll>
        <Home />
        <AnimationWaves />
      </RevealOnScroll>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
