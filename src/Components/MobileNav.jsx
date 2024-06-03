import { FaHome } from "react-icons/fa";
import { GoStack } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
// import { IoIosMail } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FaUserGraduate } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
export default function MobileNav() {
  return (
    <div className="lg:hidden bg-white dark:bg-gradient-to-tr  dark:from-stone-900 dark:to-black pt-[82px] cursor-pointer flex justify-center items-center">
      <div className="  fixed z-50 bottom-4  text-white dark:text-lime-400 font-normal font-poppins border-[1px] border-textcolor dark:border-stone-400 text-lg   w-[96%]  flex items-center justify-around dark:bg-black bg-darkgreen bg-opacity-50 dark:bg-opacity-30 py-4 rounded-2xl backdrop-blur-sm">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive && "dark:text-white text-darkgreen "
          }
        >
          <FaHome className="h-8 w-6 transition-all duration-300 hover:scale-125 hover:rotate-3 " />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive && "dark:text-white text-darkgreen "
          }
          to="skills"
        >
          <GoStack className="h-8 w-6 transition-all duration-300 hover:scale-125 hover:rotate-3" />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive && "dark:text-white text-darkgreen "
          }
          to="education"
        >
          <FaUserGraduate className="h-8 w-6 transition-all duration-300 hover:scale-125 hover:rotate-3" />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive && "dark:text-white text-darkgreen "
          }
          to="certifications"
        >
          <FaAward className="h-8 w-6 transition-all duration-300 hover:scale-125 hover:rotate-3" />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive && "dark:text-white text-darkgreen "
          }
          to="whatIDid"
        >
          <GrProjects className="h-8 w-6 transition-all duration-300 hover:scale-125 hover:rotate-3" />
        </NavLink>
      </div>
    </div>
  );
}
