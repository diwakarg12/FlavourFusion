import { IoSearchOutline } from "react-icons/io5";
import { MdLogin } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
    const mode = 'light';
  return (
    <div className="flex items-center justify-between p-4 border-2">
        <div className="cursor-pointer">
            <Link to={'/'}><img src="/images/logo-black.png" alt="Logo" className="w-48 h-11" /></Link>
        </div>
        <div>
            <ul className="flex items-center justify-between cursor-pointer">
                <Link to={'/'}><li className="relative mx-6 font-semibold text-lg hover:text-orange-500">Home</li></Link>
                <Link to={'/recipe'}><li className="relative mx-6 font-semibold text-lg hover:text-orange-500">Recipe</li></Link>
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