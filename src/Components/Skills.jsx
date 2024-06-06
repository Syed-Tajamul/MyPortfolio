import { skills } from "../Constants";
import Skill from "./Skill";
import { Toaster } from "react-hot-toast";
import Expertise from "../Sections/Expertise";

export default function Skills() {
  return (
    <Expertise
      title="Proficiencies"
      subtitle="Showcasing My Core Strengths"
      // giphy="https://giphy.com/embed/C11mwFqOnigdvapIbO"
      // w="70"
      // h="70"
      // mobileHeight="12"
      // mobileWidth="12"
    >
      <div className="container-card-div ">
        <Toaster />
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.id} />
        ))}
      </div>
    </Expertise>
  );
}
