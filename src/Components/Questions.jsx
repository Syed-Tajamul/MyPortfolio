import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Questions({ questionElement, curOpen, setCurOpen }) {
  const { id, question, answer, link, tag, logo: Logo } = questionElement;
  const isOpen = curOpen === id;
  function handleToggle() {
    setCurOpen(curOpen === id ? null : id);
  }
  return (
    <div
      onClick={handleToggle}
      className="max-md:items-center max-md:w-full  hover:bg-stone-900  w-3/4 mt-10 hover:ml-4 hover:transition-all hover:duration-300 transition-all duration-300  cursor-pointer flex flex-col   gap-4  px-4 py-2  border-[1px] border-stone-800 rounded-lg"
    >
      <div
        className={`${
          isOpen && "text-lime-400"
        } max-md:text-[16px] w-full text-white text-lg font-medium  flex justify-between items-center`}
      >
        <span className="inline-block text-lime-400">
          <Logo />
        </span>{" "}
        <h1
          className={`font-poppins ${
            isOpen ? "text-lime-400" : ""
          } text-center `}
        >
          {question}
        </h1>
        <span className="text-lime-400">
          {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
        </span>
      </div>

      {isOpen && (
        <>
          {" "}
          <p className="leading-7 font-poppins max-md:text-center text-stone-400 text-[14px] tracking-wide font-medium">
            {answer}
          </p>
          {link && (
            <Link
              to={link}
              className="font-poppins text-sm text-lime-400 underline font-medium"
            >
              Explore my {tag}
            </Link>
          )}
        </>
      )}
    </div>
  );
}
