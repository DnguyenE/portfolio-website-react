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
  {
    id: "contact",
    title: "Contact Me",
    href: "/contact",
  },
];

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-[82px] bg-[#222222] shadow flex items-center justify-center">
      <div className="flex items-center gap-50 text-white font-medium">
        {/* ----LeftSide---- */}

        <div className="text-2xl font-bold tracking-wide">Ethan Dinh</div>

        {/* ----Center---- */}
        {/* ----RightSide---- */}

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
      </div>
    </div>
  );
};

export default NavBar;
