import { projects } from "../Constants";
import { useParams } from "react-router-dom";
import MacbookScroll from "./Macbook";
import Loading from "../Components/Loading";
import { useEffect, useState } from "react";
export default function ProjectDescCard() {
  const { name } = useParams();
  const project = projects.find((el) => el.title === name);
  const { title, description, technology, image } = project;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  if (loading) return <Loading />;
  return (
    <div className="dark:bg-black bg-white">
      <MacbookScroll
        technology={technology}
        title={title}
        description={description}
        image={image}
      />
    </div>
  );
  // const [readMore, setReadMore] = useState(false);
  // const [bigPic, setBigPic] = useState(1);
  // const { name } = useParams();
  // const tiltRef = useRef(null);
  // useEffect(() => {
  //   const element = tiltRef.current;
  //   if (element) {
  //     VanillaTilt.init(element, {
  //       max: 10,
  //       speed: 800,
  //       glare: true,
  //       "max-glare": 0.5,
  //     });
  //     // Clean up tilt effect on unmount
  //     return () => {
  //       element.vanillaTilt.destroy();
  //     };
  //   }
  // }, []);
  // //below useEffect hook is a gem,what it does is when this page will render it will
  // //always start or render from the top using window.scrollTo() method
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  // const project = projects.find((el) => el.title === name);
  // const { title, description, carousel, image } = project;
  // console.log(image);
  // const updatedImage = `/assets/images/${title}/laptop${bigPic}.png`;
  // const truncatedDescription = description.split(" ").splice(0, 20).join(" ");
  // return (
  //   <div className="h-full" loading="lazy">
  //     <div className="max-md:px-4 bg-white dark:bg-stone-900 w-full h-full spacing">
  //       <h1 className="font-montserrat dark:bg-gradient-to-b from-white to-lime-400 dark:text-transparent  bg-clip-text text-textcolor text-5xl font-medium mb-4 inline-block capitalize">
  //         {title}
  //       </h1>
  //       <iframe
  //         className="inline-block relative bottom-7 left-3 pointer-events-none"
  //         src="https://giphy.com/embed/lvjW50Ld1D4qHD0wra"
  //         width="90"
  //         height="90"
  //         frameBorder="0"
  //         allowFullScreen
  //       ></iframe>
  //       <p className="max-md:hidden font-poppins text-sm font-medium tracking-wide  text-darkgreen dark:text-stone-400 max-w-5xl leading-8">
  //         {description}
  //       </p>
  //       <p className="md:hidden font-poppins text-sm font-medium tracking-wide  text-darkgreen dark:text-stone-400 max-w-5xl leading-8">
  //         {truncatedDescription}{" "}
  //         {readMore && (
  //           <ReadMore description={description} setReadMore={setReadMore} />
  //         )}
  //       </p>
  //       <span
  //         onClick={() => {
  //           setReadMore((prev) => !prev);
  //         }}
  //         className="md:hidden font-poppins text-darkgreen dark:text-lime-400 underline cursor-pointer"
  //       >
  //         {readMore ? "Read Less" : "Read More "}
  //       </span>
  //     </div>
  //     <div className="bg-white dark:bg-black  w-full h-full">
  //       <div className="flex flex-col justify-center  items-center py-4 gap-8 ">
  //         <img
  //           ref={tiltRef}
  //           className="max-md:px-4  rounded-xl h-[478px] w-[700px] max-sm:w-[350px] max-sm:h-[250px] max-md:w-[550px] max-md:h-[300px] "
  //           src={updatedImage}
  //           alt="full image"
  //         />
  //         <div className="max-md:hidden overflow-hidden bg-gradient-to-t from-white to-textcolor/50  dark:bg-stone-900 flex justify-between items-center space-x-16 py-6 px-6 w-full">
  //           <ProjectCarousel
  //             carousel={carousel[0]}
  //             key={project.id}
  //             setBigPic={setBigPic}
  //           />
  //           ;
  //           <ProjectCarousel
  //             carousel={carousel[0]}
  //             key={project.id}
  //             setBigPic={setBigPic}
  //           />
  //           ;
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
