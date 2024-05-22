import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const { id, title, image } = project;
  return (
    <Link to={`/project/${title}`}>
      <div className="project-div hover:grayscale " loading="lazy">
        <div className="h-5/6 ">
          <img
            src={image}
            alt="project1"
            className="w-full h-full rounded-lg "
          />
        </div>

        <h1 className="font-montserrat text-center  font-bold text-base uppercase text-stone-700">
          {title}
        </h1>
      </div>
    </Link>
  );
}
