import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Darkmode from "./DarkmodeButton";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > scrollY) {
      // Scrolling down
      setVisible(false);
    } else {
      // Scrolling up
      setVisible(true);
    }
    setScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className={`dark:shadow-2xl shadow-lg shadow-gray-200 dark:shadow-lime-400 fixed w-full z-50 py-4 border-[1px] dark:border-stone-700 transition-all duration-500 px-10 flex justify-between items-center bg-white dark:bg-black/90 text-white cursor-pointer ${
        visible ? "top-0" : "-top-20"
      }`}
    >
      <div>
        <NavLink
          className="font-poppins font-semibold text-2xl text-darkgreen dark:text-white"
          to="/"
        >
          STK
        </NavLink>
      </div>

      <ul
        // id="nav-ul"
        className="font-semibold dark:text-white text-textcolor max-lg:hidden font-poppins relative transition-all duration-500 flex gap-10 items-center"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "dark:text-lime-400 text-darkgreen li-hover" : "li-hover"
          }
        >
          Home
        </NavLink>
        {/* <Link to="/whoAmI" className="li-hover">
          About
        </Link> */}
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "dark:text-lime-400 text-darkgreen li-hover" : "li-hover"
          }
        >
          Expertise
        </NavLink>
        <NavLink
          to="/education"
          className={({ isActive }) =>
            isActive ? "dark:text-lime-400 text-darkgreen li-hover" : "li-hover"
          }
        >
          Education
        </NavLink>
        <NavLink
          to="/certifications"
          className={({ isActive }) =>
            isActive ? "dark:text-lime-400 text-darkgreen li-hover" : "li-hover"
          }
        >
          Certifications
        </NavLink>
        <NavLink
          to="/whatIDid"
          className={({ isActive }) =>
            isActive ? "dark:text-lime-400 text-darkgreen li-hover" : "li-hover"
          }
        >
          Work
        </NavLink>

        <li>
          <a
            href="mailto:syedtawseef0@gmail.com"
            className="bg-textcolor dark:bg-black dark:hover:bg-white text-white font-poppins tracking-wide transition-all duration-300 px-6 py-2 rounded-xl hover:transition-all hover:duration-300 focus:outline-none focus:ring-2 focus:ring-lime-400 text-sm font-medium hover:bg-white hover:text-stone-900 border-2 border-textcolor dark:border-lime-400 my-4"
          >
            Lets Connect
          </a>
        </li>
      </ul>
      <div>
        <Darkmode />
      </div>
    </nav>
  );
}
