// card will take an object in so parameter will get the object
const Card = ({recipe , handleClick}) => {
    const {recipe_id , recipe_name , recipe_image , short_description , ingredients , preparing_time , calories} = recipe;
    return (
        <div>
            <div className="bg-base-100 w-full shadow-xl border-[1px] border-gray-400 p-5 rounded-2xl">
                <div>
                    <img
                        src={recipe_image}
                        alt="Shoes"
                        className="rounded-xl w-full h-[300px]" />
                </div>
                <div className="mt-6">
                    <h2 className="card-title mb-4">{recipe_name}</h2>
                    <p className="mb-4">{short_description}</p>
                    <hr></hr>
                    <ul className="text-2xl text-black mt-6 mb-6 font-semibold">Ingredients: {ingredients.length}
                        <div className="mt-6 list-disc ml-6">
                            {
                                ingredients.map(ingredient=><li key={recipe_id} className="text-gray-500 text-lg">{ingredient}</li>)
                            }
                            
                        </div>

                    </ul>
                    <hr></hr>
                    <div className="mt-6 flex items-center gap-x-2">
                        <div className="flex items-center gap-x-2">
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clipPath="url(#clip0_22_7)">
                                    <path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12Z" stroke="#282828" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 12H15.5" stroke="#282828" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 7V12" stroke="#282828" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_22_7">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg></div>
                            <div><h1 className="text-gray-800 text-lg">{preparing_time} mins</h1></div>


                        </div>
                        <div className="flex items-center gap-x-2">
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clipPath="url(#clip0_34_2)">
                                    <path d="M12 12C14 9.04 12 5 11 4C11 7.038 9.227 8.741 8 10C6.774 11.26 6 13.24 6 15C6 16.5913 6.63214 18.1174 7.75736 19.2426C8.88258 20.3679 10.4087 21 12 21C13.5913 21 15.1174 20.3679 16.2426 19.2426C17.3679 18.1174 18 16.5913 18 15C18 13.468 16.944 11.06 16 10C14.214 13 13.209 13 12 12Z" stroke="#282828" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_34_2">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg></div>
                            <div><h1 className="text-gray-800 text-lg">{calories} calories</h1></div>



                        </div>
                    </div>
                    <div className="mt-6">
                    <button className="btn bg-[#0BE58A] px-4 py-2 rounded-3xl text-black" onClick={()=>handleClick(recipe)}>Want to cook</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;