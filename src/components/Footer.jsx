import { FaBluesky, FaXTwitter } from "react-icons/fa6";
import { logo } from "../assets/assets";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 py-8 mt-20">
      <div className="max-w-360 mx-auto px-4">
        <div className="flex items-center justify-between gap-x-4">
          <div className="flex items-center gap-1">
            <img width={40} src={logo} alt="logo" />
            <h2 className="text-white text-base font-bold capitalize">
              HERO.IO
            </h2>
          </div>

          {/* social */}
          <div className="flex items-center gap-x-4">
            <button className="text-xl text-zinc-400 transition duration-150 hover:text-white">
              <FaBluesky />
            </button>
            <button className="text-xl text-zinc-400 transition duration-150 hover:text-white">
              <FaXTwitter />
            </button>
            <button className="text-xl text-zinc-400 transition duration-150 hover:text-white">
              <FaLinkedin />
            </button>
          </div>
        </div>
        <hr className="border-gray-200/20 my-6" />
        <p className="text-center text-neutral-50 text-base font-normal">
          Copyright &copy; 2026 Hero.io - All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
