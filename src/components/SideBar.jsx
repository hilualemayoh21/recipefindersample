import React from "react";
import { Link } from "react-router-dom";
// import recipe2logo from "/recipe2logo";
// import recipelogo from "/recipelogo";
import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
function SideBar() {
  return (
    <div className="w-1/4">
      <DesktopSideBar />
      <MobileSideBar />
    </div>
  );
}
const DesktopSideBar = () => {
  return (
    <div className="hidden sm:block md:w-64 w-24 min-h-screen bg-gray-50 text-black">
      <div className="flex flex-col top-0 sticky">
        <div className="flex">
          <img
            src="/recipeimage.png"
            alt=""
            className="hidden md:block w-[150px]"
          />
          <img
            src="recipe2logo.avif"
            alt=""
            className="hidden md:block w-[105px] h-29 bg-gray-50"
          />
        </div>
        <ul className="mt-4 flex flex-col gap-9 px-8 py-10">
          <li>
            <Link to="/" className="md:flex gap-2 hidden items-center">
              <AiOutlineHome className="hover:text-amber-400" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="gap-2 hidden md:flex items-center">
              <AiOutlineHeart className="hover:text-amber-400" />
              <span>Favorite</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
const MobileSideBar = () => {
  return (
    <>
      <div className="border-gray-50 border-t w-full sm:hidden fixed bottom-0 left-0 ">
        <div className="flex gap-4 justify-center">
          <Link to="/" className="">
            <AiOutlineHome className="hover:text-amber-400 focus:scale-110" />
          </Link>
          <Link to="/favorites">
            <AiOutlineHeart className="hover:text-amber-400 focus:scale-105" />
          </Link>
        </div>
      </div>
    </>
  );
};
export default SideBar;
