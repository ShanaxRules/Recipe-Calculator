import { useState } from 'react'
import './App.css'
import Calculator from './Calculator'
import Card from './Card'
import Header from './Header'
import Nav from './nav'
import OurRecipes from './OurRecipes'
import { useEffect } from 'react'

function App() {

  const [recipes , setRecipes] = useState([]);
  useEffect( ()=>{
    fetch('Recipe.json').then(res=>res.json()).then(data=>setRecipes(data));
  }, []);


  const [RecipeCalculate , setRecipeCalculate] = useState([]);

  function handleClick(recipe){
    const newVal = [...RecipeCalculate , recipe];
    setRecipeCalculate(newVal);

  }

  const [removeRecipe , setRemoveRecipe] = useState([]);

  function handleRemove(recipe){
    const newArray = [...removeRecipe , recipe];
    setRemoveRecipe(newArray);
  }

  const newRecipeCalculate = RecipeCalculate.filter(el=>!removeRecipe.includes(el));

 


  


  return (
    <>
      <section className='mb-12'>
        <Nav></Nav>
      </section>

      <section className='mb-20'>
        <Header></Header>
      </section>

      <section className='mb-16'>
        <OurRecipes></OurRecipes>
      </section>

      <section className='flex justify-between items-start gap-x-2 gap-y-8 lg:flex-row md:flex-col flex-col'>
        {/* Recipe holder */}
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 lg:flex-1'>
          {
            recipes.map(recipe=><Card key={recipe.id} recipe={recipe} handleClick={handleClick}></Card>)
          }
        </div>
        {/* Calculator */}



        <div className='lg:flex-1'>
          <Calculator recipe={newRecipeCalculate}  handleRemove={handleRemove}></Calculator>



        </div>



      </section>

      

    </>
  )
}

export default App
