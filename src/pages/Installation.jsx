import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import { MdOutlineFileDownload } from "react-icons/md";
import { GiRoundStar } from "react-icons/gi";
import toast from "react-hot-toast";
import { getInstalledApps, removeApp } from "../utils/localStorage";

const Installation = () => {
  const allApps = useLoaderData() || [];
  const [installedApps, setInstalledApps] = useState([]);
  const [sortBy, setSortBy] = useState("Sort By Size");

  useEffect(() => {
    const storedIds = getInstalledApps();
    const filtered = allApps.filter((app) => storedIds.includes(app.id));
    setInstalledApps(filtered);
  }, [allApps]);

  const handleUninstall = (app) => {
    removeApp(app.id);
    setInstalledApps((prev) => prev.filter((a) => a.id !== app.id));
    toast.success(`${app.title} uninstalled successfully!`);
  };

  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortBy === "Largest First") {
      return b.size - a.size;
    } else if (sortBy === "Smallest First") {
      return a.size - b.size;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-20 px-4">
      <div className="text-center space-y-4 mb-20">
        <h1 className="text-4xl text-main font-bold">Your Installed Apps</h1>
        <p className="text-slate-500 text-lg">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="max-w-360 mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
          <h3 className="text-xl font-bold text-main">
            {installedApps.length} Apps Found
          </h3>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select select-bordered bg-[#f8f9fa] border-gray-300 text-gray-500 w-full xs:w-auto max-w-xs focus:outline-none rounded-sm font-normal"
          >
            <option disabled value="Sort By Size">
              Sort By Size
            </option>
            <option value="Sort By Size">Sort By Size</option>
            <option value="Largest First">Largest First</option>
            <option value="Smallest First">Smallest First</option>
          </select>
        </div>

        <div className="space-y-4">
          {sortedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded p-4 flex flex-col md:flex-row md:items-center justify-between shadow-[0_2px_4px_rgba(0,0,0,0.02)] gap-4"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded shrink-0">
                  <img
                    src={app.image}
                    className="w-full h-full object-contain rounded"
                    alt={app.title}
                  />
                </div>

                <div className="space-y-2">
                  <h4 className="text-[17px] font-semibold text-main">
                    {app.title}
                  </h4>
                  <div className="flex items-center gap-4 text-sm font-medium">
                    <div className="flex items-center gap-1 text-emerald-500">
                      <MdOutlineFileDownload className="text-lg" />
                      <span>
                        {new Intl.NumberFormat("en-US", {
                          notation: "compact",
                        }).format(app.downloads)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-orange-500">
                      <GiRoundStar className="text-lg" />
                      <span>{app.ratingAvg}</span>
                    </div>
                    <div className="text-gray-400 font-normal">
                      {app.size} MB
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app)}
                className="bg-[#00d084] hover:bg-[#00b875] text-white px-6 py-2 rounded font-semibold transition-colors shrink-0"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
