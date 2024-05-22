import { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { questions } from "../Constants";
import Questions from "../Components/Questions";

export default function WhoAmI() {
  const [curOpen, setCurOpen] = useState(null);

  const tiltRef = useRef(null);
  useEffect(() => {
    const element = tiltRef.current;
    if (element) {
      VanillaTilt.init(element, {
        max: 10,
        speed: 800,
        // glare: true,
        "max-glare": 0.5,
      });

      // Clean up tilt effect on unmount
      return () => {
        element.vanillaTilt.destroy();
      };
    }
  }, []);

  //below useEffect hook is a gem,what it does is when this page will render it will
  //always start or render from the top using window.scrollTo() method
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" border-[1px] border-gray-800 h-[152vh]" loading="lazy">
      <div className="bg-stone-900 w-full h-[16rem]">
        <div className="flex flex-col  text-white spacing w-full justify-center h-full">
          <div className="flex mt-8">
            <h1 className="text-5xl font-semibold">Who Am I</h1>

            <iframe
              className="relative bottom-3 left-3 pointer-events-none"
              src="https://giphy.com/embed/WCzGme5RtmUM7Fhl9f"
              width="80"
              height="80"
            ></iframe>
          </div>

          <p className=" text-base font-semibold text-stone-400 max-w-md leading-[1.475rem] ">
            <span className="text-lime-400 ">W</span>elcome to my world of
            innovation and creativity! I'm{" "}
            <span className="text-white font-bold text-xl whitespace-nowrap">
              {" "}
              Syed Tajamul Khursheed{" "}
            </span>
            a self-taught front-end developer from Pulwama, Jammu and Kashmir.
            {/* Crafting visually captivating web experiences with React.js, HTML,
            CSS, and Tailwind CSS */}
          </p>
        </div>
      </div>
      <div className="bg-black w-full  text-white flex h-full">
        <div className="w-1/2">
          <div className="flex flex-col gap-6 spacing justify-center items-start">
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
            {/* <button className=" font-semibold hover:bg-white hover:text-black mt-1 px-10 py-3 border-2 border-white rounded-lg transition-all duration-300 hover:transition-all hover:duration-300">
              Lets Connect!
            </button> */}
          </div>
        </div>
        <div className="w-1/2 flex justify-start items-center cursor-pointer h-screen">
          <div ref={tiltRef}>
            <img
              className="animate-float w-[370px] h-[370px] ml-12 mb-12  preserve-3d rounded-xl"
              src="/assets/images/newdev.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
