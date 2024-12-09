
const Calc = ({recipe , preparedHandler , handleRemove}) => {
    const { recipe_id, recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = recipe;

    return (
        <tr className="mb-5">
            <td className="text-gray-500 py-4 px-1">{recipe_name}</td>
            <td className="text-gray-500 py-4 px-1">{preparing_time} minutes</td>
            <td className="text-gray-500 py-4 px-1">{calories} calories</td>
            <td><button onClick={()=>{
                preparedHandler(recipe);
                handleRemove(recipe);
            }
            } className=" bg-[#0BE58A] lg:px-4 md:px-3 px-2 py-1  rounded-3xl text-black font-bold">Preparing</button></td>
        </tr>
    );
};

export default Calc;