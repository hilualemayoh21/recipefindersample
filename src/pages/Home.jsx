import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import RecipeCard from "../components/RecipeCard";
const APP_ID = "d3799fc5";
const APP_KEY = "e6a322b62471026d90d868653811d6b5";

function Home() {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipe = async (searchQuery) => {
    setLoading(true);
    setRecipe([]);
    try {
      const response = await fetch(
        "https://api.edema.com/api/recipes/v2?type=public&q=chicken&app_id=d3799fc5&app_key=e6a322b62471026d90d868653811d6b5"
      );
      const recipeData = await response.json();
      setLoading(false);
      setRecipe(recipeData);
      console.log(recipe);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchRecipe("chicken");
  }, []);
  return (
    <div className="bg-[#faf9fb] min-h-screen px-6  mb-16 ">
      <div className="md:max-screen-lg mx-auto px-4 py-6 ">
        <form>
          <label className="flex input shadow-md items-center gap-2">
            <FaSearch className="text-gray-500 md:mr-2 tracking-tight" />
            <input
              type="text"
              className="text-sm md:text-md grow "
              placeholder="What do you want to cook today? "
            />
          </label>
        </form>
        <p className="text-xl md:text-3xl font-bold mt-4">
          Recommended Recipes
        </p>
        <p className="text-slate-500 font-semibold ml-1 text-sm tracking-tight my-2">
          Popular choices
        </p>
        {/* recipe lists  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
