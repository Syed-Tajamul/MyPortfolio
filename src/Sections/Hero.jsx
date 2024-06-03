// import { useTypewriter } from "react-simple-typewriter";
// import { Stars } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { useEffect } from "react";
// export default function Hero() {
//   const [text] = useTypewriter({
//     words: ["Syed Tajamul", "Code Maestro", "Frontend dev 💻"],
//     loop: {},
//     typeSpeed: 120,
//     deleteSpeed: 100,
//   });
//   //below useEffect hook is a gem,what it does is when this page will render it will
//   //always start or render from the top using window.scrollTo() method
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <div
//       className="relative h-screen w-full bg-black flex spacing"
//       loading="lazy"
//     >
//       <div className="relative z-10 text-white w-1/2 flex flex-col justify-center items-start ">
//         <p className="w-full mb-4 text-base">
//           A glimpse into my professional portfolio
//         </p>
//         <div className="w-full text-5xl font-semibold ">
//           <h1>I am</h1>
//           <span className="text-white ">{text || "..."}</span>
//         </div>
//         <div className="w-full">
//           <button className="font-semibold px-12 py-4 border-2 border-white rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:duration-300 hover:transition-all mt-10">
//             portfolio that speaks !
//           </button>
//         </div>
//       </div>
//       <div className="w-1/2">
//         <img
//           className="h-full"
//           src="/assets/images/heroimage.jpg"
//           alt="image"
//           width={800}
//         />
//       </div>
// <div className="absolute inset-0 z-0 ">
//   <Canvas>
//     <Stars radius={60} count={2500} factor={4} fade speed={2} />
//   </Canvas>
//       </div>
//     </div>
//   );
// }

//from here

import { useEffect, useState } from "react";

import DotGrid from "../Components/Dottedgrid";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import Loading from "../Components/Loading";

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  if (loading) return <Loading />;

  function handleClick() {
    setTimeout(() => {
      toast.success("resume downloaded");
    }, 5000);
  }
  return (
    <>
      <Toaster />

      <div className="max-md:pt-40 max-md:justify-center h-screen  spacing relative items-center flex justify-center   bg-white dark:bg-black px-8 py-12 ">
        <div className="  max-lg:items-center   flex flex-col gap-2 justify-center items-start  text-white h-full">
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              x: { type: "spring", stiffness: 60 },
              // opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="font-poppins max-md:max-w-lg dark:text-stone-400 text-darkgreen text-[16px] font-[400] "
          >
            Greetings! I'm{" "}
            <span className="max-md:text-md text-[20px] text-textcolor dark:text-lime-400">
              Syed Tajamul
            </span>
          </motion.p>
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 1, // Adjusted delay to ensure h1 appears after img
              x: { type: "spring", stiffness: 60 },
              // opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="max-md:leading-[2.7rem] dark:text-white text-darkgreen font-poppins max-lg:text-center  max-md:text-[2.50rem]    text-5xl font-bold text-wrap max-w-sm  "
          >
            I Craft Digital Experiences:
            <div className="max-md:mt-1 md:mt-3 inner-headings">
              <span className="text-rotation relative text-darkgreen dark:text-lime-400 ">
                Code 💻
                <br />
                Animate 🎨
                <br />
                Optimize ⚙
                <br />
              </span>
              {/* <span className="text-rotation relative text-darkgreen dark:text-lime-400">
                Develop 💻
                <br />
                Design 🎨
                <br />
                Enhance ⚙
                <br />
              </span> */}
            </div>
          </motion.h1>

          <motion.a
            onClick={handleClick}
            href="/assets/Resume/SyedTajamul-FrontEndDev.pdf"
            download
            className="text-center bg-textcolor dark:bg-black text-white  font-poppins focus:outline-none focus:ring-2 focus:ring-lime-400 text-base font-medium dark:hover:bg- hover:bg-white hover:text-darkgreen dark:hover:bg-white dark:hover:text-stone-900 transition-all duration-300  max-md:tracking-[0.055rem] max-md:py-3 max-md:text-nowrap px-8 max-md:px-11 py-3 rounded-xl border-2 border-textcolor dark:border-lime-400"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 1.4, // Adjusted delay to ensure h1 appears after img
              x: { type: "spring", stiffness: 60 },
              // opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            Download Resume
          </motion.a>
        </div>
        <DotGrid positioning={"relative left-[60px]"} />
      </div>
    </>
  );
};
export default Hero;
