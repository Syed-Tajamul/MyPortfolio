import { useEffect, useState } from "react";
// import {
//   FaLaptopCode,
//   DiResponsive,
//   FaCss3Alt,
//   FaTools,
//   FaReact,
//   FaGithub,
//   GrDocumentPerformance,
//   GrPerformance,
//   SiNetlify,
// } from "../../public/assets/icons/icons";

import ExpertizeBox from "../Components/ExpertizeBox";
import Skills from "../Components/Skills";
import Certfications from "../Components/Cerifications";
import Education from "../Components/Education";
import ExpertizeNavigation from "../Components/ExpertizeNavigation";

export default function Expertise() {
  const [skills, setSkills] = useState(true);
  const [certificate, setCertificate] = useState(false);
  const [education, setEducation] = useState(false);
  //below useEffect hook is a gem,what it does is when this page will render it will
  //always start or render from the top using window.scrollTo() method

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //below useEffect is used for vanillaTilt js

  // function handleShow() {
  //   setHide(true);
  // }
  // function handleMouseOut() {
  //   setHide(false);
  // }
  // Run once after component mount

  return (
    <div loading="lazy">
      <div className="max-md:px-4 max-md:pt-20 spacing  bg-stone-900 w-full h-1/6 text-white  ">
        <h1 className="font-montserrat max-md:text-4xl  bg-gradient-to-b from-white to-lime-400 text-transparent bg-clip-text w-full text-5xl font-semibold inline-block">
          Expertise & Proficiencies{" "}
          <iframe
            className="max-md:h-14 max-md:w-12 inline-block relative bottom-1 left-2 pointer-events-none"
            src="https://giphy.com/embed/C11mwFqOnigdvapIbO"
            width="70"
            height="70"
          ></iframe>
        </h1>

        <p className="font-poppins w-full text-stone-400 text-normal font-semibold">
          A Glimpse into My Capabilities
        </p>
      </div>
      <ExpertizeBox>
        <ExpertizeNavigation
          skills={skills}
          certificate={certificate}
          education={education}
          setSkills={setSkills}
          setCertificate={setCertificate}
          setEducation={setEducation}
        />
        {skills && <Skills skills={skills} />}
        {certificate && <Certfications certificate={certificate} />}
        {education && <Education education={education} />}
      </ExpertizeBox>
    </div>
  );
}
