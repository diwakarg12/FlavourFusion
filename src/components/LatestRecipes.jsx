import LatestRecipeCard from "./LatestRecipeCard"

const LatestRecipes = () => {
  return (
    <div className="m-10">
        <h1 className="font-playfair font-bold text-4xl my-4  ">Latest Recipes</h1>
        <div className="flex items-center justify-between">
          <LatestRecipeCard img={'images/latestRecipi1.jpg'} text={'Caramel Strawberry Milkshake'} />
          <LatestRecipeCard img={'images/latestRecipi2.jpg'} text={'Cashew Vegan Rice'} />
          <LatestRecipeCard img={'images/latestRecipi3.jpg'} text={'Smoked Salmon Salad Sandwich'} />
          <LatestRecipeCard img={'images/latestRecipi4.jpg'} text={'Salmon in Creamy Sun Dried Tomato Sauce'} />
        </div>
    </div>
  )
}

export default LatestRecipes