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

const Meals = () => {
    const [isAddingFood, setIsAddingFood] = useState(false);
    const [meal, setMeal] = useState(null);
    const [allFoods, addFoodToMeal, deleteFoodFromMeal, meals, setMeals] = useContext(NutritionContext);

    const openModal = meal => {
        setIsAddingFood(true);
        setMeal(meal);
    };

    const closeModal = () => {
        setIsAddingFood(false);
        setMeal(null);
    };

    const addFood = async (food) => {
        const addedFood = await addFoodToMeal(food);
        setMeals(meals.map(m => m.id === addedFood.data.mealId ? { ...m, foods: [...m.foods, addedFood.data] } : m));
        closeModal();
    };

    const handleFoodDelete = async (mealID, mealFoodID) => {
        await deleteFoodFromMeal(mealFoodID);
        setMeals(meals.map(m => m.id === mealID ? { ...m, foods: m.foods.filter(f => f.id != mealFoodID) } : m));
    };

    const sumFoodCalories = food => [food.carbohydrate * 4, food.protein * 4, food.fat * 9].reduce((a, b) => a + b, 0);

    const sumMealFoodCalories = foods => {
        let carbCal = 0;
        let fatCal = 0;
        let proteinCal = 0;
        foods.map(f => {
            // all per (1) gram
            carbCal += f.carbohydrate * 4;
            proteinCal += f.protein * 4;
            fatCal += f.fat * 9;
        })
        return [carbCal, proteinCal, fatCal].reduce((a, b) => a + b, 0);
    };

    const mappedMeals = meals ? meals.map((m => ({
        id: m.id,
        name: m.name,
        date: m.date,
        calories: sumMealFoodCalories(m.foods),
        foods: m.foods.map((f) => ({
            id: f.id,
            food_name: f.name,
            brand_name: f.brand,
            serving_size: "1 scoop",
            protein: f.protein,
            carbohydrate: f.carbohydrate,
            fat: f.fat,
            calories: 150
        }))
    }))) : [];
    return <div className="flex flex-row flex-wrap h-100 py-1">
        <Modal isOpen={isAddingFood} onClose={() => closeModal()}>
            <div style={MODAL_STYLES} className="filter drop-shadow-2xl rounded-lg bg-panel">
                <div className="px-2 py-1 text-center flex flex-row justify-between">
                    <span className="font-bold text-white mx-2">Add foods {meal ? meal.name : ''}</span>
                </div>
                <hr className="border border-b-2 border-accent"></hr>
                <div className="pt-1 flex flex-col justify-between">
                    <div className="px-1 flex flex-col justify-between">
                        {allFoods.map(food => <div className="px-1 flex flex-row justify-between">
                            <div className="mx-2" key={food.id}>
                                <span className="text-white mr-2">{food.brand}</span>
                                <span className="text-white">{food.name}</span>
                            </div>
                            <div class="mx-2">
                                <span className="font-bold text-white mx-2">{sumFoodCalories(food)}</span>
                                <span onClick={() => addFood({ MealID: meal.id, FoodId: food.id })} className="font-bold text-accent mx-2 cursor-pointer">+</span>
                            </div>
                        </div>)}
                    </div>
                    <div onClick={() => closeModal()} className="text-bg mt-3 rounded-bl-lg rounded-br-lg bg-accent font-bold text-center cursor-pointer">X Close</div>
                </div>
            </div>
        </Modal>
        {mappedMeals.map(meal => <div className="m-2 flex-1">
            <div className="rounded-lg bg-panel" key={meal.id}>
                <div className="px-2 py-1 text-center flex flex-row justify-between">
                    <span className="font-bold text-white mx-1">{meal.name}</span>
                    <span className="font-bold text-white mx-1"><span className="mr-2 text-sm font-thin"> Calories</span>{meal.calories}</span>
                </div>
                <hr className="border border-b-2 border-accent"></hr>
                <div className="pt-1 flex flex-col justify-between">
                    <div className="px-1 flex flex-row justify-between">
                    </div>
                    {meal.foods.map(food => <div className="showable cursor-pointer px-1 flex flex-row justify-between">
                        <div className="flex flex-row" key={food.id}>
                            <span className="font-bold text-white mx-2">{food.brand_name}</span>
                            <span className="text-white mx-2">{food.food_name}</span>
                            <span className="showable-target font-bold text-red-600 mx-2" onClick={() => handleFoodDelete(meal.id, food.id)}>x</span>
                        </div>
                        <span className="font-bold text-white mx-2">{sumFoodCalories(food)}</span>
                    </div>)}
                    <div onClick={() => openModal(meal)} className="mt-3 rounded-bl-lg rounded-br-lg bg-accent font-bold text-center cursor-pointer">+ Add</div>
                </div>
            </div>
        </div>)}
    </div>
};

export default Meals;