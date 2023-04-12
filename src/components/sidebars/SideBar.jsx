/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import {
  RiLogoutCircleRLine,
  RiCloseFill,
  RiMenu3Fill,
  RiUserSettingsLine,
  RiTyphoonFill,
  RiHandCoinLine,
} from "react-icons/ri";
import { useState, useEffect } from "react";
import ClientDetailSideBar from "./ClientDetailSideBar";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineInventory2, MdOutlineSpaceDashboard } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postUserInfo } from "../../services/authServices";
import { useAuth0 } from "@auth0/auth0-react";
import { getSeller } from "../../services/sellersServices";
import { getBossById } from "../../app/features/bossSlice";

const sellerId = '7155a9d8-acff-4cf9-93fd-385830b9bcae'


function SideBar({ typeSidebar, summary, inventory, clients, sellers }) {
  const [isOpen, setIsOpen] = useState(false);
  const role = useSelector((state) => state.clients.clientRole);
  const {seller} = useSelector((state) => state.sellers)
  const {boss} = useSelector((state) => state.boss)
  const dispatch = useDispatch();
  const { isAuthenticated, user, logout } = useAuth0();

  const handleBossRegister = () => {
    if (isAuthenticated && user) {
      const userInfo = {
        email: user.email,
        name: user.name,
        logo: user.picture,
        username: user.nickname,
        password: "12345",
      };
      dispatch(postUserInfo(userInfo));
    }
  };

  useEffect(() => {
    if(!seller) dispatch(getSeller(sellerId))
    dispatch(getBossById())
  }, [])

  return (
    <>
      <section
        className={`${
          isOpen ? "left-0" : "-left-full"
        }  bg-base-light/80 lg:bg-base-light/40 w-72 lg:w-72  flex flex-col  justify-between py-4 fixed   h-full z-50 transition-all duration-200 lg:left-0 overflow-y-auto`}
      >
        <section className="flex flex-col gap-y-2">
          <div className="text-3xl flex justify-center items-center gap-x-2 px-12 font-bold tracking-widest border-b border-light/40 pb-4 pt-2">
            <RiTyphoonFill className="text-white" />
            <p className="bg-gradient-to-r from-primary  to-secondary text-end  text-transparent bg-clip-text hover:underline hover:text-light transition-all cursor-pointer">
              CRM
            </p>
          </div>
          <section className="flex flex-col gap-y-1 items-center mb-4">
            <div className="relative">
              {
                role === 'admin'
                ? <img
                src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                alt="placeholder"
                className="w-28 h-28 rounded-full "
              />
              : <img
                src={seller.image ? seller.image : "https://cdn-icons-png.flaticon.com/512/219/219983.png"}
                alt="placeholder"
                className="w-28 h-28 rounded-full "
              />
              }
              <p className="bg-green-400 text-black absolute rounded-full px-2 bottom-0 right-0">
                {role === "admin" ? "admin" : "seller"}
              </p>
            </div>
            <h3 className="text-light font-medium text-lg text-center ">
              {role === "admin" ? boss.name : seller.name}
            </h3>
          </section>
          {typeSidebar === "client-detail" && <ClientDetailSideBar />}
        </section>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-y-4">
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
              <RiHandCoinLine className="text-3xl text-secondary" /> Clientes
            </Link>
          </div>
          <div>
            {/* <button
              className="flex px-12 py-2  active:scale-95 active:bg-light/20 gap-x-6 items-center text-lg text-gray-300 font-medium   cursor-pointer  hover:text-gray-100 transition-all"
              onClick={() => handleBossRegister()}
            >
              Enviar info
            </button> */}
            <Link
              to="/dashboard/perfil"
              className="flex px-12 py-2  active:scale-95 active:bg-light/20 gap-x-6 items-center text-lg text-gray-300 font-medium   cursor-pointer  hover:text-gray-100 transition-all"
            >
              <RiUserSettingsLine className="text-2xl text-secondary" />
              Configuración
            </Link>

            <button
              onClick={() => logout()}
              className="flex px-12 py-2  active:scale-95 active:bg-light/20 gap-x-6 items-center text-lg text-gray-300 font-medium   cursor-pointer  hover:text-gray-100 transition-all"
            >
              <RiLogoutCircleRLine className="text-2xl text-secondary" /> Cerrar
              Sesión
            </button>
          </div>
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
