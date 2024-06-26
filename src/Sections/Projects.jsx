import { useEffect, useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import { projects } from "../Constants/index";
import Loading from "../Components/Loading";
import { motion } from "framer-motion";
export default function Projects({ clicked, setClicked }) {
  const [loading, setLoading] = useState(true);

  //below useEffect hook is a gem,what it does is when this page will render it will
  //always start or render from the top using window.scrollTo() method
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) return <Loading />;
  return (
    <div className="  h-[full]  text-darkgreen dark:text-black " loading="lazy">
      <div className="gap-6 max-md:px-4 bg-white dark:bg-stone-900  h-full  spacing w-full  text-darkgreen dark:text-white flex flex-col justify-center items-start ">
        <motion.h1
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4, // Adjusted delay to ensure h1 appears after img
            x: { type: "spring", stiffness: 60 },
            // opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="pt-8 text-center font-montserrat max-md:hidden max-md:w-[14rem] max-md:leading-[3rem] bg-gradient-to-t dark:from-white from-textcolor to-white dark:to-lime-400  text-transparent bg-clip-text w-full text-5xl font-semibold "
        >
          Echoes of Excellence{" "}
          {/* <iframe
            className="max-md:hidden relative bottom-3  pointer-events-none inline-block"
            src="https://giphy.com/embed/rsuzNqCVX2UImep49N"
            width="80"
            height="80"
          ></iframe> */}
        </motion.h1>
        <motion.h1
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4, // Adjusted delay to ensure h1 appears after img
            x: { type: "spring", stiffness: 60 },
            // opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="pt-6 text-center font-montserrat md:hidden max-md:text-[2.5rem]   bg-gradient-to-t dark:from-white from-textcolor to-white dark:to-lime-400 text-transparent  bg-clip-text w-full text-5xl font-semibold "
        >
          Portfolio
          {/* <iframe
            className="relative bottom-4  pointer-events-none inline-block"
            src="https://giphy.com/embed/rsuzNqCVX2UImep49N"
            width="80"
            height="80"
          ></iframe> */}
        </motion.h1>

        <motion.p
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.6, // Adjusted delay to ensure h1 appears after img
            x: { type: "spring", stiffness: 60 },
            // opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="relative max-md:bottom-3 text-center font-poppins   w-full bg-gradient-to-t from-darkgreen to-white text-transparent bg-clip-text dark:text-stone-400 text-normal font-semibold"
        >
          A glimpse into My Project Gallery
        </motion.p>
      </div>
      <div className="bg-white dark:bg-black  w-full spacing    max-md:px-3 ">
        <div className=" sm:grid-cols-2  max-sm:grid-cols-1 grid gap-6 max-md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                project={project}
                clicked={clicked}
                setClicked={setClicked}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
