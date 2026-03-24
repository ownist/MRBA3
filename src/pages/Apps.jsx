import { Suspense } from "react";
import { LuSearch } from "react-icons/lu";
import { useLoaderData } from "react-router";
import TrendingAppsCard from "../components/TrendingAppsCard";

const Apps = () => {
  const appData = useLoaderData();

  return (
    <section className="max-w-360 mx-auto px-4 mt-8 sm:mt-20">
      <div className="text-center space-y-4">
        <h1 className="text-main text-5xl font-bold">Our All Applications</h1>
        <p className="text-slate-500 text-xl font-normal">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* filter */}
      <div className="mt-10 mb-4 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
        <h4 className="text-main text-2xl font-semibold">(132) Apps Found</h4>

        {/* input */}
        <div className="w-full sm:w-96 relative">
          <input
            className="w-full px-4 pl-11 py-[12.5px] rounded-sm border border-neutral-300 text-slate-500 text-base font-normal"
            type="search"
            name="search"
            id="search"
            placeholder="Search Apps"
          />
          <LuSearch className="text-xl text-slate-500 absolute top-1/2 left-4 -translate-y-1/2" />
        </div>
      </div>

      <div className="">
        <Suspense>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {appData.map((app) => (
              <TrendingAppsCard app={app} key={app.id} />
            ))}
          </div>
        </Suspense>
      </div>
    </section>
  );
};

export default Apps;
