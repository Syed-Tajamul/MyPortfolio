import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
export default function Certificate({ certificate }) {
  const { title, instructor, completionDate, platform, link } = certificate;

  function handleClick() {
    console.log("clicked");
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="ml-3 flex-1">
              <p className="font-poppins text-sm font-medium text-gray-900 dark:text-white">
                Certificate Link Coming Soon!
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Thank you for your interest in viewing this certification. The
                link will be available shortly. Stay tuned!
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-textcolor dark:border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ));
  }

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
      className=" max-md:w-[340px] max-md:h-full max-md:py-6 bg-white dark:bg-stone-950 shadow-lg dark:shadow-white shadow-textcolor hover:backdrop-blur-3xl transition-colors duration-300 hover:transition-colors hover:duration-300 cursor-pointer dark:hover:bg-white/10 w-[300px] h-[350px]  rounded-md flex flex-col justify-center items-center gap-4 pt-10 hover:bg-textcolor/30 border-[1px] border-textcolor/40 dark:border-stone-700"
    >
      <motion.h1
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2, // Adjusted delay to ensure h1 appears after img
          x: { type: "spring", stiffness: 60 },
          // opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="px-4 leading-8 font-montserrat text-center text-lg font-medium text-darkgreen dark:text-white"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.4, // Adjusted delay to ensure h1 appears after img
          x: { type: "spring", stiffness: 60 },
          // opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="font-poppins text-base text-medium text-darkgreen dark:text-white"
      >
        {instructor}
      </motion.p>
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
        className="font-poppins text-sm text-medium text-darkgreen dark:text-stone-400"
      >
        {completionDate}
      </motion.p>
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
        className="font-poppins text-sm text-medium text-darkgreen dark:text-stone-400"
      >
        {platform}
      </motion.p>
      <motion.button
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.8, // Adjusted delay to ensure h1 appears after img
          x: { type: "spring", stiffness: 60 },
          // opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        onClick={handleClick}
        className="font-poppins text-sm text-medium text-textcolor dark:text-blue-400 underline"
      >
        {link}
      </motion.button>
    </div>
  );
}
