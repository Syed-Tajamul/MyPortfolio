import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"],
  });
  const parallex = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const { title, image, gitlink } = project;
  return (
    <motion.div
      style={{
        y: parallex,
        // opacity: projectOpacity,
      }}
      ref={container}
      className="project-div"
      loading="lazy"
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4, // Adjusted delay to ensure h1 appears after img
          y: { type: "spring", stiffness: 60 },
          // opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="h-5/6  "
      >
        <Link to={`/project/${title}`}>
          <img
            loading="lazy"
            src={image}
            alt="project1"
            className="p-2 transition-all duration-300 hover:transition-all hover:duration-300 hover:scale-105 w-full h-full rounded-3xl border-[1px] border-textcolor dark:border-stone-400"
          />
        </Link>
      </motion.div>
      <div className="flex justify-between  items-center">
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.6, // Adjusted delay to ensure h1 appears after img
            y: { type: "spring", stiffness: 60 },
            // opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="text-nowrap font-montserrat text-center  font-semibold text-base uppercase text-textcolor dark:text-stone-400"
        >
          {title}
        </motion.h1>

        <motion.a
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.7, // Adjusted delay to ensure h1 appears after img
            y: { type: "spring", stiffness: 60 },
            // opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          href={gitlink}
        >
          <FaGithub className="cursor-pointer dark:text-stone-400 text-textcolor w-5 h-5 transition-all duration-300 hover:scale-125 hover:transition-all hover:duration-300 " />
        </motion.a>
      </div>
    </motion.div>
  );
}
