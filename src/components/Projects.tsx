import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiVite,
} from "react-icons/si";
import ProjectCard from "./ProjectCard";

const languages = [
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Python", Icon: SiPython },
  { name: "C++", Icon: SiCplusplus },
  { name: "React", Icon: SiReact },
  { name: "Vite", Icon: SiVite },
];

// const projects = [
//   { name: "Todo-App" },
//   { name: "Greenhouse" },
//   { name: "Flashcard" },
// ];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center text-white"
    >
      {/* ---Technical Languages / Skills --- */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl sm:text-3xl font-extrabold leading-tight mb-5">
          Technical Languages
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mb-10">
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
        <h2 className="text-xl sm:text-3xl font-extrabold leading-tight mb-3">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard title="To-Do App in React" description="testing desc" image="/src/assets/todo-app.png" demo="" code=""/>
        </div>
      </div>
    </section>
  );
};

export default Projects;
