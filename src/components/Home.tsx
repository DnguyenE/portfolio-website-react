import { useState, useEffect } from "react";
import { WavyBackground } from "./ui/wavy-background";
import { FaArrowDown } from "react-icons/fa";

const Home = () => {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const onScroll = () => setShowHint(window.scrollY < 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="min-h-screen">
      <WavyBackground
        containerClassName="relateive h-screen flex items-center justify-center"
        className="z-10 text-center space-y-4 "
        backgroundFill="#161513"
      >
        <div>
          <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
            Ethan Dinh
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
            Computer Engineering Student Fueled by Curiousity and Making Ideas Reality
          </p>
        </div>

        {showHint && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/70 transition-opacity">
            <FaArrowDown className="text-2xl animate-bounce" />
          </div>
        )}
      </WavyBackground>
    </section>
  );
};

export default Home;
