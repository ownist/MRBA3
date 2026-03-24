import { GiRoundStar } from "react-icons/gi";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router";

const TrendingAppsCard = ({ app }) => {
  return (
    <Link to={`/apps/${app.id}`} className="block h-full transition-transform hover:-translate-y-1">
      <div className="bg-white rounded-sm h-full">
      <div className="p-4 space-y-4">
        {/* image */}
        <div className="w-full h-full sm:h-80 border border-gray-200 rounded-lg">
          <img
            className="max-w-full w-full h-full rounded-lg"
            src={app.image}
            alt={app.title}
          />
        </div>

        {/* content */}
        <div className="space-y-4">
          <h1 className="text-main text-xl font-medium">{app.title}</h1>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-x-2 px-2.5 py-1.5 bg-lime-50 rounded-sm text-emerald-500 text-base font-medium">
              <MdOutlineFileDownload />
              <span>
                {new Intl.NumberFormat("en-US", {
                  notation: "compact",
                }).format(app.downloads)}
              </span>
            </div>

            <div className="flex items-center gap-x-2 px-2.5 py-1.5 bg-orange-100 rounded-sm text-orange-500 text-base font-medium">
              <GiRoundStar />
              <span>{app.ratingAvg}</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </Link>
  );
};

export default TrendingAppsCard;
