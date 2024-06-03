import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";

export default function Education({ el }) {
  const { image, title, institute, duration } = el;
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
  return (
    <div
      ref={tiltRef}
      className="card-div max-md:h-full shadow-lg dark:shadow-white shadow-textcolor"
    >
      <motion.img
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.4, // Adjusted delay to ensure h1 appears after img
          x: { type: "spring", stiffness: 60 },
          // opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        src={image}
        alt="masters"
        height={100}
        width={100}
      />
      <motion.h1
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.6, // Adjusted delay to ensure h1 appears after img
          x: { type: "spring", stiffness: 60 },
          // opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="text-center px-4 font-montserrat text-lg font-medium "
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
        className="px-4 font-poppins leading-8 text-center text-darkgreen dark:text-stone-400 text-sm font-normal"
      >
        {institute}
      </motion.p>
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
        className="font-poppins text-center text-darkgreen dark:text-stone-400 text-sm font-medium"
      >
        {duration}
      </motion.p>
    </div>
  );
}
