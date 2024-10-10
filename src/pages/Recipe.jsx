import { useParams } from "react-router-dom"
import delicious from "../data/delicious";
import handPicked from '../data/handPicked';
import latest from '../data/latest';
import sweet from '../data/sweet';
import { SlCalender } from "react-icons/sl";
import { FiPrinter } from "react-icons/fi";
import Ingredients from "../components/Ingredients";
import NutritionFact from "../components/NutritionFact";
import Instructions from "../components/Instructions";
import LatestRecipeCard from "../components/LatestRecipeCard";

const Recipe = () => {
  let data
  const {id} = useParams();
  data = delicious.find(recipe => recipe.id === parseInt(id));
  if(!data){
    data = handPicked.find(recipe => recipe.id === parseInt(id));
    if(!data){
      data = latest.find(recipe => recipe.id === parseInt(id));
      if(!data){
        data = sweet.find(recipe => recipe.id === parseInt(id));
      }
    }
  }
  return (
    <div className="px-10">
      <h1 className="font-playfair font-bold text-6xl">{data.title}</h1>
      <div className="flex items-center gap-x-6 py-6 border-b-2">
        <div className="flex items-center justify-center gap-x-2">
          <img src="/images/avatar.png" alt="Avatar" className="rounded-full" />
          <p className="font-inter text-sm">Tricia Albert</p>
        </div>
        <div className="flex items-center justify-center gap-x-2">
          <SlCalender />
          <p className="font-inter text-sm">Yesterday</p>
        </div>
        <div className="flex items-center">
            <img src="/images/star-fill.svg" alt="" className="mx-1" />
            <img src="/images/star-fill.svg" alt="" className="mx-1" />
            <img src="/images/star-fill.svg" alt="" className="mx-1" />
            <img src="/images/star-fill.svg" alt="" className="mx-1" />
            <img src="/images/star-fill.svg" alt="" className="mx-1" />
        </div>
      </div>
      <p className="font-inter font-normal text-xl py-4">{data.text}</p>
      <img src={data.img} alt={data.title} className="w-full h-96 object-cover my-6 rounded-xl" />
      <div className="flex items-center gap-x-6 my-12 mx-4">
        <div className="flex flex-col font-inter border-r border-black pr-8">
          <p className="text-xs my-1">PREP TIME</p>
          <p className="text-sm">{data.preptime}</p>
        </div>
        <div className="flex flex-col font-inter border-r border-black pr-8">
          <p className="text-xs my-1">PREP TIME</p>
          <p className="text-sm">{data.preptime}</p>
        </div>
        <div className="flex flex-col font-inter border-r border-black pr-8">
          <p className="text-xs my-1">SERVINGS</p>
          <p className="text-sm">{data.serving}</p>
        </div>
        <div className="flex flex-col font-inter">
          <FiPrinter className="size-5" />
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col gap-y-2 w-1/2">
          <h1 className="font-playfair font-bold text-3xl mb-4">Ingredients</h1>
          <Ingredients ingredients={data.ingredients} />
          <NutritionFact nutrition={data.nutritions} />
        </div>
        <div className="flex flex-col gap-y-2 w-1/2">
          <h1 className="font-playfair font-bold text-3xl">Instructions</h1>
          <Instructions instructions={data.instructions} />
        </div>
      </div>
      <div className="mt-20 mb-12 py-4 border-b-8 border-orange-500">
        <h1 className="font-playfair font-bold text-6xl">Already made this?</h1>
        <button className="py-1.5 my-4 px-12 font-inter font-medium text-base border-2 border-black rounded-md hover:bg-black hover:text-white">
          Share your Feedback
        </button>
      </div>

      <div className="my-12">
        <h1 className="font-playfair font-bold text-4xl my-6">You might also like</h1>
        <div className="flex items-center justify-between">
          <LatestRecipeCard img={'/images/latestRecipi1.jpg'} text={'Caramel Strawberry Milkshake'} />
          <LatestRecipeCard img={'/images/latestRecipi2.jpg'} text={'Cashew Vegan Rice'} />
          <LatestRecipeCard img={'/images/latestRecipi3.jpg'} text={'Smoked Salmon Salad Sandwich'} />
          <LatestRecipeCard img={'/images/latestRecipi4.jpg'} text={'Salmon in Creamy Sun Dried Tomato Sauce'} />
        </div>
      </div>
    </div>
  )
}

export default Recipe