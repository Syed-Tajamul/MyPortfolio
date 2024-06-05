import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Questions({ questionElement, curOpen, setCurOpen }) {
  const { id, question, answer, link, tag, logo: Logo } = questionElement;
  const isOpen = curOpen === id;
  function handleToggle() {
    setCurOpen(curOpen === id ? null : id);
  }
  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.8, // Adjusted delay to ensure h1 appears after img
        x: { type: "spring", stiffness: 60 },
        // opacity: { duration: 1 },
        ease: "easeIn",
        duration: 1,
      }}
      onClick={handleToggle}
      className="max-md:items-center max-md:w-full  dark:hover:bg-stone-900 hover:bg-textcolor/30 w-3/4 mt-10 hover:ml-4 hover:transition-all hover:duration-300 transition-all duration-300  cursor-pointer flex flex-col   gap-4  px-4 py-4   dark:border-stone-800 rounded-lg shadow-lg shadow-textcolor/40 dark:shadow-stone-400"
    >
      <div
        className={`${
          isOpen && "text-textcolor dark:text-lime-400"
        } max-md:text-[16px] w-full text-darkgreen dark:text-white text-lg font-medium  flex justify-between items-center`}
      >
        <span className="inline-block text-textcolor dark:text-lime-400">
          <Logo className="w-5 h-5" />
        </span>{" "}
        <h1
          className={`font-poppins ${
            isOpen ? "text-textcolor dark:text-lime-400" : ""
          } text-center `}
        >
          {question}
        </h1>
        <span className="text-textcolor dark:text-lime-400">
          {isOpen ? (
            <RiArrowDropUpLine className="w-5 h-5" />
          ) : (
            <RiArrowDropDownLine className="w-5 h-5" />
          )}
        </span>
      </div>
      {isOpen && (
        <>
          {" "}
          <p className="leading-7 font-poppins max-md:text-center dark:text-stone-400 text-darkgreen text-[14px] tracking-wide font-medium">
            {answer}
          </p>
          {link && (
            <Link
              to={link}
              className="text-center font-poppins text-sm dark:text-lime-400 text-textcolor underline font-medium"
            >
              Explore my {tag}
            </Link>
          )}
        </>
      )}
    </motion.div>
  );
}
