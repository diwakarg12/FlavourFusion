import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineAutoGraph } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center m-10 bg-[#e4f1ff] rounded-2xl">
        <img src="images/heroImg.jpg" alt="Hero section" className="w-3/5 h-[80%] object-cover rounded-l-2xl" />
        <div className="pl-6 py-12 pr-16">
            <small className="text-base font-inter-normal flex items-center"><MdOutlineAutoGraph className="mx-1" />85% would make this again</small>
            <h1 className="font-bold text-5xl font-playfair-bold">Mighty Super Cheesecake</h1>
            <p className="font-inter-normal text-xl">Look no further for a creamy and ultra smooth classic cheesecake recipe! no one can deny its simple decadence.</p>
            <div className="absolute right-10 bottom-10"><IoIosArrowRoundForward className="w-10 h-10 bg-white text-orange-500 rounded-full"/></div>
        </div>
    </div>
  )
}

export default HeroSection