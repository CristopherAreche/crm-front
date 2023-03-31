import { Link } from "react-router-dom";
import {
  RiBarChart2Line,
  RiTeamLine,
  RiLogoutCircleRLine,
  // RiMenu3Fill,
  // RiCloseFill,
} from "react-icons/ri";
import { useState } from "react";
// import spotlight1 from "../assets/svg/Spotlight1.svg";
// import spotlight2 from "../assets/svg/Spotlight2.svg";

function SideBar({
  clients,
  routeClients,
  salesMans,
  routeSalesMans,
  inventario,
  routeInventario,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      className={`${
        isOpen ? "left-0" : "-left-full"
      } bg-base-light/40 w-68 lg:w-full  flex flex-col gap-y-8 justify-between py-4 px-12 lg:static h-full z-40 transition-all duration-200 lg:left-0 border-r border-light/40 `}
    >
      <section className="flex flex-col gap-y-10">
        <h1 className="mt-6 text-4xl font-bold tracking-widest text-center border-b border-light/40 pb-8">
          LOGO
        </h1>
        <Link
          to="#"
          className="flex gap-x-4 items-center text-xl text-gray-300 font-medium py-2 rounded-lg cursor-pointer  px-4 hover:bg-base/20 hover:text-gray-100 transition-all"
        >
          <RiBarChart2Line className="text-4xl" /> Resumen
        </Link>
        <Link
          to="#"
          className="flex gap-x-4 items-center text-xl text-gray-300 font-medium py-2 rounded-lg cursor-pointer  px-4 hover:bg-base/20  hover:text-gray-100 transition-all"
        >
          <RiTeamLine className="text-4xl" /> Clientes
        </Link>
      </section>
      <div>
        <Link
          to="/"
          className="flex items-center gap-x-2 py-2 rounded-lg cursor-pointer text-gray-300 px-4 text-lg hover:bg-base/20 hover:text-gray-100 transition-all"
        >
          <RiLogoutCircleRLine className="text-2xl" /> Cerrar Sesion
        </Link>
      </div>
    </section>
  );
}

export default SideBar;
