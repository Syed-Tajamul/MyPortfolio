import { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { projects } from "../Constants";
import { useParams } from "react-router-dom";
import ProjectCarousel from "./ProjectCarousel";
import ReadMore from "./ReadMore";
// import ProjectCarousel from "./ProjectCarousel";
export default function ProjectDescCard() {
  const [readMore, setReadMore] = useState(false);
  const [bigPic, setBigPic] = useState(1);
  const { name } = useParams();
  const tiltRef = useRef(null);
  useEffect(() => {
    const element = tiltRef.current;
    if (element) {
      VanillaTilt.init(element, {
        max: 10,
        speed: 800,
        glare: true,
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

  const project = projects.find((el) => el.title === name);
  const { title, description, carousel, image } = project;
  console.log(image);
  const updatedImage = `/assets/images/${title}/laptop${bigPic}.png`;
  const truncatedDescription = description.split(" ").splice(0, 20).join(" ");
  const descriptionLength = description.split(" ").length;
  const remaining = description
    .split(" ")
    .splice(20, descriptionLength)
    .join(" ");

  return (
    <div className="h-full" loading="lazy">
      <div className="max-md:px-4 bg-stone-900 w-full h-full spacing">
        <h1 className="font-montserrat bg-gradient-to-b from-white to-lime-400 text-transparent bg-clip-text text-white text-5xl font-medium mb-4 inline-block capitalize">
          {title}
        </h1>
        <iframe
          className="inline-block relative bottom-7 left-3 pointer-events-none"
          src="https://giphy.com/embed/lvjW50Ld1D4qHD0wra"
          width="90"
          height="90"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <p className="font-poppins text-sm font-medium tracking-wide  text-stone-400 max-w-5xl leading-8">
          {truncatedDescription}{" "}
          {readMore && (
            <ReadMore description={description} setReadMore={setReadMore} />
          )}
        </p>
        <span
          onClick={() => {
            setReadMore((prev) => !prev);
          }}
          className="font-poppins text-lime-400 underline cursor-pointer"
        >
          {readMore ? "Read Less" : "Read More "}
        </span>
      </div>
      <div className="bg-black  w-full h-full">
        <div className="flex flex-col justify-center  items-center py-4 gap-8 ">
          <img
            ref={tiltRef}
            className="max-md:px-4  rounded-xl h-[478px] w-[700px] max-sm:w-full max-sm:h-[300px] "
            src={updatedImage}
            alt="full image"
          />
          <div className="overflow-hidden bg-stone-900 flex justify-between items-center space-x-16 py-6 px-6 w-full">
            <ProjectCarousel
              carousel={carousel[0]}
              key={project.id}
              setBigPic={setBigPic}
            />
            ;
            <ProjectCarousel
              carousel={carousel[0]}
              key={project.id}
              setBigPic={setBigPic}
            />
            ;
          </div>
        </div>
      </div>
    </div>
  );
}
