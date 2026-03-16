import { Link } from "react-router";
import { heroBtn } from "../constants";
import { heroImg } from "../assets/assets";

const Hero = () => {
  return (
    <section className="max-w-5xl mx-auto text-center min-h-dvh pt-10 sm:pt-20">
      <div className="mb-10">
        <h1 className="opacity-90 text-main text-4xl sm:text-7xl font-bold leading-tight mb-4">
          We Build
          <br />
          <span className="text-violet-700">Productive</span> Apps
        </h1>

        <p className="text-slate-500 text-base sm:text-xl font-normal">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {heroBtn.map((btn) => (
            <Link key={btn.id} to={btn.path} target="_blank">
              <button className="flex items-center gap-x-2.5 text-main text-xl font-semibold px-6 py-3 rounded-sm border border-neutral-300 transition duration-150 hover:bg-neutral-200 transform active:scale-90">
                <img src={btn.img} alt={btn.label} />
                <span>{btn.label}</span>
              </button>
            </Link>
          ))}
        </div>
      </div>

      <div className="">
        <img className="max-w-full w-full" src={heroImg} alt="hero image" />
      </div>
    </section>
  );
};

export default Hero;
