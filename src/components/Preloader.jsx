import { logo } from "../assets/assets";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-9999 bg-white/90 backdrop-blur-md flex flex-col items-center justify-center">
      <div className="flex flex-col items-center relative">
        <div className="animate-bounce">
          <img
            src={logo}
            alt="HERO.IO Logo"
            className="w-28 h-28 object-contain drop-shadow-lg"
          />
        </div>

        <h2 className="text-violet-700 text-4xl font-extrabold mt-6 tracking-widest animate-pulse drop-shadow-sm">
          HERO.IO
        </h2>

        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <div
            className="w-2.5 h-2.5 rounded-full bg-violet-600 animate-pulse"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-2.5 h-2.5 rounded-full bg-violet-600 animate-pulse"
            style={{ animationDelay: "200ms" }}
          ></div>
          <div
            className="w-2.5 h-2.5 rounded-full bg-violet-600 animate-pulse"
            style={{ animationDelay: "400ms" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
