import React, { Fragment, useState, useContext } from "react";
import { NutritionContext } from "../Nutrition";

const AddMeal = ({closeTrigger, sumFoodCalories}) => {
    const [allFoods] = useContext(NutritionContext);
    const [foods] = useState(allFoods);
    const [meal, setMeal] = useState({name: "", date: Date.now, foods: [] });
    const [name, setName] = useState(meal.name);

    const handleNameChange = e =>  setName(e.target.value);
    const addFoodToMeal = food => setMeal({...meal, foods: [...meal.foods,food]});

    const addMeal = () => console.log({...meal, name: name});;

    return <Fragment>
        <div className="px-2 py-1 text-center flex flex-row">
            <input className="w-full bg-panel font-bold text-white mx-2" 
            value={name} 
            onChange={handleNameChange}
            placeholder="Name" ></input>
        </div>
        <hr className="border border-b-2 border-accent"></hr>
        <div className="pt-1 flex flex-col justify-between">
            <div className="px-1 flex flex-col justify-between">
                {foods.map(food => <div className="px-1 flex flex-row justify-between" key={food.id}>
                    <div className="mx-2">
                        <span className="text-white mr-2">{food.brand}</span>
                        <span className="text-white">{food.name}</span>
                    </div>
                    <div className="mx-2">
                        <span className="font-bold text-white mx-2">{sumFoodCalories(food)}</span>
                        <span onClick={() => addFoodToMeal(food)} className="font-bold text-accent mx-2 cursor-pointer">+</span>
                    </div>
                </div>)}
            </div>
            {closeTrigger()}
            <div onClick={()=>addMeal()}>Save</div>
        </div>
    </Fragment>
};

export default AddMeal;