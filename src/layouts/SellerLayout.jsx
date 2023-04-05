import spotlight1 from "../assets/svg/Spotlight1.svg";
import spotlight2 from "../assets/svg/Spotlight2.svg";
import { Outlet } from 'react-router-dom'
import SideBar from "../components/sideBar";

const SellerLayout = () => {
  return (
    <main className="bg-base h-screen text-white grid grid-cols-8">
        <SideBar typeSidebar="seller-clients" />

        {/* View Clients */}
        <main className="col-span-6 h-[100vh] overflow-y-auto z-40 flex flex-col   w-[100vw] lg:w-auto">
            <Outlet />
        </main>
        {/* Luces */}
        <img
        src={spotlight1}
        className="absolute top-0 left-0 opacity-80 z-[1]"
        alt="light glow"
        />
        <img
        src={spotlight2}
        className="absolute bottom-0 right-0 opacity-80 z-[1]"
        alt="light glow"
        />
  </main>
  )
}

export default SellerLayout