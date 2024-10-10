/* eslint-disable react/prop-types */

const LatestRecipeCard = ({img, text}) => {
  return (
    <div className="hover:text-orange-500">
        <div className="w-68 rounded-lg overflow-hidden">
          <img
          src={img}
          alt={text}
          className="h-52 w-68 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
        </div>
      <h2 className="font-inter text-xl font-semibold w-64 h-16 mt-2">
        {text}
      </h2>
    </div>
  );
};


export default LatestRecipeCard