import { Link } from "react-router-dom";
import {
  RiBarChart2Line,
  RiTeamLine,
  RiLogoutCircleRLine,
  RiCloseFill,
  RiMenu3Fill,
  // RiMenu3Fill,
  // RiCloseFill,
} from "react-icons/ri";
import { useState } from "react";

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
    <>
      <section
        className={`${
          isOpen ? "left-0" : "-left-full"
        } col-span-2 bg-base-light/70 lg:bg-base-light/40 w-68 lg:w-80  flex flex-col gap-y-8 justify-between py-4 px-12 fixed lg:static  h-full z-50 transition-all duration-200 lg:left-0 border-r border-light/40`}
      >
        <section className="flex flex-col gap-y-4">
          <h1 className="text-4xl font-bold tracking-widest text-center border-b border-light/40 pb-8">
            LOGO
          </h1>
          <Link
            to="/vendedor_cliente"
            className="flex gap-x-4 items-center text-xl text-gray-300 font-medium py-2 rounded-lg cursor-pointer  px-4 hover:bg-base/20 hover:text-gray-100 transition-all"
          >
            <RiBarChart2Line className="text-4xl" /> Resumen
          </Link>
          <Link
            to="/vendedor_cliente"
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
      <button
        className="absolute bottom-6 right-4 text-4xl lg:hidden hover:bg-base-light/60 rounded-full py-1 px-2 box-content z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <RiCloseFill /> : <RiMenu3Fill />}
      </button>
    </>
  );
}

export default SideBar;
