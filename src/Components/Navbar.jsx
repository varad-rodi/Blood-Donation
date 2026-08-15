
import { NavLink } from "react-router-dom";
import navbarBg from "../assets/navbarbg.png";
import { FaDroplet } from "react-icons/fa6";

function Navbar() {
  return (
    <nav
      className="w-full bg-cover bg-center bg-no-repeat shadow-xl sticky top-0 z-50"
      style={{ backgroundImage: `url(${navbarBg})` }}
    >
      <div className="bg-white/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <NavLink to="/" className="text-red-600 text-2xl font-bold flex items-center gap-2">
              <FaDroplet /> LifeDrop
            </NavLink>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex gap-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-semibold transition duration-300 ${
                    isActive
                      ? "text-red-600 border-b-2 border-red-600 pb-1"
                      : "text-gray-800 hover:text-red-600"
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `font-semibold transition duration-300 ${
                    isActive
                      ? "text-red-600 border-b-2 border-red-600 pb-1"
                      : "text-gray-800 hover:text-red-600"
                  }`
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blood-stock"
                className={({ isActive }) =>
                  `font-semibold transition duration-300 ${
                    isActive
                      ? "text-red-600 border-b-2 border-red-600 pb-1"
                      : "text-gray-800 hover:text-red-600"
                  }`
                }
              >
                Blood Stock
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  `font-semibold transition duration-300 ${
                    isActive
                      ? "text-red-600 border-b-2 border-red-600 pb-1"
                      : "text-gray-800 hover:text-red-600"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="flex gap-4 items-center">
            <NavLink to="/donate">
              <button className="px-6 py-2 rounded-xl bg-red-600 text-white font-semibold shadow-lg hover:bg-red-700 hover:scale-105 transition duration-300">
                Donate Now
              </button>
            </NavLink>

            <NavLink to="/login">
              <button className="px-6 py-2 rounded-xl border-2 border-red-600 text-red-600 font-semibold hover:bg-red-600 hover:text-white hover:scale-105 transition duration-300">
                Login
              </button>
            </NavLink>

            <NavLink to="/register">
              <button className="px-6 py-2 rounded-xl border-2 border-green-600 text-green-600 font-semibold hover:bg-green-600 hover:text-white hover:scale-105 transition duration-300">
                Register
              </button>
            </NavLink>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;