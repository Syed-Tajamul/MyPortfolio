import { useState } from "react";
import Questions from "../Components/Questions";
import { questions } from "../Constants";
import { Link } from "react-router-dom";

export default function WhoAmI() {
  const [curOpen, setCurOpen] = useState(null);
  // function handleLetsConnect() {
  //   const emailAddress = "syedtawseef0@gmail.com";
  //   const subject = "Let's Connect!";
  //   const body =
  //     "Hi Syed Tajamul,\n\nI visited your website and would like to connect with you.\n\n";

  //   const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
  //     subject
  //   )}&body=${encodeURIComponent(body)}`;

  //   window.location.href = mailtoLink;
  // }
  return (
    <div className=" max-md:px-8 spacing bg-black  px-10 py-6 flex justify-center items-center  h-full  text-white">
      <div className="relative z-10 flex flex-col gap-3 justify-center items-center w-full h-full  ">
        <h1 className="font-montserrat max-md:text-4xl bg-gradient-to-b from-white to-lime-400 text-transparent bg-clip-text text-center w-full text-5xl font-bold mb-2">
          About me
        </h1>
        <p className="tracking-wide font-roboto text-center text-base  max-md:leading-7  font-normal text-stone-400 max-w-lg leading-[1.475rem] ">
          <span className="text-lime-400 ">W</span>elcome to my world of
          innovation and creativity! I'm{" "}
          <span className="text-white  text-xl max-md:text-lg">
            {" "}
            Syed Tajamul Khursheed{" "}
          </span>
          a self-taught front-end developer from Pulwama, Jammu and Kashmir.
          {/* Crafting visually captivating web experiences with React.js, HTML,
            CSS, and Tailwind CSS */}
        </p>
        {questions.map((questionElement) => {
          return (
            <Questions
              curOpen={curOpen}
              setCurOpen={setCurOpen}
              key={questionElement.id}
              questionElement={questionElement}
            />
          );
        })}
        <p className="font-roboto max-md:text-center max-md:tracking-normal tracking-[1px] mt-8 text-center text-[15px] font-normal text-stone-400 max-w-xl leading-[2rem] ">
          <span className="text-white text-xl ">O</span>pen to collaboration?
          Reach out via{" "}
          <span className="text-orange-500 cursor-pointer">email</span> to
          discuss exciting opportunities. Connect with me on{" "}
          <Link
            to="https://www.linkedin.com/in/syed-tajamul-5447011b4/"
            className="text-blue-600 cursor-pointer"
          >
            LinkedIn
          </Link>{" "}
          for a deeper dive into my professional journey. For a glimpse into my
          latest endeavors, explore my{" "}
          <Link
            to="https://github.com/Syed-Tajamul"
            className="text-gray-200 cursor-pointer"
          >
            GitHub
          </Link>{" "}
          profile.
        </p>

        <a
          href="mailto:syedtawseef0@gmail.com"
          className="font-poppins transition-all duration-300 max-md:px-[5rem] px-6 py-2  rounded-xl   hover:transition-all hover:duration-300 focus:outline-none focus:ring-2 focus:ring-lime-400 text-sm font-medium hover:bg-white hover:text-stone-900     border-2 border-lime-400 my-4"
        >
          Lets Connect
        </a>
      </div>
    </div>
  );
}
