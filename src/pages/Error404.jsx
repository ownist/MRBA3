import { useNavigate } from "react-router";
import { errorPage } from "../assets/assets";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center py-20 px-4">
      <div className="flex flex-col items-center text-center max-w-lg mx-auto">
        <img
          src={errorPage}
          alt="404 Error"
          className="w-full max-w-[400px] mb-8"
        />
        <h1 className="text-[32px] md:text-[40px] font-bold text-slate-900 mb-3 font-sans tracking-tight">
          Oops, page not found!
        </h1>
        <p className="text-gray-500 text-lg mb-8">
          The page you are looking for is not available.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-medium py-3 px-8 rounded-md transition-colors"
        >
          Go Back!
        </button>
      </div>
    </div>
  );
};

export default Error404;
