import { useState } from "react";
import logotext from "../assets/logo-text.png";

const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 lg:hidden"
        >
          <span className="block h-0.5 w-5 bg-slate-800"></span>
          <span className="my-1.5 block h-0.5 w-5 bg-slate-800"></span>
          <span className="block h-0.5 w-5 bg-slate-800"></span>
        </button>

        <a
          href="#"
          className="absolute left-1/2 -translate-x-1/2 text-xl font-bold lg:static lg:translate-x-0"
        >
          <img src={logotext} alt="" />
        </a>

        <div className="hidden items-center gap-7 lg:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-sm ${
                link === "Home" ? "text-pink-500" : "text-slate-600"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <button className="px-2 py-2 text-xs font-medium text-slate-700 sm:px-3 sm:text-sm">
            Sign In
          </button>

          <button className="gradient-bg rounded-full px-3 py-2 text-xs font-semibold text-white sm:px-5 sm:text-sm">
            Sign Up
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-slate-700"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
