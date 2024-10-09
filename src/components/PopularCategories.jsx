import PopularCategoriesCard from "./PopularCategoriesCard"

const PopularCategories = () => {
  return (
    <div className="m-10">
        <h1 className="font-playfair font-bold text-4xl my-6">Popular Categories</h1>
        <div className="flex items-center justify-between">
            <PopularCategoriesCard img={'images/popularCategory1.png'} text={'Pasta'} />
            <PopularCategoriesCard img={'images/popularCategory2.png'} text={'Pizza'} />
            <PopularCategoriesCard img={'images/popularCategory3.png'} text={'Vegan'} />
            <PopularCategoriesCard img={'images/popularCategory4.png'} text={'Desserts'} />
            <PopularCategoriesCard img={'images/popularCategory5.png'} text={'Smoothies'} />
            <PopularCategoriesCard img={'images/popularCategory6.png'} text={'Breakfast'} />
        </div>
    </div>
  )
}

export default PopularCategories