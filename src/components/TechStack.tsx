import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/home-pic.png";

const TechStack = () => {
  return (
    <section
      id="techstack"
      className="min-h-screen flex flex-col items-center justify-center text-white"
    >
      {/* ---Avatar--- */}
      <div className="w-full max-w-5xl px-4 flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full bg-linear-to-b from-[#FF8660] to-[#9A33FF] p-1 mb-8">
          <div className="w-full h-full rounded-full bg-[#111111] flex items-center justify-center ">
            <img src={logo} />
          </div>
        </div>

        {/* ---Intro Text--- */}

        <p className="uppercase tracking-[0.35em] text-[15px] text-white mb-3">
          Hello, I&apos;m Ethan,
        </p>

        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4">
          Third Year{" "}
          <span className="bg-linear-to-r from-[#FF8660] to-[#9A33FF] bg-clip-text text-transparent">
            Computer Engineering
          </span>{" "}
          Student
        </h1>

        <p className="max-w-2xl text-sm sm:text-base text-[#C5C5C5] mb-8">
          My passion to translate ideas to code is what drives me to build meaningful solutions
        </p>

        {/* ---Download Button--- */}

        <a
          href="/Dinh_Ethan_Resume.pdf"
          download="Ethan_Dinh_Resume.pdf"
          className="px-6 py-3 rounded-full border border-white/60 font-semibold hover:bg-white hover:text-black transition cursor-pointer"
        >
          Download Resume
        </a>
        <div className="flex gap-4 mt-4 text-4xl text-white/60 font-semibold cursor-pointer">
          <a
            className="hover:text-white"
            href="https://github.com/DnguyenE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="hover:text-white"
            href="https://www.linkedin.com/in/ethan-dinh-8a4072327/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
