import React, { useEffect, useState } from "react";
import { lifeApi } from "../../providers/api";
import { Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Foods from "./foods/Foods";
import Goals from "./goals/Goals";
import Meals from "./meals/Meals";
import PWCLogos from "../../../assets/PWC Logos.svg";
export const NutritionContext = React.createContext("Nutrition");

const Nutrition = () => {
    const [meals, setMeals] = useState([]);
    const [allFoods, setAllFoods] = useState([]);

    async function loadNutritionData(){
        await lifeApi.getMeals().then(m => setMeals(m.data));
        await lifeApi.getAllFoods().then(f => setAllFoods(f.data));
    };

    useEffect(() => {
        loadNutritionData();
    },[]);

    const macros = [
        { goal_macro_id: 1, macro_id: "Protein", target_amount: 200, remaining_amount: 50 },
        { goal_macro_id: 2, macro_id: "Fat", target_amount: 200, remaining_amount: 50 },
        { goal_macro_id: 3, macro_id: "Carbohydrates", target_amount: 200, remaining_amount: 50 }
    ];
    const foods = [{
        food_name: "Mixed Nuts",
        brand_name: "Kirkland",
        serving_size: "0.5 cup",
        protein: 6,
        carbs: 2,
        fat: 20,
        calories: 100,
    },
    {
        food_name: "Salmon",
        brand_name: "Kirkland",
        serving_size: "8 oz",
        protein: 37,
        carbs: 2,
        fat: 20,
        calories: 220
    },
    {
        food_name: "Machine Whey",
        brand_name: "MTS",
        serving_size: "1 scoop",
        protein: 52,
        carbs: 2,
        fat: 20,
        calories: 150
    },
    ];
    const titles = [
        { title_name: "Meals", img_url: "https://prowebbcore-client.s3.amazonaws.com/Meals", path: "meals" },
        { title_name: "Goals", img_url: "https://prowebbcore-client.s3.amazonaws.com/Goals", path: "goals" },
        { title_name: "Foods", img_url: "https://prowebbcore-client.s3.amazonaws.com/Foods", path: "foods" },
    ];
    return (
        <NutritionContext.Provider value={[
            allFoods,
            lifeApi.addFoodToMeal,
            lifeApi.deleteFoodFromMeal,
            meals,
            setMeals,
            setAllFoods
        ]}>
            <div className="h-screen">
                <div className="flex flex-row flex-nowrap justify-between bg-panel border-b-4 border-accent py-10 pr-2">
                    <div className="flex-1 text-white text-center py-2 px-2 flex flex-col justify-center rounded-r-lg bg-background mr-3">
                        <h1 className="text-5xl lg:text-6xl">2600</h1>
                        <h1 className="text-lg lg:text-3xl">Calories</h1>
                    </div>
                    <div className="flex flex-row flex-wrap flex-1 justify-between">
                        {macros.map(({ target_amount, remaining_amount, macro_id }) => <div className="macro-item flex flex-1 flex-row items-start justify-between" key={macro_id}>
                            <div className="flex flex-col justify-between">
                                <div className="text-white text-md lg:text-3xl">{macro_id}</div>
                                <p className="text-xs text-white font-thin">Remaining</p>
                            </div>
                            <div className="flex flex-col justify-between items-end">
                                <div className="text-white text-sm lg:text-3xl">{target_amount}</div>
                                <div className="text-white text-xs lg:text-2xl">{remaining_amount}</div>
                            </div>
                        </div>)}
                    </div>
                </div>
                <div>
                    <Switch>
                        <Route exact path="/Nutrition">
                            {titles.map(title =>
                                <NavLink to={`/Nutrition/${title.path}`} key={title.title_name}><div style={{ height: '200px' }} className="cursor-pointer relative shadow-2xl flex-grow flex flex-row text-white rounded-lg md:m-6 m-3 bg-panel">
                                    <React.Fragment>
                                        <div className="backdrop-filter backdrop-blur-sm flex flex-col justify-center text-center w-32 bg-paneltp absolute h-full rounded-l-lg p-4">
                                            <img src={PWCLogos} />
                                            <h1 className="mt-2">{title.title_name}</h1>
                                        </div>
                                        <img
                                            className="rounded-lg border-l border-panel object-cover h-full w-full border-accent"
                                            src={`${process.env.BUCKET_URL}/${title.title_name}`}
                                        />
                                        {/* <span className="bg-opacity-50 bg-panel p-1 rounded absolute inline-block bottom-0 ml-40 mb-2 text-black">{item}</span> */}
                                    </React.Fragment>
                                </div>
                                </NavLink>)}
                        </Route>
                        <Route exact path="/nutrition/foods">
                            <Foods foods={foods} />
                        </Route>
                        <Route exact path="/nutrition/meals">
                            <Meals foods={foods} />
                        </Route>
                        <Route exact path="/nutrition/goals">
                            <Goals />
                        </Route>
                    </Switch>
                </div>
            </div>
        </NutritionContext.Provider>
    )
};

export default Nutrition;