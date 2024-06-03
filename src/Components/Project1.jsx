import { fakeProjects } from "../Constants";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
export default function Project() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  return (
    <div>
      {fakeProjects.map((project) => {
        return (
          <motion.div
            style={{
              scale: scaleProgress,
              opacity: opacityProgress,
            }}
            key={project.title}
            className="w-[200px] h-[200px] bg-pink-600 rounded-md text-center text-2xl text-green-500 mb-10"
          >
            {project.title}
          </motion.div>
        );
      })}
    </div>
  );
}
