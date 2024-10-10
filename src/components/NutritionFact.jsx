/* eslint-disable react/prop-types */

const NutritionFact = ({nutrition}) => {
  return (
    <div className='px-6 py-8 w-96 bg-[#F9F9F9] rounded-lg'>
        <h1 className="font-playfair font-bold text-3xl mb-4">Nutrition Facts</h1>
        {
            nutrition.map((item, index) => {
                const [key, value] = Object.entries(item)[0];
                return (
                    <li key={index} className="flex justify-between py-2 border-b last:border-b-0">
                        <span className="font-inter font-light text-base">{key}</span>
                        <span className="font-inter font-normal text-base">{value}</span>
                    </li>
                );
            })
        }
    </div>
  )
}

export default NutritionFact