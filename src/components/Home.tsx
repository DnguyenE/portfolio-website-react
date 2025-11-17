import logo from "../assets/home-pic.png";

const Home = () => {
  return (
    <section
      id="home"
      className="scroll-mt-[82px] min-h-[calc(100vh-82px)] text-white flex justify-center pt-28 pb-16"
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
          Student <br /> at Lassonde School of Engineering
        </h1>

        <p className="max-w-2xl text-sm sm:text-base text-[#C5C5C5] mb-8">
          I am passionate...
        </p>

        {/* ---Download Button--- */}

        <a
          href="/Dinh_Ethan_Resume.pdf"
          download="Ethan_Dinh_Resume.pdf"
          className="px-6 py-3 rounded-full border border-white/60 font-semibold hover:bg-white hover:text-black transition cursor-pointer"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Home;
