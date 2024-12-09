import { useState } from "react";
import Calc from "./Calc";
import Calcation from "./Calcation";

const Calculator = ({recipe , handleRemove}) => {
    
    const {recipe_id , recipe_name , recipe_image , short_description , ingredients , preparing_time , calories} = recipe;

    const [preparedRecipe , setPreparedRecipe] = useState([]);
    const [timeState , setTimeState] = useState(0);
    const [calorieState , setCalorieState] = useState(0);

    function preparedHandler(reciper){
        let newVal=timeState+parseInt(reciper.preparing_time);
        setTimeState(newVal);
        let newCal=calorieState+parseInt(reciper.calories);
        setCalorieState(newCal);
        const newArr = [...preparedRecipe , reciper];
        setPreparedRecipe(newArr);
    }


    
    
    return (
        <div>
            <div className="lg:p-8 md:p-5 p-5 rounded-2xl border-[1px] border-gray-300 ">
                <h1 className="text-black text-2xl text-center font-bold mb-4">Want to cook: 0{recipe.length}</h1>
                <hr></hr>
                {/* table section */}
                <div className="grid gap-x-6 mb-8">
                    <table className="table-auto">
                        <thead>
                            <tr className="text-left">
                                <th className="text-gray-500 text-lg">Name</th>
                                <th className="text-gray-500 text-lg ">Time</th>
                                <th className="text-gray-500 text-lg ">Calories</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                recipe.map(recipe=><Calc key={recipe.recipe_id} recipe={recipe} preparedHandler={preparedHandler} handleRemove={handleRemove}></Calc>)
                            }
                           

                        </tbody>
                    </table>
                </div>

                <h1 className="text-black text-2xl text-center font-bold mb-4">Currently Cooking: 0{preparedRecipe.length}</h1>
                <hr></hr>
                {/* table section */}
                <div className="grid gap-x-6 mb-8">
                    <table className="table-auto">
                        <thead>
                            <tr className="text-left">
                                <th className="text-gray-500 text-lg">Name</th>
                                <th className="text-gray-500 text-lg ">Time</th>
                                <th className="text-gray-500 text-lg ">Calories</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                preparedRecipe.map(rec=><Calcation key={recipe.recipe_id} recipe={rec}></Calcation>)
                            }
                           

                        </tbody>
                    </table>
                </div>

                
                <div className="flex justify-end items-center gap-x-2">
                    <h1 className="text-gray-800 text-lg font-semibold">Total time: {timeState} mins</h1>
                    <h1 className="text-gray-800 text-lg font-semibold">Total calorie: {calorieState} cal</h1>
                </div>



            </div>

        </div>
    );
};

export default Calculator;