import { useState } from "react";
import Questions from "../Components/Questions";
import { questions } from "../Constants";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
export default function WhoAmI() {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "end 73%"],
  });

  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="bg-white max-md:px-8 spacing dark:bg-black  px-10 py-6 flex justify-center items-center  h-full  text-white">
      <div className="relative z-10 flex flex-col gap-3 justify-center items-center w-full h-full  ">
        <motion.h1
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.5, // Adjusted delay to ensure h1 appears after img
            y: { type: "spring", stiffness: 60 },
            // opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" font-montserrat max-md:text-[2.5rem]  bg-gradient-to-t  from-textcolor to-white dark:from-white dark:to-lime-400 text-transparent  bg-clip-text text-center w-full text-5xl font-bold mb-2"
        >
          About me
        </motion.h1>
        <motion.p
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.8, // Adjusted delay to ensure h1 appears after img
            x: { type: "spring", stiffness: 60 },
            // opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="tracking-wider font-poppins text-center text-base  max-md:leading-8  font-medium text-darkgreen dark:text-stone-400 max-w-lg leading-[2.4rem] "
        >
          <span className="text-textcolor dark:text-lime-400 font-poppins text-2xl">
            W
          </span>
          elcome to my world of innovation and creativity! I'm{" "}
          <span className="text-textcolor dark:text-white  text-xl max-md:text-lg">
            {" "}
            Syed Tajamul Khursheed{" "}
          </span>
          a self-taught front-end developer from Pulwama, Jammu and Kashmir.
        </motion.p>
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
        <motion.p
          ref={element}
          style={{
            opacity: scrollYProgress,
          }}
          className="font-roboto max-md:text-center max-md:tracking-normal tracking-[1px] mt-8 text-center text-[15px] font-medium text-darkgreen dark:text-stone-400 max-w-xl leading-[2rem] "
        >
          <span className="text-textcolor dark:text-white text-xl ">O</span>pen
          to collaboration? Reach out via{" "}
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
            className="text-textcolor dark:text-gray-200 cursor-pointer"
          >
            GitHub
          </Link>{" "}
          profile.
        </motion.p>

        <a
          href="mailto:syedtawseef0@gmail.com"
          className="dark:bg-black hover:bg-white hover:text-darkgreen hover:border-textcolor bg-textcolor text-white font-poppins transition-all duration-300 max-md:px-[5rem] px-6 py-2  rounded-xl   hover:transition-all hover:duration-300 focus:outline-none focus:ring-2 focus:ring-lime-400 text-sm font-medium dark:hover:bg-white dark:hover:text-stone-900     border-2 dark:border-lime-400 max-md:text-base my-4"
        >
          Lets Connect
        </a>
      </div>
    </div>
  );
}
