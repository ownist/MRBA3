import { useLoaderData } from "react-router";
import { useState, useEffect } from "react";
import { GiRoundStar } from "react-icons/gi";
import { MdOutlineFileDownload, MdOutlineReviews } from "react-icons/md";
import toast from "react-hot-toast";
import { getInstalledApps, saveApp } from "../utils/localStorage";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AppDetails = () => {
  const app = useLoaderData();
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (app) {
      const apps = getInstalledApps();
      setIsInstalled(apps.includes(app.id));
    }
  }, [app]);

  const handleInstall = () => {
    if (saveApp(app.id)) {
      setIsInstalled(true);
      toast.success(`${app.title} installed successfully!`);
    } else {
      toast.error(`${app.title} is already installed.`);
    }
  };

  const chartData = [...(app.ratings || [])].reverse().map((r) => ({
    name: r.name,
    count: r.count,
  }));

  const maxCount =
    chartData.length > 0 ? Math.max(...chartData.map((r) => r.count)) : 0;

  const stepSize = Math.max(1, Math.ceil(maxCount / 4 / 3000) * 3000);

  const ticks = [0, stepSize, stepSize * 2, stepSize * 3, stepSize * 4];

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-8 lg:py-16 px-4">
      <div className="max-w-360 mx-auto bg-white/0">
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-14 items-start mb-12 lg:mb-20">
          <div className="w-full lg:w-[450px] aspect-square bg-white border border-gray-100 flex items-center justify-center p-10 lg:p-20 shadow-sm shrink-0 mb-8 lg:mb-0">
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex-1 w-full pt-4">
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2 tracking-tight">
              {app.title}
            </h1>
            <p className="text-gray-500 text-lg lg:text-xl font-normal">
              Developed by{" "}
              <span className="text-indigo-600 font-medium">
                {app.companyName}
              </span>
            </p>

            <hr className="my-8 border-gray-200 border-t-2" />

            <div className="flex flex-wrap items-center gap-10 lg:gap-20 mb-8">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-gray-500">
                  <MdOutlineFileDownload className="text-emerald-500 text-2xl lg:text-3xl" />
                  <span className="text-sm lg:text-base font-medium">
                    Downloads
                  </span>
                </div>
                <p className="text-3xl lg:text-[40px] font-bold text-slate-800 tracking-tight leading-none mt-1">
                  {new Intl.NumberFormat("en-US", {
                    notation: "compact",
                  }).format(app.downloads)}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-gray-500">
                  <GiRoundStar className="text-orange-400 text-2xl lg:text-3xl" />
                  <span className="text-sm lg:text-base font-medium">
                    Average Ratings
                  </span>
                </div>
                <p className="text-3xl lg:text-[40px] font-bold text-slate-800 tracking-tight leading-none mt-1">
                  {app.ratingAvg}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-gray-500">
                  <MdOutlineReviews className="text-purple-500 text-2xl lg:text-3xl" />
                  <span className="text-sm lg:text-base font-medium">
                    Total Reviews
                  </span>
                </div>
                <p className="text-3xl lg:text-[40px] font-bold text-slate-800 tracking-tight leading-none mt-1">
                  {new Intl.NumberFormat("en-US", { notation: "compact" })
                    .format(app.reviews)
                    .toUpperCase()}
                </p>
              </div>
            </div>

            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className={`transition-colors text-white font-medium py-3.5 px-8 rounded-sm text-lg shadow-sm ${
                isInstalled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#00d084] hover:bg-[#00b875]"
              }`}
            >
              {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
            </button>
          </div>
        </div>

        <hr className="my-10 border-gray-200 border-t-2" />

        <div className="mb-14 lg:mb-20">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Ratings</h2>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                layout="vertical"
                margin={{ top: 0, right: 30, left: -20, bottom: 0 }}
              >
                <XAxis
                  type="number"
                  ticks={ticks}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280", fontSize: 13 }}
                  domain={[0, ticks[ticks.length - 1]]}
                />
                <YAxis
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280", fontSize: 15 }}
                  width={80}
                />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Bar
                  dataKey="count"
                  fill="#ff8a00"
                  barSize={24}
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <hr className="my-10 border-gray-200 border-t-2" />

        <div className="pb-20">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Description
          </h2>
          <div className="space-y-6 text-gray-500 font-normal leading-relaxed text-base lg:text-lg">
            {app.description?.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
