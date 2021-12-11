import React, { useContext } from "react";
import { NutritionContext } from "../Nutrition";
const Foods = () => {
    const [allFoods] = useContext(NutritionContext);
    const foods = test.map(f=>({
    id: f.id,
    brand_name: f.brand,
    calories: 100,
    carbs: f.carbohydrate,
    fat: f.fat,
    food_name: f.name,
    protein: f.protein,
    serving_size: "0.5 cup"
    }))
    return <div className="flex flex-row flex-wrap h-100 py-1">
        {foods.map(food => <div className="m-2 flex-1">
            <div className="py-1 rounded-lg bg-panel">
                <div className="px-2 py-1 text-center flex flex-row justify-start">
                    <span className="font-bold text-white mx-1">{food.brand_name}</span>
                    <span className="font-bold text-white mx-1">{food.food_name}</span>
                    <span className="font-bold text-white mx-2">{food.serving_size}</span>
                </div>
                <hr class="border border-b-2 border-accent"></hr>
                <div className="flex flex-row justify-between p-1">
                    <div className="mx-2 flex flex-col text-center text-white">
                        <span className="font-bold my-1 mx-3">
                            {food.protein}
                        </span>
                        <span className="my-1 mx-3">
                            Protein
               </span>
                    </div>
                    <div className="flex flex-col text-center text-white">
                        <span className="font-bold my-1 mx-3">
                            {food.carbs}
                        </span>
                        <span className="my-1 mx-3">
                            Carbohydrates
               </span>
                    </div>
                    <div className="flex flex-col text-center text-white">
                        <span className="font-bold my-1 mx-3">
                            {food.fat}
                        </span>
                        <span className="my-1 mx-3">
                            Fat
                    </span>
                    </div>
                    <div className="flex flex-col text-center text-white">
                        <span className="font-bold m-1">
                            {food.calories}
                        </span>
                        <span className="my-1 mx-3">
                            Calories
                    </span>
                    </div>
                </div>
            </div>
        </div>)}
    </div>
};

export default Foods;