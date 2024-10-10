/* eslint-disable react/prop-types */

const SuperDeliciousCard = ({img ,text}) => {
  return (
    <div className="hover:text-orange-500">
        <div className="overflow-hidden rounded-lg">
            <img src={img} alt={text} className="object-cover transition-transform duration-500 ease-in-out transform hover:scale-110" />
        </div>
        <div className="flex items-center my-4">
            <img src="images/star-fill.svg" alt="" className="mx-1" />
            <img src="images/star-fill.svg" alt="" className="mx-1" />
            <img src="images/star-fill.svg" alt="" className="mx-1" />
            <img src="images/star-fill.svg" alt="" className="mx-1" />
            <img src="images/star-fill.svg" alt="" className="mx-1" />
        </div>
        <p className="font-inter font-semibold text-xl">{text}</p>
    </div>
  )
}

export default SuperDeliciousCard