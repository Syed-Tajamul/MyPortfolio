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
}
