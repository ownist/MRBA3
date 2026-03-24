import { MdOutlineSearchOff } from "react-icons/md";

const NoAppsFound = ({ query }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="bg-gray-100 p-6 rounded-full mb-6 relative">
        <MdOutlineSearchOff className="text-gray-400 text-6xl lg:text-7xl" />
        <div className="absolute top-2 right-2 w-4 h-4 bg-orange-400 rounded-full border-2 border-white"></div>
      </div>
      
      <h3 className="text-2xl font-bold text-slate-800 mb-2">
        No Apps Found
      </h3>
      <p className="text-gray-500 text-lg max-w-md mx-auto">
        We couldn&apos;t find anything matching &quot;<span className="font-medium text-slate-700">{query}</span>&quot;. Try adjusting your search term.
      </p>
    </div>
  );
};

export default NoAppsFound;
