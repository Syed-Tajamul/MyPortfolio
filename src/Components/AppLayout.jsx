import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileNav from "./MobileNav";

export default function AppLayout() {
  const navigate = useNavigation();
  console.log(navigate);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <MobileNav />
    </>
  );
}
