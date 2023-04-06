import { Link } from "react-router-dom";
import {
  RiLogoutCircleRLine,
  RiCloseFill,
  RiMenu3Fill,
  RiUserSettingsLine,
  RiTyphoonFill,
} from "react-icons/ri";
import { useState } from "react";
import ClientSideBarDetail from "./ClientSideBarDetail";
import { useAuth0 } from "@auth0/auth0-react";
import SellerSideBar from "./SellerSideBar";
import BossSideBar from "./BossSideBar";

function SideBar({ typeSidebar }) {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth0();
  return (
    <>
      <section
        className={`${
          isOpen ? "left-0" : "-left-full"
        } col-span-2 bg-base-light/80 lg:bg-base-light/40 w-72 lg:w-72  flex flex-col gap-y-8 justify-between py-4 fixed   h-full z-50 transition-all duration-200 lg:left-0 overflow-y-auto`}
      >
        <section className="flex flex-col gap-y-4 ">
          <h1 className="text-3xl flex items-center  gap-x-2 px-12 font-bold tracking-widest border-b border-light/40 pb-4 pt-2">
            <RiTyphoonFill className="text-white" />{" "}
            <span className="bg-gradient-to-r from-primary  to-secondary text-end  text-transparent bg-clip-text hover:underline hover:text-light transition-all cursor-pointer">
              CRM
            </span>
          </h1>
          {/* Contenido Dinamico */}
          {typeSidebar === "seller" && <SellerSideBar />}
          {typeSidebar === "client-detail" && <ClientSideBarDetail />}
          {typeSidebar === "boss" && <BossSideBar />}
        </section>
        <div className="flex flex-col">
          {typeSidebar === "seller" && (
            <>
              <Link className="flex items-center gap-x-6 py-2  cursor-pointer text-gray-300 font-medium px-12 text-lg hover:bg-light/20 hover:text-gray-100 transition-all mb-4">
                <RiUserSettingsLine className="text-2xl text-secondary" />
                Configuración
              </Link>
              <button
                onClick={() => logout()}
                className="flex items-center gap-x-6 py-2  cursor-pointer text-gray-300 font-medium px-12 text-lg hover:bg-light/20 hover:text-gray-100 transition-all"
              >
                <RiLogoutCircleRLine className="text-2xl text-secondary" />{" "}
                Cerrar Sesión
              </button>
            </>
          )}
          {typeSidebar === "boss" && (
            <>
              <Link className="flex items-center gap-x-6 py-2  cursor-pointer text-gray-300 font-medium px-12 text-lg hover:bg-light/20 hover:text-gray-100 transition-all mb-4">
                <RiUserSettingsLine className="text-2xl text-secondary" />
                Configuración
              </Link>
              <button
                onClick={() => logout()}
                className="flex items-center gap-x-6 py-2  cursor-pointer text-gray-300 font-medium px-12 text-lg hover:bg-light/20 hover:text-gray-100 transition-all "
              >
                <RiLogoutCircleRLine className="text-2xl text-secondary" />{" "}
                Cerrar Sesión
              </button>
            </>
          )}
          {typeSidebar === "client-detail" && (
            <>
              <Link
                to="/vendedor/clientes"
                className="flex items-center gap-x-6 py-2  cursor-pointer text-gray-300 font-medium px-12 text-lg hover:bg-light/20 hover:text-gray-100 transition-all"
              >
                <RiLogoutCircleRLine className="text-2xl text-secondary" />{" "}
                Volver atrás
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
