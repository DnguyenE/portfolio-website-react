import { WavyBackground } from "./ui/wavy-background";

const Home = () => {
  return (
    <section id="home" className="min-h-screen">
      <WavyBackground
        containerClassName="relateive h-screen flex items-center justify-center"
        className="z-10 text-center space-y-4 "
        backgroundFill="#161513"
      >
        <div>
          <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
            Hello World
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
            Testing but this is line 2
          </p>
        </div>
      </WavyBackground>
    </section>
  );
};

export default Home;
