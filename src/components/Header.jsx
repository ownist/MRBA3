import { Link, NavLink } from "react-router";
import { logo } from "../assets/assets";
import { navigationItems } from "../constants";
import { FaGithub } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-b-gray-200">
      <nav className="max-w-360 mx-auto px-4 py-5 flex items-center justify-between">
        {/* logo */}
        <Link to={"/"} className="flex items-center gap-1">
          <img width={40} src={logo} alt="logo" />
          <span className="text-violet-700 text-base font-bold">HERO.IO</span>
        </Link>

        {/* nav items / menus */}
        <ul className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to={item.path}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* contribute button */}
        <div className="hidden md:inline-flex">
          <Link to={"https://github.com/ownist/MRBA3"} target="_blank">
            <button className="flex items-center gap-x-2.5 px-4 py-3 bg-linear-to-br from-violet-700 to-purple-500 rounded text-white text-base font-semibold transition duration-150 transform active:scale-90">
              <FaGithub />
              <span>Contribute</span>
            </button>
          </Link>
        </div>

        {/* mobile menu */}
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Header;
