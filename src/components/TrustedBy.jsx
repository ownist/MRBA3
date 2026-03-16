import { trustedBy } from "../constants";

const TrustedBy = () => {
  return (
    <section className="w-full py-20 bg-linear-30 from-violet-700 to-purple-500">
      <div className="max-w-360 mx-auto px-4 text-center space-y-10">
        <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight">
          Trusted by Millions, Built for You
        </h1>

        <div className="flex flex-wrap items-center justify-center text-center gap-x-32 gap-y-10">
          {trustedBy.map((item) => (
            <div key={item.id} className="space-y-4">
              <p className="text-white/80 text-base font-normal">
                {item.title}
              </p>
              <h1 className="text-white text-6xl font-extrabold">
                {item.review}
              </h1>
              <p className="text-white/80 text-base font-normal">
                {item.perText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
