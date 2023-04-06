import spotlight1 from "../assets/svg/Spotlight1.svg";
import spotlight2 from "../assets/svg/Spotlight2.svg";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const SellerLayout = () => {
  return (
    <main className="bg-base h-screen text-white ">
      <SideBar typeSidebar="seller" />

      {/* View Clients */}
      <main className="lg:pl-72 h-[100vh] overflow-y-auto flex flex-col  z-[2] w-[100vw] lg:w-auto">
        <Outlet />
      </main>
      {/* Luces */}
      <img
        src={spotlight1}
        className="fixed top-0 left-0 opacity-80 z-[1]"
        alt="light glow"
      />
      <img
        src={spotlight2}
        className="fixed bottom-0 right-0 opacity-80 z-[1]"
        alt="light glow"
      />
    </main>
  );
};

export default SellerLayout;
