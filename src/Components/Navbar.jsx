import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  //add these classes after finishing fixed z-30 w-full
  function handleClick() {
    setIsClicked(false);
  }
  return (
    <nav
      className={`${
        isClicked &&
        "shadow-2xl shadow-lime-400 max-md:items-start bg-black max-md:transition-all max-md:duration-500 "
      } fixed w-full z-50 py-4   border-[1px] border-stone-700 transition-all duration-500 px-10 flex justify-between items-start bg-black/90  text-white cursor-pointer `}
    >
      <div onClick={handleClick}>
        <Link
          className="font-montserrat font-semibold text-2xl text-white "
          to="/"
        >
          STK
        </Link>
      </div>

      <ul
        onClick={handleClick}
        className={`font-poppins max-md:h-[1px] max-md:flex-col max-md:gap-6 relative  max-md:bottom-[300px] transition-all duration-500 flex gap-10 justify-center items-center ${
          isClicked &&
          "max-md:py-[8rem] max-md:bottom-[0px]   transition-all duration-500 max-md:justify-center max-md:items-center "
        }`}
      >
        <Link to="/" className=" li-hover">
          Home
        </Link>
        {/* <Link to="/whoAmI" className="li-hover">
          About
        </Link> */}
        <Link to="/whatIDo" className="li-hover">
          Expertise
        </Link>
        <Link to="/whatIDid" className="li-hover">
          Work
        </Link>

        <li>
          <a
            href="mailto:syedtawseef0@gmail.com"
            className="font-poppins tracking-wide transition-all duration-300  px-6 py-2  rounded-xl   hover:transition-all hover:duration-300 focus:outline-none focus:ring-2 focus:ring-lime-400 text-sm font-medium hover:bg-white hover:text-stone-900     border-2 border-lime-400 my-4"
          >
            Lets Connect
          </a>
        </li>
      </ul>
      <HamburgerMenu isClicked={isClicked} setIsClicked={setIsClicked} />
    </nav>
  );
}
