import { Link } from "react-router-dom"
import { FaFacebookF,FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#f9f9f9] px-12">
        <div className=" py-10 flex items-center justify-around">
        <div className="w-2/5">
            <Link to={'/'}><img src="/images/logo-black.png" alt="Logo" className="w-52 h-16" /></Link>
            <p className="font-inter font-normal text-xl">
                On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment
            </p>
        </div>
        <div className="flex items-center justify-center gap-32 w-3/5 font-inter text-sm font-normal">
            <div className="flex flex-col gap-y-2.5">
                <h4 className="font-semibold">FlavourFusion</h4>
                <Link className="hover:text-orange-500">Home</Link>
                <Link className="hover:text-orange-500">About</Link>
                <Link className="hover:text-orange-500">Contact Us</Link>
                <Link className="hover:text-orange-500">Feedback</Link>
            </div>
            <div className="flex flex-col gap-y-2.5">
                <h4 className="font-semibold">Legal</h4>
                <Link className="hover:text-orange-500">Terms</Link>
                <Link className="hover:text-orange-500">Conditions</Link>
                <Link className="hover:text-orange-500">Cookies</Link>
                <Link className="hover:text-orange-500">Copyright</Link>
            </div>
            <div className="flex flex-col gap-y-2.5">
                <h4 className="font-semibold">Follow</h4>
                <Link className="hover:text-orange-500">Facebook</Link>
                <Link className="hover:text-orange-500">Twitter</Link>
                <Link className="hover:text-orange-500">Instagram</Link>
                <Link className="hover:text-orange-500">Youtube</Link>
            </div>
        </div>
    </div>
        <div className="flex items-center justify-between border-t-2 py-6 font-inter">
            <div>
                &copy; FlavourFusion - All right reserved
            </div>
            <div className="flex items-center justify-between w-40 cursor-pointer">
                <FaFacebookF className="size-5 hover:text-orange-500" />
                <FaInstagram className="size-5 hover:text-orange-500" />
                <FaLinkedinIn className="size-5 hover:text-orange-500" />
                <FaYoutube className="size-5 hover:text-orange-500" />
            </div>
        </div>
    </div>
  )
}

export default Footer