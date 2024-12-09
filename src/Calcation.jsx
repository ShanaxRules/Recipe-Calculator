
const Calcation = ({ recipe }) => {
    const { recipe_id, recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = recipe;

    return (
        <tr className="mb-5">
            <td className="text-gray-500 py-4 px-1">{recipe_name}</td>
            <td className="text-gray-500 py-4 px-1">{preparing_time} minutes</td>
            <td className="text-gray-500 py-4 px-1">{calories} calories</td>


        </tr>
    );
};

export default Calcation;