import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      {/* -------NavBar------ */}

      <NavBar />

      {/* -------Main Content------ */}
      <main className="bg-[#161513]">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
