import { lazy, Suspense } from "react";
import { Link } from "react-router";
import TrendingAppsCardSkeleton from "./TrendingAppsCardSkeleton";


const TrendingAppsCard = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("./TrendingAppsCard"));
      }, 1500);
    })
);
const TrendingApps = ({ appsData }) => {
  return (
    <section className="w-full mt-20">
      <div className="max-w-360 mx-auto px-4 space-y-10">
        {/* heading */}
        <div className="text-center space-y-4">
          <h1 className="text-main text-5xl font-bold">Trending Apps</h1>
          <p className="text-gray-500 text-xl font-normal">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* apps cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {appsData.slice(0, 8).map((app) => (
            <Suspense key={app.id} fallback={<TrendingAppsCardSkeleton />}>
              <TrendingAppsCard app={app} />
            </Suspense>
          ))}
        </div>

        {/* show all btn */}
        <div className="flex items-center justify-center text-center">
          <Link to={"/apps"}>
            <button className="text-white text-base font-semibold px-10 py-3.5 bg-linear-30 from-violet-700 to-purple-500 rounded-sm transition duration-150 transform active:scale-90">
              Show All
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingApps;
