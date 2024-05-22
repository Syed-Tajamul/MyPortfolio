import toast from "react-hot-toast";
import { Link } from "react-router-dom";
export default function Skill({ skill }) {
  const { title, description, skillLevel, image, link } = skill;
  function handleClick() {
    toast(() => (
      <p>
        Dive deeper into{" "}
        <span className="font-poppins text-lime-400 font-bold">{title}!</span>{" "}
        Click here to explore.
        <br />
        <Link className="text-blue-400 underline pl-20" to={link}>
          Explore {title}
        </Link>
      </p>
    ));
  }
  return (
    <div onClick={handleClick} className=" card-div border-2 border-gray-200">
      <img
        src={image}
        width={60}
        height={60}
        className="max-lg:w-[50px] max-lg:h-[50px] transition-all duration-300  hover:transition-all hover:duration-300]"
      />
      <h1 className="font-montserrat text-lg font-semibold">{title}</h1>
      {/* <p className="px-4 text-center  text-stone-400 text-sm font-semibold">
        {description}
      </p> */}
      <p className="font-poppins tracking-wide px-3 text-center text-stone-400 text-sm font-normal mt-2 leading-7">
        {description}
      </p>

      <span className="text-xl">{skillLevel}</span>
    </div>
  );
}
