import SuperDeliciousCard from "./SuperDeliciousCard"
import delicious from "../data/delicious"
import { Link } from "react-router-dom"
const SuperDelicious = () => {
  return (
    <div className="m-10 ">
        <h1 className="font-playfair font-bold text-4xl my-4">Super Delicious</h1>
        <div className="flex items-center justify-between">
            {
              delicious.map((recipe)=>(
                <Link key={recipe.id} to={`/recipe/${recipe.id}`}><SuperDeliciousCard  img={recipe.img} text={recipe.title} /></Link>
              ))
            }
        </div>
    </div>
  )
}

export default SuperDelicious