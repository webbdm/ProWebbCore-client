import { array } from "prop-types";
import React from "react";

const Meals = ({ meals }) => {
    if (!meals.length) return null;
    return <div className="flex flex-row flex-wrap h-100 py-1">
        {meals.map(meal => <div className="m-2 flex-1">
            <div className="rounded-lg bg-panel">
                <div className="px-2 py-1 text-center flex flex-row justify-between">
                    <span className="font-bold text-white mx-1">{meal.name}</span>
                    <span className="font-bold text-white mx-1"><span className="mr-2 text-sm font-thin"> Calories</span>500</span>
                </div>
                <hr class="border border-b-2 border-accent"></hr>
                <div className="pt-1 flex flex-col justify-between">
                    <div className="px-1 flex flex-row justify-between">
                        {/* <span className="font-bold text-white mx-2">Name</span>
                        <span className="font-bold text-white mx-2 text-sm font-thin">Calories</span> */}
                    </div>
                    {meal.foods.map(food => <div className="px-1 flex flex-row justify-between">
                        <span className="text-white mx-2">{food.food_name}</span>
                        <span className="font-bold text-white mx-2">{food.calories}</span>
                    </div>)}
                    <div className="mt-3 rounded-bl-lg rounded-br-lg bg-accent font-bold text-center cursor-pointer">+ Add</div>
                </div>
            </div>
        </div>)}
    </div>
};

export default Meals;