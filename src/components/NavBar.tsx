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
      <div className="h-full px-10 flex items-center justify-between text-white font-medium gap-12">
        {/* ----LeftSide---- */}

        <div className="text-2xl font-bold tracking-wide">Ethan Dinh</div>

        {/* ----Center---- */}

        <div className="flex items-center gap-8">
          {pages.map((page) => {
            return (
              <button
                key={page.id}
                className="cursor-pointer"
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

        <div>
          <button
            key={"contact"}
            className="cursor-pointer"
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
