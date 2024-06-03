import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProjectDescCard from "./Components/ProjectDescCard";
import { WhoAmI, Hero, Projects } from "./Sections";
import AppLayout from "./Components/AppLayout";
import Error from "./Components/Error";

import Certifications from "./Components/Cerifications";
import Skills from "./Components/Skills";
import Educations from "./Components/Educations";

export default function App() {
  // const [skills, setSkills] = useState(false);
  // const [certificate, setCertificate] = useState(false);
  // const [education, setEducation] = useState(false);
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: (
            <>
              <Hero />
              <WhoAmI />

              {/* <Expertise />
              <Projects /> */}
            </>
          ),
        },
        // {
        //   path: "whoAmI",
        //   element: <WhoAmI />,
        // },
        {
          path: "skills",
          element: <Skills />,
        },
        {
          path: "whatIDid",
          element: <Projects />,
        },
        {
          path: "project/:name",
          element: <ProjectDescCard />,
        },
        {
          path: "education",
          element: <Educations />,
        },
        {
          path: "certifications",
          element: <Certifications />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

// Example usage

// // export default function App() {
// //   return (
// //     <div className="outer-headings">
// //       <h1 className="heading">
// //         I am,
// //         <div className="inner-headings">
// //           <span>
// //             Syed Tajamul Khursheed
// //             <br />
// //             A Front End Dev <br />
// //             A React js Dev
// //             <br />
// //           </span>
// //         </div>
// //       </h1>
// //     </div>
// //   );
// // }

// // export default function App() {
// //   return (
// //     <div className="flex h-screen justify-center items-center gap-6 bg-gradient-to-br from-amber-300 to-lime-400">
// //       <div className="parent w-[350px] h-[300px] bg-indigo-300 rounded-lg relative hover:h-[400px] transition-all duration-300 flex justify-center items-start ">
// //         <div className="duration-300 image absolute h-[200px] w-[250px] bg-black top-[20px] rounded-lg  transition-all ">
// //           <img
// //             src="/assets/images/heroimage.jpg"
// //             alt="ist"
// //             className="w-full h-full rounded-lg"
// //           />
// //         </div>
// //         <div className="overflow-hidden content transition-all duration-300 text-center px-2 py-4 absolute text-white h-[100px] w-[250px]">
// //           <h1 className="text-xl font-bold">Project 1</h1>
// //           <p>
// //             some content about it some content about it some content about it
// //             some content about it some content about it some content about it
// //             some content about it some content about it some content about it
// //           </p>
// //         </div>
// //       </div>
// //       <div className=" parent w-[350px] h-[300px] bg-blue-300 rounded-lg relative hover:h-[400px] transition-all duration-300 flex justify-center items-start">
// //         <div className="duration-300 transition-all  image absolute h-[200px] w-[250px] bg-black top-[20px] rounded-lg">
// //           <img
// //             src="/assets/images/project6.jpg"
// //             alt="ist"
// //             className="w-full h-full rounded-lg"
// //           />
// //         </div>
// //         <div className="content transition-all duration-300">
// //           <h1>Project 2</h1>
// //           <p>
// //             some content about it some content about it some content about it
// //             some content about it some content about it some content about it
// //             some content about it some content about it some content about it
// //           </p>
// //         </div>
// //       </div>
// //       <div className="parent w-[350px] h-[300px] bg-green-300 rounded-lg relative hover:h-[400px] transition-all duration-300 flex justify-center items-start">
// //         <div className="duration-300 transition-all image absolute h-[200px] w-[250px] bg-black top-[20px] rounded-lg">
// //           <img
// //             src="/assets/images/project1.jpg"
// //             alt="ist"
// //             className="w-full h-full rounded-lg"
// //           />
// //         </div>
// //         <div className="content transition-all duration-300">
// //           <h1>Project 3</h1>
// //           <p>
// //             some content about it some content about it some content about it
// //             some content about it some content about it some content about it
// //             some content about it some content about it some content about it
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// export default function App() {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start center", "start start"],
//   });
//   const sm = useTransform(scrollYProgress, [0, 1], [1, 650]);
//   return (
//     <div className=" h-[200vh] bg-yellow-400">
//       <div className=" bg-black w-full h-[350px] spacing">
//         <h1 className="pt-[7rem] font-poppis text-3xl text-white">
//           Syed Tawseef
//         </h1>
//         <p className="mt-[7rem] font-poppins text-base text-white">
//           some content goes like here
//         </p>
//       </div>
//       <motion.div
//         ref={container}
//         style={{
//           y: sm,
//         }}
//         className="w-full h-full bg-gradient-to-t from-slate-300 to-lime-400"
//       ></motion.div>
//     </div>
//   );
// }
