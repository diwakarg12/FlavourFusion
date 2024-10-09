/* eslint-disable react/prop-types */

const PopularCategoriesCard = ({img, text}) => {
  return (
    <div className="">
        <div className="border-2 rounded-full overflow-hidden">
            <img src={img} alt={text} className="object-cover transition-transform duration-500 ease-in-out transform hover:scale-110" />
        </div>
        <p className="text-center font-inter font-medium text-lg my-4">{text}</p>
    </div>
  )
}

export default PopularCategoriesCard