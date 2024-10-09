import { IoSearchOutline } from "react-icons/io5";
import { MdLogin } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
    const mode = 'light';
  return (
    <div className="flex items-center justify-between p-4 border-2">
        <div className="cursor-pointer">
            <Link to={'/'}><img src="images/logo-black.png" alt="Logo" className="w-48 h-11" /></Link>
        </div>
        <div>
            <ul className="flex items-center justify-between cursor-pointer">
                <li className="relative mx-6 font-semibold text-lg group">
                    <Link to={'/'}><span className="flex items-center hover:text-orange-500">Home </span></Link>
                </li>
                <li className="relative mx-6 font-semibold text-lg group"><Link to={'/recipe'}><span className="hover:text-orange-500 flex items-center ">Recipe <MdKeyboardArrowDown className="size-6 ml-1" /></span></Link>
                    <ul className="absolute z-10 left-0 top-full mt-0.5 w-40 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 font-normal">
                        <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Option 1</li>
                        <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Option 2</li>
                        <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Option 3</li>
                    </ul>
                </li>
                <li className="relative mx-6 font-semibold text-lg group"><Link to={'pages'}><span className="hover:text-orange-500 flex items-center ">Pages <MdKeyboardArrowDown className="size-6 ml-1" /></span></Link>
                    <ul className="absolute z-10 left-0 top-full mt-0.5 w-40 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 font-normal">
                        <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Option 1</li>
                        <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Option 2</li>
                        <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">Option 3</li>
                    </ul>
                </li>
                <Link to={'/about'}><li className="mx-6 font-semibold text-lg hover:text-orange-500">About</li></Link>
                <Link to={'/contact'}><li className="mx-6 font-semibold text-lg hover:text-orange-500">Contact</li></Link>
            </ul>
        </div>
        <div className="flex items-center justify-between cursor-pointer">
            <IoSearchOutline className="font-bold text-2xl mx-6" />
            <MdLogin className="font-bold text-2xl mx-6" />
            {
                mode==='light' ? <MdLightMode className="font-bold text-2xl mx-6" /> : <MdDarkMode className="font-bold text-2xl mx-6" />
            }
        </div>
    </div>
  )
}

export default Header