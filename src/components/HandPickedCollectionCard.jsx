/* eslint-disable react/prop-types */

const HandPickedCollectionCard = ({img, text}) => {
  return (
    <div className="border rounded-t-md mb-12 hover:text-orange-500">
        <div className="w-[34rem] h-80 overflow-hidden">
        <img
          src={img}
          alt={text}
          className="h-80 w-[34rem] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
        </div>
        <div className="flex  h-36 w-[34rem] px-10 py-5 relative">
            <h2 className="font-playfair font-semibold text-4xl">{text}</h2>
            <div className="h-36 flex justify-end items-center">
                <p className="h-10 border border-black rounded-md w-36 flex items-center justify-center">156 Recipes</p>
            </div>
        </div>
    </div>
  );
}

export default HandPickedCollectionCard