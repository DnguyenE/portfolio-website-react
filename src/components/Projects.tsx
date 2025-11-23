import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiVite,
} from "react-icons/si";
import ProjectCard from "./ProjectCard";
import todoImg from "../assets/todo-app.png";
import portfolioImg from "../assets/portfolio-pic.png";
import ecoboardImg from "../assets/react-ecoboard-pic.png";

const languages = [
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Python", Icon: SiPython },
  { name: "C++", Icon: SiCplusplus },
  { name: "React", Icon: SiReact },
  { name: "Vite", Icon: SiVite },
];

const projects = [
  {
    title: "To-Do App in React",
    description: "A simple yet efficient To-Do List app to track tasks",
    image: todoImg,
    demo: "https://dnguyene-todo.vercel.app",
    code: "https://github.com/DnguyenE/todo-app-react",
  },
  {
    title: "Portfolio Website",
    description: "A friendly portfolio to display my experience",
    image: portfolioImg,
    code: "https://github.com/DnguyenE/portfolio-website-react",
  },
  {
    title: "Real-Time Dashboard",
    description: "A dashboard that updates based on simulated data",
    image: ecoboardImg,
    demo: "https://react-ecoboard.vercel.app",
    code: "https://github.com/DnguyenE/react-ecoboard",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center text-white"
    >
      <div className="w-full max-w-5xl px-4 mx-auto text-center">
        {/* ---Technical Languages / Skills --- */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl sm:text-3xl font-extrabold leading-tight mb-5">
            Technical Languages
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mb-15">
            {languages.map(({ name, Icon }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-linear-to-b from-[#FF8660] to-[#9A33FF] p-[3px] shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                  <div className="w-full h-full rounded-full bg-[#111111] flex items-center justify-center text-3xl text-white">
                    <Icon />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ---Projects--- */}
        <div>
          <h2 className="text-xl sm:text-3xl font-extrabold leading-tight mb-8">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                code={project.code}
                demo={project.demo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
