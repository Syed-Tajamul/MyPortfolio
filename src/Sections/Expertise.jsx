import { useEffect, useState } from "react";

import Loading from "../Components/Loading";
import { motion } from "framer-motion";
export default function Expertise({
  children,
  title,
  subtitle,
  giphy,
  w,
  h,
  mobileWidth,
  mobileHeight,
}) {
  const [loading, setLoading] = useState(true);

  //below useEffect hook is a gem,what it does is when this page will render it will
  //always start or render from the top using window.scrollTo() method

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //below useEffect is used for vanillaTilt js
  // Run once after component mount
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  if (loading) return <Loading />;
  return (
    <div loading="lazy">
      <div className="max-md:px-4 max-md:pt-20 spacing   bg-white dark:bg-stone-900 w-full h-1/6 text-darkgreen dark:text-white  ">
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
          className="pt-4   text-center   font-montserrat max-md:text-4xl  bg-gradient-to-t  from-textcolor to-white dark:from-white dark:to-lime-400 text-transparent bg-clip-text w-full text-5xl font-semibold inline-block"
        >
          {title}
          <iframe
            className={`max-md:h-${mobileHeight} max-md:w-${mobileWidth} inline-block relative bottom-1 left-2 pointer-events-none`}
            src={giphy}
            width={w}
            height={h}
          ></iframe>
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
          className="text-center font-poppins w-full bg-gradient-to-t from-darkgreen to-white text-transparent bg-clip-text dark:text-stone-400 text-normal font-semibold"
        >
          {subtitle}
        </motion.p>
      </div>
      <div className=" bg-white dark:bg-black w-full h-full flex flex-col  md:gap-10 justify-center  items-center gap-10  text-darkgreen dark:text-white  spacing md:px-0 max-md:px-0">
        {children}
      </div>
    </div>
  );
}
