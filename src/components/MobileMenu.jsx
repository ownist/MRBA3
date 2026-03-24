import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { navigationItems } from "../constants";
import { logo } from "../assets/assets";
import { FaGithub } from "react-icons/fa";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-xl text-violet-700 font-semibold size-12 bg-violet-50 hover:bg-violet-100 transition-colors rounded-full flex items-center justify-center cursor-pointer"
        aria-label="Open menu"
      >
        <RiMenu3Fill />
      </button>

      <div
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 w-[85%] max-w-85 h-full bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <Link
            to={"/"}
            className="flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <img width={32} src={logo} alt="logo" />
            <span className="text-violet-700 text-lg font-bold">HERO.IO</span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="size-10 rounded-full bg-gray-50 flex items-center justify-center text-xl text-gray-600 hover:bg-gray-100 hover:text-red-500 transition-all cursor-pointer"
            aria-label="Close menu"
          >
            <RiCloseLine />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          <ul className="flex flex-col gap-2">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-[17px] font-medium rounded-lg transition-all ${
                      isActive
                        ? "bg-violet-50 text-violet-700"
                        : "text-slate-600 hover:bg-gray-50 hover:text-violet-600"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 border-t border-gray-100 mt-auto">
          <Link
            to={"https://github.com/ownist/MRBA3"}
            target="_blank"
            className="block w-full"
          >
            <button className="w-full flex justify-center items-center gap-x-2.5 px-4 py-3.5 bg-linear-to-br from-violet-700 to-purple-500 rounded-xl text-white text-base font-semibold shadow-md active:scale-95 transition-all duration-200 cursor-pointer">
              <FaGithub className="text-xl" />
              <span>Contribute</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
