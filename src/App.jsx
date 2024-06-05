import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProjectDescCard from "./Components/ProjectDescCard";
import { WhoAmI, Hero, Projects } from "./Sections";
import AppLayout from "./Components/AppLayout";
import Error from "./Components/Error";

import Certifications from "./Components/Cerifications";
import Skills from "./Components/Skills";
import Educations from "./Components/Educations";

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
            </>
          ),
        },

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
