import React from "react";
import { FaHeart, FaHeartbeat } from "react-icons/fa";
import { MdOutlineSoupKitchen } from "react-icons/md";
function RecipeCard() {
  return (
    <div className="flex flex-col bg-[#ecf7d4] w-full pb-4 rounded-lg">
      <a href="" className="relative  h-32   ">
        <img
          src="/foodimage15.jpg"
          className="rounded-md w-full h-full object-cover"
        />
        <div className="flex gap-1 bg-white rounded-full w-[100px] items-center p-1 absolute bottom-1 left-2">
          <MdOutlineSoupKitchen size={16} />
          <span>4servings </span>
        </div>
        <div className="bg-white rounded-full p-1 absolute top-1 hover:text-red-500 right-2 flex items-center justify-center w-8 h-8 ">
          <FaHeart />
        </div>
      </a>

      <h2 className="font-bold tracking-wider text-xl">Roasted Chicken</h2>

      <p className="mt-3 tracking-tighter font-semibold">Turkish Kitchen</p>
      <div className="flex gap-3">
        <div className="flex items-center gap-1 bg-lime-400 rounded-full p-1">
          <FaHeartbeat size={16} />
          <span>Gluten-free</span>
        </div>
        <div className="flex items-center gap-1 bg-lime-400 rounded-full p-1">
          <FaHeartbeat size={16} />
          <span>Heart-healthy</span>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
