import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProjectDescCard from "./Components/ProjectDescCard";
import { WhoAmI, Hero, Projects, Expertise } from "./Sections";
import AppLayout from "./Components/AppLayout";
import Error from "./Components/Error";
export default function App() {
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
          path: "whatIDo",
          element: <Expertise />,
        },
        {
          path: "whatIDid",
          element: <Projects />,
        },
        {
          path: "project/:name",
          element: <ProjectDescCard />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
// export default function App() {
//   return (
//     <div className="outer-headings">
//       <h1 className="heading">
//         I am,
//         <div className="inner-headings">
//           <span>
//             Syed Tajamul Khursheed
//             <br />
//             A Front End Dev <br />
//             A React js Dev
//             <br />
//           </span>
//         </div>
//       </h1>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div className="flex h-screen justify-center items-center gap-6 bg-gradient-to-br from-amber-300 to-lime-400">
//       <div className="parent w-[350px] h-[300px] bg-indigo-300 rounded-lg relative hover:h-[400px] transition-all duration-300 flex justify-center items-start ">
//         <div className="duration-300 image absolute h-[200px] w-[250px] bg-black top-[20px] rounded-lg  transition-all ">
//           <img
//             src="/assets/images/heroimage.jpg"
//             alt="ist"
//             className="w-full h-full rounded-lg"
//           />
//         </div>
//         <div className="overflow-hidden content transition-all duration-300 text-center px-2 py-4 absolute text-white h-[100px] w-[250px]">
//           <h1 className="text-xl font-bold">Project 1</h1>
//           <p>
//             some content about it some content about it some content about it
//             some content about it some content about it some content about it
//             some content about it some content about it some content about it
//           </p>
//         </div>
//       </div>
//       <div className=" parent w-[350px] h-[300px] bg-blue-300 rounded-lg relative hover:h-[400px] transition-all duration-300 flex justify-center items-start">
//         <div className="duration-300 transition-all  image absolute h-[200px] w-[250px] bg-black top-[20px] rounded-lg">
//           <img
//             src="/assets/images/project6.jpg"
//             alt="ist"
//             className="w-full h-full rounded-lg"
//           />
//         </div>
//         <div className="content transition-all duration-300">
//           <h1>Project 2</h1>
//           <p>
//             some content about it some content about it some content about it
//             some content about it some content about it some content about it
//             some content about it some content about it some content about it
//           </p>
//         </div>
//       </div>
//       <div className="parent w-[350px] h-[300px] bg-green-300 rounded-lg relative hover:h-[400px] transition-all duration-300 flex justify-center items-start">
//         <div className="duration-300 transition-all image absolute h-[200px] w-[250px] bg-black top-[20px] rounded-lg">
//           <img
//             src="/assets/images/project1.jpg"
//             alt="ist"
//             className="w-full h-full rounded-lg"
//           />
//         </div>
//         <div className="content transition-all duration-300">
//           <h1>Project 3</h1>
//           <p>
//             some content about it some content about it some content about it
//             some content about it some content about it some content about it
//             some content about it some content about it some content about it
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
