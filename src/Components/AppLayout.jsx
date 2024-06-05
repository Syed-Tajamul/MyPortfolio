import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileNav from "./MobileNav";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <MobileNav />
    </>
  );
}
