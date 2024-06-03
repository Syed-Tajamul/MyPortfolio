// import { useState } from "react";
// import { CiLight } from "react-icons/ci";
// import { MdDarkMode } from "react-icons/md";

// export default function DarkmodeButton() {
//   const [light, setLight] = useState(false);
//   return (
//     <button
//       onClick={() => {
//         setLight((prev) => !prev);
//       }}
//       className="px-2 py-2 rounded-lg border-[1px] border-lime-400 transition-all duration-300"
//     >
//       {light ? <CiLight /> : <MdDarkMode />}
//     </button>
//   );
// }
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const Darkmode = () => {
  const [selected, setSelected] = useState("dark");
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <div
      className={` grid h-full place-content-center  transition-colors 
       
      `}
    >
      <SliderToggle selected={selected} setSelected={setSelected} />
    </div>
  );
};

const SliderToggle = ({ selected, setSelected }) => {
  return (
    <div className="relative  flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "light" ? "text-white" : "text-white"
        }`}
        onClick={() => {
          setSelected("light");
          document.documentElement.classList.remove("dark");
        }}
      >
        <FiSun className="relative z-10 text-lg md:text-xl" />
        {/* <FiMoon className="relative z-10 text-lg md:text-sm" /> */}
        {/* <span className="relative z-10">Light</span> */}
      </button>
      <button
        className={` ${TOGGLE_CLASSES} ${
          selected === "dark" ? "text-white" : "text-textcolor"
        }`}
        onClick={() => {
          setSelected("dark");
          document.documentElement.classList.add("dark");
        }}
      >
        <FiMoon className="relative z-10 text-lg md:text-xl" />
        {/* <FiSun className="relative z-10 text-lg md:text-sm" /> */}
        {/* <span className="relative z-10">Dark</span> */}
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-xl bg-textcolor dark:bg-gradient-to-r from-black to-lime-400"
        />
      </div>
    </div>
  );
};

export default Darkmode;
