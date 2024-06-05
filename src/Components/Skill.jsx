"use client";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

// import { useRef } from "react";
export default function Skill({ skill }) {
  const tiltRef = useRef(null);
  useEffect(() => {
    const element = tiltRef.current;
    if (element) {
      VanillaTilt.init(element, {
        max: 12,
        speed: 400,
        // glare: true,
        // "max-glare": 0.5,
      });

      // Clean up tilt effect on unmount
      return () => {
        element.vanillaTilt.destroy();
      };
    }
  }, []);
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["end center", "start 40%"],
  // });
  const { title, description, image, link } = skill;
  function handleClick() {
    toast(() => (
      <p>
        Dive deeper into{" "}
        <span className="font-poppins text-darkgreen dark:text-lime-400 font-bold">
          {title}!
        </span>{" "}
        Click here to explore.
        <br />
        <Link className="text-blue-400 underline pl-20" to={link}>
          Explore {title}
        </Link>
      </p>
    ));
  }

  return (
    <div
      ref={tiltRef}
      onClick={handleClick}
      className=" card-div shadow-lg dark:shadow-white shadow-textcolor"
    >
      <motion.img
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3, // Adjusted delay to ensure h1 appears after img
          x: { type: "spring", stiffness: 60 },
          // opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        src={image}
        width={60}
        height={60}
        className="max-lg:w-[50px] max-lg:h-[50px] transition-all duration-300  hover:transition-all hover:duration-300]"
      />
      <motion.h1
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.5, // Adjusted delay to ensure h1 appears after img
          x: { type: "spring", stiffness: 60 },
          // opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className=" font-montserrat text-lg font-semibold"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.7, // Adjusted delay to ensure h1 appears after img
          x: { type: "spring", stiffness: 60 },
          // opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="font-poppins tracking-wide px-3 text-center text-darkgreen dark:text-stone-400 text-sm font-normal mt-2 leading-7"
      >
        {description}
      </motion.p>
    </div>
  );
}
