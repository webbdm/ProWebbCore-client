import React, { useState, useContext } from "react";
import { NutritionContext } from "../Nutrition";
import Modal from "../../../global/modal/Modal";

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    minWidth: "50%",
    transform: 'translate(-50%, -50%)',
    zIndex: 1000
}

const Meals = ({ meals }) => {
    const [isAddingFood, setIsAddingFood] = useState(false);
    const [meal, setMeal] = useState(null);
    const [allFoods, addFoodToMeal] = useContext(NutritionContext);
    if (!meals.length) return null;

    const openModal = meal => {
        console.log(meal);
        setIsAddingFood(true);
        setMeal(meal);    
    };

    const closeModal = () => {
        setIsAddingFood(false);
        setMeal(null);    
    };
    return <div className="flex flex-row flex-wrap h-100 py-1">
        <Modal isOpen={isAddingFood} onClose={() => closeModal()}>
            <div style={MODAL_STYLES} className="filter drop-shadow-2xl rounded-lg bg-panel">
                <div className="px-2 py-1 text-center flex flex-row justify-between">
                    <span className="font-bold text-white mx-2">Add foods {meal? meal.name : ''}</span>
                </div>
                <hr className="border border-b-2 border-accent"></hr>
                <div className="pt-1 flex flex-col justify-between">
                    <div className="px-1 flex flex-col justify-between">
                        {allFoods.map(food => <div className="px-1 flex flex-row justify-between">
                            <div className="mx-2">
                                <span className="text-white mr-2">{food.brand}</span>
                                <span className="text-white">{food.name}</span>
                            </div>
                            <div class="mx-2">
                                <span className="font-bold text-white mx-2">100</span>
                                <span onClick={() => addFoodToMeal({ MealID: meal.id, FoodId: food.id })} className="font-bold text-accent mx-2 cursor-pointer">+</span>
                            </div>
                        </div>)}
                    </div>
                    <div onClick={() => closeModal()} className="text-bg mt-3 rounded-bl-lg rounded-br-lg bg-accent font-bold text-center cursor-pointer">X Close</div>
                </div>
            </div>
        </Modal>
        {meals && meals.map(meal => <div className="m-2 flex-1">
            <div className="rounded-lg bg-panel">
                <div className="px-2 py-1 text-center flex flex-row justify-between">
                    <span className="font-bold text-white mx-1">{meal.name}</span>
                    <span className="font-bold text-white mx-1"><span className="mr-2 text-sm font-thin"> Calories</span>500</span>
                </div>
                <hr className="border border-b-2 border-accent"></hr>
                <div className="pt-1 flex flex-col justify-between">
                    <div className="px-1 flex flex-row justify-between">
                    </div>
                    {meal.foods.map(food => <div className="px-1 flex flex-row justify-between">
                        <span className="text-white mx-2">{food.food_name}</span>
                        <span className="font-bold text-white mx-2">{food.calories}</span>
                    </div>)}
                    <div onClick={() => openModal(meal)} className="mt-3 rounded-bl-lg rounded-br-lg bg-accent font-bold text-center cursor-pointer">+ Add</div>
                </div>
            </div>
        </div>)}
    </div>
};

export default Meals;