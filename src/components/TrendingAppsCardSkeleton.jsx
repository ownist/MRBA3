const TrendingAppsCardSkeleton = () => {
  return (
    <div className="bg-white rounded-sm animate-pulse">
      <div className="p-4 space-y-4">

        <div className="w-full h-80 sm:h-80 bg-gray-200 rounded-lg"></div>


        <div className="space-y-4">
          <div className="h-7 bg-gray-200 rounded-md w-3/4"></div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="h-9 bg-lime-50 rounded-sm w-24"></div>
            <div className="h-9 bg-orange-100 rounded-sm w-16"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingAppsCardSkeleton;
