import { useEffect, useState } from "react";

const pages = [
  {
    id: "home",
    title: "Home",
    href: "/",
  },
  {
    id: "about",
    title: "About Me",
    href: "/about",
  },
  {
    id: "projects",
    title: "Projects",
    href: "/projects",
  },
];

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[min(1100px,calc(100%-2rem))] h-[72px] rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-6 pointer-events-none"
      }`}
    >
      <div className="h-full px-10 flex items-center text-white font-medium gap-12">
        {/* ----LeftSide---- */}

        <button
          key={"home"}
          className="text-2xl font-bold tracking-wide shrink-0 cursor-pointer bg-linear-to-r from-[#FF8660] to-[#9A33FF] bg-clip-text text-transparent"
          onClick={() => {
            document
              .getElementById("home")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Ethan Dinh
        </button>

        {/* ----Center---- */}

        <div className="flex-1 flex items-center justify-center gap-8">
          {pages.map((page) => {
            return (
              <button
                key={page.id}
                className="cursor-pointer hover:text-[#FF8660]"
                onClick={() =>
                  document
                    .getElementById(page.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {page.title}
              </button>
            );
          })}
        </div>

        {/* ----RightSide---- */}

        <div className="shrink-0">
          <button
            key={"contact"}
            className="px-4 py-2 rounded-full bg-linear-to-r from-[#FF8660] to-[#9A33FF] text-white font-semibold shadow-md cursor-pointer transition hover:scale-[1.02]"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
