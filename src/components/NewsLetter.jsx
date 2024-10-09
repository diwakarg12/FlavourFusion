import { Link } from "react-router-dom"
const NewsLetter = () => {
  return (
    <div className="bg-[#ffd8ca] h-screen flex flex-col items-center justify-center m-10">
        <div className="w-1/2">
            <h1 className="font-playfair font-bold text-8xl my-6 text-center">Deliciousness to your inbox</h1>
        <h4 className="font-inter-normal text-2xl text-center px-28 pb-4">Enjoy weekly hand picked recipes and recommendations</h4>
        <div className="relative flex items-center justify-center font-inter">
            <input type="email" placeholder="Email Address" className="w-full p-6 rounded-md focus:outline-none" />
            <button className="absolute right-0 py-5 px-9 mr-0.5 bg-orange-500 font-semibold text-xl text-white">Join</button>
        </div>
        <small className="font-inter-normal text-xs my-6 flex items-center justify-center">By joining our newsletter you agree to our <Link to={'/'} className="hover:text-orange-500 px-0.5"> Terms and Conditions</Link></small>
        </div>
    </div>
  )
}

export default NewsLetter