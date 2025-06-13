import { useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

import { useAuth } from "../hooks/useAuth";

import UserProfile from "./UserProfile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  const navItems = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Sakoo", path: "/about" },
    {
      name: "Fitur Utama",
      path: `${isAuthenticated ? "/cek-keuangan" : "/wajib-login"}`,
    },
  ];

  return (
    <nav className="bg-white w-full pd py-3 shadow-md sticky top-0 z-50">
      {/* Dekstop Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-[#204842] flex items-center"
        >
          Sakoo
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-between gap-6 font-semibold md:w-[428px]">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="hover:text-[#BAF699] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Login / Register */}
        {isAuthenticated ? (
          <div className="hidden md:flex items-center gap-4">
            <UserProfile user={user} logout={logout} />
          </div>
        ) : (
          <div className="hidden md:flex items-center">
            <button className="h-[33px] text-[#2A2A2A] mr-3 font-semibold cursor-pointer">
              <Link to={"/login"}>Login</Link>
            </button>
            <div className="line"></div>
            <button className="w-[99px] h-[33px] bg-[#BAF699] ml-3 font-semibold cursor-pointer rounded-[5px]">
              <Link to={"/register"}>Register</Link>
            </button>
          </div>
        )}

        {/* Hamburger Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? (
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAPFJREFUSEvtlNENwjAMRK+bwCYwCTAJowCTwCZlFHpSLEUlcc6tRPmIP1vXrz77PGCjGDbiooN/pnyX+q+k3gG4AngAeDX+7ADgNuXuWx0oM35OQBZ8A7g4cOYwl8FcF66Az6kLK1iC51DmHVvqKGAW8uBhKAuq4Bqcz01eqVObfQRcgnPxLJry5gsXBc/hi6BRqQ0yn2lr24vOinY8h1rRMDwCLm0vZ8yD4VltVceeZRSff8GVjhWfhuEKeARgtvEsk8Pv6bxWT7YCJpRHwrvTBiD8lE5mFbrUTm5B9aXSsVorlNfBIbnWJHep16gX+vYDg2Y2HyWbDqIAAAAASUVORK5CYII=" />
          ) : (
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAHJJREFUSEvtlcENwDAIA4HJOlpH62RQKVI/Tfpzah7OAD7lYogb6TiJawL/Zl6qh+qIOJHOM3PKW6p290KCq2ri9AIjb/uVpVY/Zg6w7uud16tctHEyM45q8Psu4zROQwutXDQw7VtUq3cY0BzvsNprZd7OaSIf43X8KwAAAABJRU5ErkJggg==" />
          )}
        </button>
      </div>

      {/* Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white px-6 py-4 shadow-inner"
          >
            <div className="flex flex-col gap-4 font-semibold">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="hover:text-[#BAF699]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {isAuthenticated ? (
                <div className="flex flex-row items-center">
                  <UserProfile user={user} logout={logout} />
                </div>
              ) : (
                <div className="flex flex-row items-center">
                  <button className="h-[33px] text-[#2A2A2A] mr-3 font-semibold cursor-pointer">
                    <Link to={"/login"}>Login</Link>
                  </button>
                  <div className="line"></div>
                  <button className="w-[99px] h-[33px] bg-[#BAF699] ml-3 font-semibold cursor-pointer rounded-[10px]">
                    <Link to={"/register"}>Register</Link>
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
