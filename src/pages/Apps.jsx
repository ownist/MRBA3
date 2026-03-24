import { lazy, Suspense, useState, useEffect } from "react";
import { LuSearch } from "react-icons/lu";
import { useLoaderData } from "react-router";
import TrendingAppsCardSkeleton from "../components/TrendingAppsCardSkeleton";
import NoAppsFound from "../components/NoAppsFound";

const TrendingAppsCard = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("../components/TrendingAppsCard"));
      }, 1500);
    }),
);

const Apps = () => {
  const appData = useLoaderData() || [];
  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [filteredApps, setFilteredApps] = useState(appData);

  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredApps(appData);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const delayDebounceFn = setTimeout(() => {
      const lowercasedSearch = searchText.toLowerCase();
      const filtered = appData.filter((app) =>
        app.title.toLowerCase().includes(lowercasedSearch),
      );
      setFilteredApps(filtered);
      setIsSearching(false);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText, appData]);

  return (
    <section className="max-w-360 mx-auto px-4 mt-8 sm:mt-20">
      <div className="text-center space-y-4">
        <h1 className="text-main text-5xl font-bold">Our All Applications</h1>
        <p className="text-slate-500 text-xl font-normal">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="mt-10 mb-4 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
        <h4 className="text-main text-2xl font-semibold">
          ({filteredApps.length}) Apps Found
        </h4>

        <div className="w-full sm:w-96 relative">
          <input
            className="w-full px-4 pl-11 py-[12.5px] rounded-sm border border-neutral-300 text-slate-500 text-base font-normal focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-shadow shadow-sm"
            type="search"
            name="search"
            id="search"
            placeholder="Search Apps"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <LuSearch className="text-xl text-slate-500 absolute top-1/2 left-4 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      <div className="">
        {isSearching ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, idx) => (
              <TrendingAppsCardSkeleton key={idx} />
            ))}
          </div>
        ) : filteredApps.length === 0 ? (
          <NoAppsFound query={searchText} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredApps.map((app) => (
              <Suspense key={app.id} fallback={<TrendingAppsCardSkeleton />}>
                <TrendingAppsCard app={app} />
              </Suspense>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Apps;
