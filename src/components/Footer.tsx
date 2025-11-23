import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { label: "Email", href: "mailto:ethanvdinh@gmail.com", Icon: FaEnvelope },
  { label: "GitHub", href: "https://github.com/DnguyenE", Icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ethan-dinh-8a4072327/",
    Icon: FaLinkedin,
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#techstack" },
  { label: "Projects", href: "#projects" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-[#0f0e0c] text-white/90 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Let's connect
            </p>
            <p className="text-2xl font-semibold bg-linear-to-r from-[#FF8660] to-[#9A33FF] bg-clip-text text-transparent">
              Ethan Dinh
            </p>
            <p className="text-white/60 max-w-xl text-sm">
              Open to collaborations, internships, and new opportunities. Drop a
              line and I'll get back to you.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
              >
                <Icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="px-3 py-1 rounded-full border border-white/10 bg-white/5 hover:border-white/30 hover:text-white transition"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/50">
          <span>© {year} Ethan Dinh. All rights reserved.</span>
          <span className="text-white/70">
            Currently exploring new projects and opportunities.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
