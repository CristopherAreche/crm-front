import { Link } from "react-router-dom";
import {
  RiLogoutCircleRLine,
  RiCloseFill,
  RiMenu3Fill,
  RiUserSettingsLine,
  RiTyphoonFill,
} from "react-icons/ri";
import { useState } from "react";
import ClientDetailSideBar from "./ClientDetailSideBar";
import { RiTeamLine } from "react-icons/ri";
import {
  MdOutlineInventory2,
  MdSell,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import { useSelector } from "react-redux";

function SideBar({ typeSidebar, summary, inventory, clients, sellers }) {
  const [isOpen, setIsOpen] = useState(false);
  const role = useSelector((state) => state.clients.clientRole);
  return (
    <>
      <section
        className={`${
          isOpen ? "left-0" : "-left-full"
        } bg-base-light/80 lg:bg-base-light/40 col-start-1 col-end-3  flex flex-col gap-y-8 justify-between py-4 fixed lg:static  h-screen z-50 transition-all duration-200 lg:left-0 `}
      >
        <section className="flex flex-col gap-y-4">
          <div className="text-3xl flex justify-center items-center gap-x-2 px-12 font-bold tracking-widest border-b border-light/40 pb-4 pt-2">
            <RiTyphoonFill className="text-white" />
            <p className="bg-gradient-to-r from-primary  to-secondary text-end  text-transparent bg-clip-text hover:underline hover:text-light transition-all cursor-pointer">
              CRM
            </p>
          </div>
          <section className="flex flex-col gap-y-1 items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="placeholder"
              className="w-28 h-28 rounded-full "
            />
          </section>

          <h3 className="text-light font-medium text-lg text-center lg:mt-4 mt-1">
            {role === "admin" ? "Nombre del Jefe" : "Nombre del Vendedor"}
          </h3>
          {role === "admin" ? (
            <p className="bg-green-400 text-black p-1 rounded w-fit text-center self-center">
              admin
            </p>
          ) : (
            <p className="bg-orange-400 text-black p-1 rounded w-fit text-center self-center">
              seller
            </p>
          )}
          {typeSidebar === "client-detail" && <ClientDetailSideBar />}
        </section>
        <div className=" h-[100%] flex justify-between flex-col">
          <div className="flex flex-col lg:gap-y-6 gap-y-3">
            <Link
              to="/dashboard"
              className="flex px-12 py-2  active:scale-95 active:bg-light/20 gap-x-6 items-center text-lg text-gray-300 font-medium   cursor-pointer  hover:text-gray-100 transition-all"
            >
              <MdOutlineSpaceDashboard className="text-3xl text-secondary" />{" "}
              Resumen
            </Link>
            {role === "admin" && (
              <>
                <Link
                  to="/dashboard/inventory"
                  className={`  flex px-12 py-2  active:scale-95 active:bg-light/20 gap-x-6 items-center text-lg text-gray-300 font-medium   cursor-pointer  hover:text-gray-100 transition-all`}
                >
                  <MdOutlineInventory2 className="text-3xl text-secondary" />
                  Inventario
                </Link>
                <Link
                  to="/dashboard/sellers"
                  className="flex px-12 py-2  active:scale-95 active:bg-light/20 gap-x-6 items-center text-lg text-gray-300 font-medium   cursor-pointer  hover:text-gray-100 transition-all"
                >
                  <RiTeamLine className="text-3xl text-secondary" /> Vendedores
                </Link>
              </>
            )}
            <Link
              to="/dashboard/all_clients"
              className={`${
                clients && "bg-[purple]"
              } flex px-12 py-2  active:scale-95 active:bg-light/20 gap-x-6 items-center text-lg text-gray-300 font-medium   cursor-pointer  hover:text-gray-100 transition-all`}
            >
              <MdSell className="text-3xl text-secondary" /> Clientes
            </Link>
            <Link className="flex px-12 py-2  active:scale-95 active:bg-light/20 gap-x-6 items-center text-lg text-gray-300 font-medium   cursor-pointer  hover:text-gray-100 transition-all">
              <RiUserSettingsLine className="text-2xl text-secondary" />
              Configuración
            </Link>
          </div>
          <Link
            to="/"
            className="flex px-12 py-2  active:scale-95 active:bg-light/20 gap-x-6 items-center text-lg text-gray-300 font-medium   cursor-pointer  hover:text-gray-100 transition-all"
          >
            <RiLogoutCircleRLine className="text-2xl text-secondary" /> Cerrar
            Sesión
          </Link>
          {typeSidebar === "client-detail" && (
            <>
              <Link
                to="/dashboard"
                className="flex px-12 py-2  active:scale-95 active:bg-light/20 gap-x-6 items-center text-lg text-gray-300 font-medium   cursor-pointer  hover:text-gray-100 transition-all"
              >
                <RiLogoutCircleRLine className="text-2xl text-secondary" />
                Volver
              </Link>
            </>
          )}
        </div>
      </section>
      <button
        className="absolute bottom-6 right-8 text-4xl lg:hidden bg-base-light/60 rounded-full py-1 px-2 box-content z-50 text-light"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <RiCloseFill /> : <RiMenu3Fill />}
      </button>
    </>
  );
}

export default SideBar;
