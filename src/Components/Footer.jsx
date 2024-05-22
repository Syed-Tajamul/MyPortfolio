import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { Form, Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="relative px-10 py-4 h-full bg-gradient-to-br from-stone-900 to-black ">
      {/* <div className="flex justify-center items-center gap-4 pt-20">
        <div className="flex flex-col gap-6 justify-center items-center">
          <h1 className="bg-gradient-to-b from-white to-lime-400 text-transparent bg-clip-text text-5xl font-bold">
            Lets Connect
          </h1>
          <p className="text-center text-base font-semibold text-stone-400 max-w-xl leading-[1.475rem] ">
            Unlocking opportunities through collaboration and innovation. Let's
            build something amazing together!
          </p>
        </div>
      </div> */}

      {/* <div className="flex justify-around gap-10 px-[6rem]">
        <div className="w-[1px] h-30 bg-stone-700 mt-10"></div>
        <div className="flex flex-col gap-6 text-white spacing">
          <Link
            className="font-medium text-[14px] transition-all duration-300 hover:text-lime-400 hover:transition-all hover:duration-300 "
            to="/"
          >
            Home
          </Link>
          <Link
            className="font-medium text-[14px] transition-all duration-300 hover:text-lime-400 hover:transition-all hover:duration-300 "
            to="whoAmI"
          >
            Who Am I
          </Link>
          <Link
            className="font-medium text-[14px] transition-all duration-300 hover:text-lime-400 hover:transition-all hover:duration-300 "
            to="/whatIDo"
          >
            What I Do
          </Link>
          <Link
            className="font-medium text-[14px] transition-all duration-300 hover:text-lime-400 hover:transition-all hover:duration-300 "
            to="/whatIDid"
          >
            What I Did
          </Link>
        </div>
        <div className="w-[1px] h-30 bg-stone-700 mt-10"></div>
        <div className="my-6 rounded-xl flex justify-center text-white ">
          <Form className="flex flex-col justify-center gap-6 h-full items-start mt-4">
            <div className="flex gap-4 w-full">
              <label className="font-medium text-[14px] w-[60px]">Name</label>
              <input
                required
                type="text"
                className="placeholder-white bg-gradient-to-br from-stone-900 to-black focus:outline-none focus:ring-2 focus:ring-lime-400  w-[350px] rounded-xl h-[2rem] flex-1 border-[1px] border-stone-400"
              />
            </div>
            <div className="flex gap-4 w-full">
              <label className=" font-medium text-[14px] w-[60px]">Email</label>
              <input
                required
                type="email"
                className="placeholder-white bg-gradient-to-br from-stone-900 to-black focus:outline-none focus:ring-2 focus:ring-lime-400  w-[350px] rounded-xl h-[2rem] flex-1 border-[1px] border-stone-400"
              />
            </div>
            <div className="flex gap-4 w-full">
              <label className="font-medium text-[14px] w-[60px]">
                Message
              </label>
              <textarea
                required
                className="placeholder-white  bg-gradient-to-br from-stone-900 to-black focus:outline-none focus:ring-2 focus:ring-lime-400  w-[350px] rounded-xl h-[6rem] flex-1 border-[1px] border-stone-400"
              ></textarea>
            </div>
            <div className="w-full flex justify-start ">
              <button className="focus:outline-none focus:ring-2 focus:ring-lime-400 text-sm font-medium hover:bg-white hover:text-stone-900 hover:transition-all hover:duration-300 px-6 py-2 transition-all duration-300 rounded-xl border-2 border-lime-400">
                Submit
              </button>
            </div>
          </Form>
        </div>
        <div className="w-[1px] h-30 bg-stone-700 mt-10"></div>
      </div> */}
      <div className="font-montserrat max-md:flex-col max-md:gap-4 flex justify-between text-white ">
        <Link
          className="font-montserrat max-md:hidden flex justify-center items-center font-semibold text-2xl text-white"
          to="/"
        >
          STK
        </Link>
        <div className="max-md:tracking-normal tracking-wider font-medium  leading-[18px] flex flex-col gap-2 justify-center flex-1 items-center text-sm text-stone-400">
          <p className="text-[15px]">
            <span className="font-roboto text-white font-medium">
              &copy; 2024 ,Syed Tajamul
            </span>
            . All rights reserved.
          </p>
          <p className="max-md:hidden">
            Website designed by{" "}
            <span className="text-white font-medium">Syed Tajamul</span>
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
