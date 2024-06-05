import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="  bg-gradient-to-t from-white to-textcolor/50 relative px-10 py-4 h-full dark:bg-gradient-to-br dark:from-stone-900 dark:to-black ">
      <div className="font-NotoSans max-md:flex-col max-md:gap-4 flex justify-between dark:text-white text-darkgreen ">
        <Link
          className="font-NotoSans max-md:hidden flex justify-center items-center font-semibold text-2xl text-darkgreen dark:text-white"
          to="/"
        >
          STK
        </Link>
        <div className="max-md:tracking-normal tracking-wider font-medium  leading-[18px] flex flex-col gap-2 justify-center flex-1 items-center text-sm text-darkgreen dark:text-stone-400">
          <p className="text-[15px]">
            <span className="font-roboto text-darkgreen dark:text-white font-medium">
              &copy; {new Date().getFullYear()} ,Syed Tajamul
            </span>
            . All rights reserved.
          </p>
          <p className="max-md:hidden">
            Website designed by{" "}
            <span className="text-darkgreen dark:text-white font-medium">
              Syed Tajamul Khursheed
            </span>
          </p>
        </div>
        <div className=" flex gap-3 justify-center items-center">
          <Link to="https://www.linkedin.com/in/syed-tajamul-5447011b4/">
            <CiLinkedin className="text-blue-600 w-6 h-6" />
          </Link>
          <Link to="https://github.com/Syed-Tajamul">
            <FaGithub className="text-gray-400 w-6 h-6" />
          </Link>
          <Link to="https://wa.link/7eaifk">
            <FaWhatsapp className="text-green-400 w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
