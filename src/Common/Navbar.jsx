import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Departments", path: "/department" },
    { name: "Contact", path: "/contact" },
  ];

  const linkStyle = ({ isActive }) =>
    `relative transition-all duration-300 ${
      isActive
        ? "text-red-500"
        : "text-slate-300 hover:text-red-400"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 pt-4">

      <nav className="max-w-7xl mx-auto bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/20 rounded-2xl">

        <div className="px-5 md:px-7 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/30">
              <span className="text-xl">🩸</span>
            </div>

            <div>
              <h1 className="text-lg font-bold text-white leading-none">
                Blood<span className="text-red-500">Care</span>
              </h1>

              <p className="text-[10px] text-slate-500 mt-1">
                Save Lives Together
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={linkStyle}
              >
                {({ isActive }) => (
                  <span className="relative py-2">
                    {link.name}

                    {isActive && (
                      <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-red-500 rounded-full" />
                    )}
                  </span>
                )}
              </NavLink>
            ))}

          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">

            <Link
              to="/contact"
              className="group flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-red-600/20"
            >
              <span>Donate Blood</span>

              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition"
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10 px-5 py-5">

            <div className="flex flex-col gap-2">

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl transition ${
                      isActive
                        ? "bg-red-500/10 text-red-500"
                        : "text-slate-300 hover:bg-white/5 hover:text-red-400"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 text-center bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl font-semibold transition"
              >
                🩸 Donate Blood
              </Link>

            </div>

          </div>
        )}

      </nav>

    </header>
  );
};

export default Navbar;