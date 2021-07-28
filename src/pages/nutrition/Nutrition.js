import React from "react";
import { useFetch } from "../../hooks/useFetch.js";
import { lifeApi } from "../../providers/api";
import PWCLogos from "../../../assets/PWC Logos.svg";

const Nutrition = () => {
    //const { data } = useFetch(async () => await lifeApi.getMeals());

    const macros = [
        { goal_macro_id: 1, macro_id: "Protein", target_amount: 200, remaining_amount: 50 },
        { goal_macro_id: 2, macro_id: "Fat", target_amount: 200, remaining_amount: 50 },
        { goal_macro_id: 3, macro_id: "Carbohydrates", target_amount: 200, remaining_amount: 50 }
    ];
    const titles = ['Meals', 'Foods', 'Goals'];
    return (
        <div className="h-screen">
            <div className="flex flex-row flex-nowrap justify-between bg-panel border-b-4 border-accent py-10 pr-5">
                <div className="flex-1 text-white text-center py-6 px-12 flex flex-col rounded-r-lg bg-background mr-3">
                    <h1 class="text-5xl">2600</h1>
                    <h1>Calories</h1>
                </div>
                <div class="flex flex-row flex-wrap flex-1 justify-between">
                    {macros.map(({ target_amount, remaining_amount, macro_id }) => <div className="macro-item flex flex-1 flex-row items-start justify-between pr-3">
                        <div class="flex flex-col justify-between">
                            <div class="text-white text-md">{macro_id}</div>
                            <p class="text-xs text-white font-thin">Remaining</p>
                        </div>
                        <div class="flex flex-col justify-between items-end">
                            <div class="text-white text-sm">{target_amount}</div>
                            <div class="text-white text-xs">{remaining_amount}</div>
                        </div>
                    </div>)}
                </div>
            </div>
            {/* <div>{data && data.length > 0 && data.map(meal => <div key={meal.id} className="text-white">{meal.name}</div>)}</div> */}
        </div>
    )
};

export default Nutrition;