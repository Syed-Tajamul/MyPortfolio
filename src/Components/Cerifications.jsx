import { Toaster } from "react-hot-toast";
import { certfications } from "../Constants";
import Certificate from "./Certificate";
export default function Certfications() {
  return (
    <div className="max-md:grid-cols-1 grid lg:grid-cols-3 grid-cols-3 gap-8 mx-auto overflow-hidden relative  md:grid-cols-2">
      <Toaster />
      {certfications.map((certificate) => {
        return <Certificate certificate={certificate} key={certificate.id} />;
      })}
    </div>
  );
}
