import { education } from "../Constants";
import Expertise from "../Sections/Expertise";
import Education from "./Education";

export default function Educations() {
  return (
    <Expertise title="Education" subtitle="Milestones in My Academic Career">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
        {education.map((el) => {
          console.log(el);
          return <Education key={el.title} el={el} />;
        })}
      </div>
    </Expertise>
  );
}
