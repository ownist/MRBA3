import { RiMenu3Fill } from "react-icons/ri";

const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <button className="text-xl text-zinc-600 font-semibold size-12 bg-gray-100 rounded-full grid place-items-center">
        <RiMenu3Fill />
      </button>
    </div>
  );
};

export default MobileMenu;
