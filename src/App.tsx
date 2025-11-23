import TechStack from "./components/TechStack";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import { useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.title = "Ethan's Portfolio";
  }, []);

  return (
    <div>
      {/* -------NavBar------ */}

      <NavBar />

      {/* -------Main Content------ */}
      <main className="bg-[#161513]">
        <Home />
        <TechStack />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;
