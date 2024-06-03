import { Toaster } from "react-hot-toast";
import { certfications } from "../Constants";
import Certificate from "./Certificate";
import Expertise from "../Sections/Expertise";
export default function Certifications() {
  return (
    <Expertise
      title="Certifications"
      subtitle="Official Recognition of Expertise"
    >
      <div className="max-md:grid-cols-1 grid lg:grid-cols-3 grid-cols-2 gap-8 mx-auto  relative  md:grid-cols-2">
        <Toaster />
        {certfications.map((certificate) => {
          return <Certificate certificate={certificate} key={certificate.id} />;
        })}
      </div>
    </Expertise>
  );
}
