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

import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import DotGrid from "../Components/Dottedgrid";
import toast, { Toaster } from "react-hot-toast";

const Hero = () => {
  const [state, setState] = useState("Download Resume");
  const [icon, setIcon] = useState(null);

  function handleClick() {
    setTimeout(() => {
      toast.success("resume downloaded");
    }, 2000);
  }
  return (
    <>
      <Toaster />

      <div className="max-md:pt-40 max-md:justify-center h-screen  spacing relative items-center flex justify-center   bg-black px-8 py-12 ">
        <div className="  max-lg:items-center   flex flex-col gap-2 justify-center items-start  text-white h-full">
          <p className="font-poppins max-md:max-w-lg text-stone-400 text-[16px] font-[400] ">
            Greetings! I'm{" "}
            <span className="max-md:text-md text-[20px] text-lime-400">
              Syed Tajamul
            </span>
          </p>
          <h1 className="font-poppins max-lg:text-center  max-md:text-4xl    text-5xl font-bold text-wrap max-w-sm  ">
            I Craft Digital Experiences:
            <div className="mt-3 inner-headings">
              <span className="text-rotation relative text-lime-400 ">
                Code 💻
                <br />
                Animate 🎨
                <br />
                Optimize ⚙
                <br />
              </span>
            </div>
          </h1>
          {/* <p className="relative z-20 text-nowrap  text-2xl font-bold">
          <span className="text-2xl text-lime-400">F</span>ront
          <span className="text-2xl text-lime-400">E</span>nd
          <span className="text-2xl text-lime-400">D</span>eveloper
        </p> */}
          {/* <p className="relative z-20  text-stone-400 text-[16px] font-semibold">
          Empowering digital landscapes with fresh creativity and innovative
          coding. A dedicated front end enthusiast, ready to make a mark !
        </p> */}

          <div className="flex gap-6 justify-center items-start">
            <a
              onClick={handleClick}
              href="/assets/Resume/SyedTajamul-FrontEndDev.pdf"
              download
              onMouseEnter={() => {
                setState("Download Resume");
                setIcon(FaDownload);
              }}
              onMouseLeave={() => {
                setState("Download Resume");
                setIcon(null);
              }}
              className="font-poppins focus:outline-none focus:ring-2 focus:ring-lime-400 text-sm font-medium hover:bg-white hover:text-stone-900 hover:transition-all hover:duration-300 max-md:px-[3.2rem] max-md:tracking-[0.055rem] max-md:py-3 max-md:text-nowrap px-10 py-3 transition-all duration-300 rounded-xl border-2 border-lime-400"
            >
              <span className="inline-block">{icon}</span> {state}
            </a>
          </div>
        </div>
        <DotGrid positioning={"relative left-[60px]"} />
      </div>
    </>
  );
};
export default Hero;
