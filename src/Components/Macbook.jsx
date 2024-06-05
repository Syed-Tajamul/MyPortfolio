import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// import cn from "../Utils/cn";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export const MacbookScroll = ({ technology, title, description, image }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);
  // useEffect(() => {
  //   if (window && window.innerWidth < 380) {
  //     setIsMobile(true);
  //   }
  // }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1.2 : 1.5]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1.3 : 1.5]
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  // const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  // const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  function handleClick() {
    toast(() => (
      <span className="font-poppins text-darkgreen dark:white font-semibold">
        Thank you for your interest! The project is currently being deployed.
        Please check back soon for updates.
      </span>
    ));
  }
  return (
    <>
      <Toaster />
      <div
        ref={ref}
        className=" min-h-[120vh]  md:min-h-[300vh]  object-cover   flex flex-col items-center py-0  md:pt-14 justify-start flex-shrink-0 [perspective:800px] transform scale-[0.57] md:scale-100 "
      >
        <motion.h2
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3, // Adjusted delay to ensure h1 appears after img
            x: { type: "spring", stiffness: 60 },
            // opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="bg-gradient-to-t from-textcolor  text-transparent dark:from-lime-400 to-white bg-clip-text uppercase text-textcolor text-6xl md:text-7xl font-extrabold mb-20  text-center"
        >
          {title || "portfolio"}
        </motion.h2>
        {/* Lid */}
        <Lid
          image={image}
          // src={src}
          scaleX={scaleX}
          scaleY={scaleY}
          rotate={rotate}
          translate={translate}
        />
        {/* Base area */}
        <div className="h-[22rem] w-[32rem] bg-gray-200 dark:bg-[#272729] rounded-2xl overflow-hidden relative -z-10">
          {/* above keyboard bar */}
          <div className="h-10 w-full relative">
            <div className="absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505]" />
          </div>
          <div className=" flex flex-col relative h-[55%]">
            <div className="shadow-md shadow-white w-[80%] rounded-md  bg-gradient-to-br from-black to-white h-full   flex gap-[1px] mx-auto justify-center items-center">
              <span className="flex justify-center items-center w-12 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                esc
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                F1
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                F2
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                F3
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                F4
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                F5
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                F6
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                F7
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                F8
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                F9
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                F10
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                F11
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                F12
              </span>
            </div>
            {/*my row 2 from here */}
            <div className="shadow-md shadow-white rounded-md w-[80%] justify-center items-center bg-gradient-to-br from-black to-white h-full gap-[1px]  flex mx-auto">
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                `
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                1
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                2
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                3
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                4
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                5
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                6
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                7
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                8
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                9
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                0
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                -
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                =
              </span>
              <span className="flex justify-center items-center w-14 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                backspace
              </span>
            </div>
            <div className="w-[80%] shadow-md shadow-white justify-center items-center rounded-md  bg-gradient-to-br from-black to-white h-full   gap-[1px] flex mx-auto">
              <span className="flex justify-center items-center w-10 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                tab
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                Q
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                W
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                E
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                R
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                T
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                Y
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                U
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                I
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                O
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                P
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                [
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                ]
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                \
              </span>
            </div>
            <div className="w-[80%] shadow-md shadow-white justify-center items-center rounded-md gap-[1px] bg-gradient-to-br from-black to-white h-full   flex mx-auto">
              <span className="flex justify-center items-center w-12 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                caps lock
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                A
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                S
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                D
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                F
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                G
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                H
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                J
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                K
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                L
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                ;
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                '
              </span>
              <span className="flex justify-center items-center w-14 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                enter
              </span>
            </div>
            <div className="shadow-md shadow-white w-[80%] justify-center items-center rounded-md gap-[1px] bg-gradient-to-br from-black to-white h-full   flex mx-auto">
              <span className="flex justify-center items-center w-16 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                shift
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                Z
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                X
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                C
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                V
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                B
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                N
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                M
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                ,
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                .
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                /
              </span>
              <span className="flex justify-center items-center w-20 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                shift
              </span>
            </div>
            <div className=" w-[80%] justify-center items-center rounded-md gap-[1px] bg-gradient-to-br from-black to-white h-full   flex mx-auto">
              <span className="shadow-md shadow-white flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                ctrl
              </span>
              <span className="shadow-md shadow-white flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                fn
              </span>
              <span className="shadow-md shadow-white flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                ⊞
              </span>
              <span className="shadow-md shadow-white flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                alt
              </span>
              <span className="shadow-lg shadow-white flex justify-center items-center w-[12rem] h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white"></span>
              <span className="shadow-md shadow-white flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                alt
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                ctrl
              </span>
              <span className=" flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                &larr;
              </span>
              <span className="flex flex-col">
                <span className="flex justify-center items-center w-6 h-[14px] border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-sm text-white">
                  &larr;
                </span>
                <span className="flex justify-center items-center w-6 h-[14px] border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-sm text-white">
                  &rarr;
                </span>
              </span>
              <span className="flex justify-center items-center w-8 h-7 border-[1px] border-stone-500 px-1 bg-black text-[7px]  rounded-md text-white">
                &rarr;
              </span>
            </div>
            {/* <div className="mx-auto w-[10%] overflow-hidden  h-full">
            <SpeakerGrid />
          </div> */}
            {/* <div className="mx-auto w-[80%] h-full">
            <Keypad />
          </div> */}
            {/* <div className="mx-auto w-[10%] overflow-hidden  h-full">
            <SpeakerGrid />
          </div> */}
          </div>
          <Trackpad />
        </div>

        {/* below code for project description */}
      </div>
      <div className="spacing max-md:px-6  py-0 relative  mt-auto h-full w-full  bg-white dark:bg-black dark:text-stone-400 text-darkgreen max-lg:flex-col flex  max-md:gap-16 justify-center md:gap-20 items-center  ">
        <div className="flex flex-col gap-8 justify-center items-center">
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4, // Adjusted delay to ensure h1 appears after img
              x: { type: "spring", stiffness: 60 },
              // opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="uppercase dark:text-lime-400 text-darkgreen max-md:2xl text-4xl font-poppins font-medium"
          >
            {title}
          </motion.div>
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.6, // Adjusted delay to ensure h1 appears after img
              x: { type: "spring", stiffness: 60 },
              // opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-sm md:text-base font-poppins font-normal md:font-medium  md:max-w-2xl text-justify w-full md:leading-[2rem] leading-[1.7rem]"
          >
            {description}
          </motion.div>
        </div>
        <div className="md:mx-auto w-full md:w-[27rem]   h-full  flex flex-col justify-center items-center gap-4">
          <motion.button
            onClick={() => {
              handleClick();
            }}
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.6, // Adjusted delay to ensure h1 appears after img
              x: { type: "spring", stiffness: 60 },
              // opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="  hover:bg-textcolor hover:text-white font-poppins dark:hover:bg-white dark:hover:text-stone-900 transition-all duration-300 dark:text-stone-400 text-darkgreen font-medium rounded-lg dark:border-lime-400 border-[1px] border-textcolor py-2 md:py-3  md:px-40 max-md:w-full text-nowrap text-center "
          >
            See Live
          </motion.button>
          <span className="items-center justify-center text-nowrap w-full  font-xl text-darkgreen dark:text-white font-bold font-poppins flex gap-4 flex-wrap">
            Tech Stack :{" "}
            {technology.map((el) => {
              return (
                <span
                  className="text-nowrap text-darkgreen dark:text-stone-400 px-4 py-2 rounded-lg border-[1px] dark:border-lime-400 border-textcolor  "
                  key={el}
                >
                  {el}
                </span>
              );
            })}
          </span>
          <motion.button
            onClick={() => {
              navigate("/whatIDid");
            }}
            className="cursor-pointer  max-md:w-full transition-all duration-300 font-medium font-poppins hover:bg-textcolor hover:text-white dark:hover:bg-white dark:hover:text-stone-900 dark:text-stone-400 text-darkgreen  rounded-lg dark:border-lime-400 border-[1px] border-textcolor py-2 md:py-2  md:px-[11.3rem]   text-nowrap text-center "
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.6, // Adjusted delay to ensure h1 appears after img
              x: { type: "spring", stiffness: 60 },
              // opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            &larr; back
          </motion.button>
        </div>
      </div>
    </>
  );
};

export const Lid = ({ scaleX, scaleY, rotate, translate, image }) => {
  return (
    <div className="relative [perspective:800px]">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative"
      >
        <div
          style={{
            boxShadow: "0px 2px 0px 2px var(--neutral-900) inset",
          }}
          className="absolute inset-0 bg-[#0B0B0F] rounded-lg flex items-center justify-center"
        ></div>
      </div>
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="h-96 w-[32rem] absolute inset-0 bg-[#010101] rounded-2xl p-2"
      >
        <div className=" absolute inset-0 bg-[#272729] rounded-lg" />
        <img
          src={image}
          alt="aceternity logo"
          loading="lazy"
          className="absolute rounded-lg inset-0  h-full w-full"
        />
        {/* <img src={image} alt="image" /> */}
        {/* <div className="absolute rounded-lg inset-0 h-full w-full bg-lime-400"></div> */}
      </motion.div>
    </div>
  );
};

export const Trackpad = () => {
  return (
    <div
      className=" mt-6 dark:border-[1px] border-stone-700 w-[40%] mx-auto h-32  rounded-xl my-1"
      style={{
        boxShadow: "0px 0px 1px 1px #00000020 inset",
      }}
    ></div>
  );
};

// const SpeakerGrid = () => {
//   return (
//     <div className="grid grid-cols-1 gap-y-2 my-2 h-full justify-items-center ">
//       {[...Array(6)].map((_, i) => (
//         <div
//           key={i}
//           className={cn(
//             "rounded-md bg-gradient-to-br from-black via-neutral-900 to-95% h-[10px] w-[5px]"
//           )}
//         ></div>
//       ))}
//     </div>
//   );
// };

// const GradientBG = () => {
//   return (
//     <div className="h-64 w-full absolute bottom-0 inset-x-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
//   );
// };

export default MacbookScroll;
