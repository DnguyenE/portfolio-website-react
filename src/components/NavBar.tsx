const pages = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About Me",
    href: "/about",
  },
  {
    id: 3,
    title: "Projects",
    href: "/projects",
  },
  {
    id: 4,
    title: "Contact Me",
    href: "/contact",
  },
];

const NavBar = () => {
  return (
    <div className="w-full h-[82px] bg-[#222222] shadow flex items-center justify-center">
      <div className="flex items-center gap-50 text-white font-medium">
        {/* ----LeftSide---- */}

        <div className="text-2xl font-bold tracking-wide">
          Insert Logo
        </div>

        {/* ----Center---- */}
        {/* ----RightSide---- */}

        <div className="flex items-center gap-8">
          {pages.map((page) => {
            return (
              <button key={page.id} className="cursor-pointer">
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
