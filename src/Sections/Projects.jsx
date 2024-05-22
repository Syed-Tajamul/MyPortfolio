import { useEffect, useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import { projects } from "../Constants/index";
import Loading from "../Components/Loading";
export default function Projects({ clicked, setClicked }) {
  const [loading, setLoading] = useState(true);
  //below useEffect hook is a gem,what it does is when this page will render it will
  //always start or render from the top using window.scrollTo() method
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) return <Loading />;
  return (
    <div className="  h-[full]  text-black " loading="lazy">
      <div className="max-md:px-4 bg-stone-900  h-[15%] spacing w-full  text-white flex flex-col justify-center items-start gap-3">
        <h1 className="font-montserrat max-md:hidden max-md:w-[14rem] max-md:leading-[3rem] bg-gradient-to-b from-white to-lime-400 text-transparent bg-clip-text w-full text-5xl font-semibold ">
          Echoes of Excellence{" "}
          <iframe
            className="relative bottom-3  pointer-events-none inline-block"
            src="https://giphy.com/embed/rsuzNqCVX2UImep49N"
            width="80"
            height="80"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </h1>
        <span className="font-montserrat md:hidden max-md:text-4xl   bg-gradient-to-b from-white to-lime-400 text-transparent bg-clip-text w-full text-5xl font-semibold ">
          Portfolio
          <iframe
            className="relative bottom-3  pointer-events-none inline-block"
            src="https://giphy.com/embed/rsuzNqCVX2UImep49N"
            width="80"
            height="80"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </span>

        <p className="font-poppins  max-md:leading-9 w-full text-stone-400 text-normal font-semibold">
          Exploring the Pinnacle Moments in My Project Gallery
        </p>
      </div>
      <div className="bg-black  w-full spacing    max-md:px-14 ">
        <div className=" sm:grid-cols-2  max-sm:grid-cols-1 grid gap-6 max-md:grid-cols-2 lg:grid-cols-3     ">
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                project={project}
                clicked={clicked}
                setClicked={setClicked}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
