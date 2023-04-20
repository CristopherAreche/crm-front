/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate } from "react-router-dom";
import {
  RiLogoutCircleRLine,
  RiCloseFill,
  RiMenu3Fill,
  RiUserSettingsLine,
  RiTyphoonFill,
  RiHandCoinLine,
} from "react-icons/ri";
import { useState } from "react";
import ClientDetailSideBar from "./ClientDetailSideBar";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineInventory2, MdOutlineSpaceDashboard } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { postUserInfo } from "../../services/authServices";
// import { useAuth0 } from "@auth0/auth0-react";
import Cookies from "js-cookie";
import { logoutUser } from "../../app/features/authSlice";

function SideBar({ typeSidebar, summary, inventory, clients, sellers }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const user = useSelector((state) => state.auth.User);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleBossRegister = () => {
  //   if (isAuthenticated && user) {
  //     const userInfo = {
  //       email: user.email,
  //       name: user.name,
  //       image: user.picture,
  //       username: user.nickname,
  //       password: "12345",
  //     };
  //     dispatch(postUserInfo(userInfo));
  //   }
  // };

  const handleLinkClick = (linkName) => setSelected(linkName);

  const handleLogout = () => {
    Cookies.remove("myToken");
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <>
      <section
        className={`${
          isOpen ? "left-0" : "-left-full"
        }  bg-base-light/80 lg:bg-base-light/40 w-72 lg:w-72  flex flex-col  justify-between py-4 fixed   h-screen z-50 transition-all duration-200 lg:left-0 overflow-y-auto`}
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
              {user.role === "admin" ? (
                <img
                  src={
                    user.logo
                      ? user.logo
                      : "https://cdn-icons-png.flaticon.com/512/219/219983.png"
                  }
                  alt="placeholder"
                  className="w-32 h-32 object-cover rounded-full "
                />
              ) : (
                <img
                  src={
                    user.image
                      ? user.image
                      : "https://cdn-icons-png.flaticon.com/512/219/219983.png"
                  }
                  alt="placeholder"
                  className="w-28 h-28 rounded-full object-cover"
                />
              )}
              <p
                className={`${
                  user.role === "admin" ? "bg-orange-400" : "bg-green-400"
                } text-black absolute rounded-full px-2 bottom-0 right-0`}
              >
                {user.role === "admin" ? "admin" : "seller"}
              </p>
            </div>
            <h3 className="text-light font-medium text-lg text-center ">
              {user.role === "admin" ? user.name : user.name}
            </h3>
          </section>
          {typeSidebar === "client-detail" && <ClientDetailSideBar />}
        </section>
        <div className="flex flex-col justify-between h-full">
          {user.enable && (<div className="flex flex-col gap-y-4">
            <Link
              to="/dashboard"
              className={`flex px-12 py-2  active:scale-95 active:bg-light/20 gap-x-6 items-center text-lg text-gray-300 font-medium   cursor-pointer  hover:text-gray-100 transition-all ${
                selected === "summary" && "bg-base"
              }`}
              onClick={() => handleLinkClick("summary")}
            >
              <MdOutlineSpaceDashboard className="text-3xl text-secondary" />{" "}
              Resumen
            </Link>
            {user.role === "admin" &&(
              <>
                <Link
                  to="/dashboard/inventory"
                  className={`  flex px-12 py-2  active:scale-95 active:bg-light/20 gap-x-6 items-center text-lg text-gray-300 font-medium   cursor-pointer  hover:text-gray-100 transition-all
                  ${selected === "inventory" && "bg-base"}`}
                  onClick={() => handleLinkClick("inventory")}
                >
                  <MdOutlineInventory2 className="text-3xl text-secondary" />
                  Inventario
                </Link>
                <Link
                  to="/dashboard/sellers"
                  className={`flex px-12 py-2  active:scale-95 active:bg-light/20 gap-x-6 items-center text-lg text-gray-300 font-medium   cursor-pointer  hover:text-gray-100 transition-all ${
                    selected === "seller" && "bg-base"
                  }`}
                  onClick={() => handleLinkClick("seller")}
                >
                  <RiTeamLine className="text-3xl text-secondary" /> Vendedores
                </Link>
              </>
            )}
            <Link
              to="/dashboard/all_clients"
              className={` flex px-12 py-2  active:scale-95 active:bg-light/20 gap-x-6 items-center text-lg text-gray-300 font-medium   cursor-pointer  hover:text-gray-100 transition-all
              ${selected === "clients" && "bg-base"}`}
              onClick={() => handleLinkClick("clients")}
            >
              <RiHandCoinLine className="text-3xl text-secondary" /> Clientes
            </Link>
          </div>)}
          <div>
            {/* <button
              className="flex px-12 py-2  active:scale-95 active:bg-light/20 gap-x-6 items-center text-lg text-gray-300 font-medium   cursor-pointer  hover:text-gray-100 transition-all"
              onClick={() => handleBossRegister()}
            >
              Enviar info
            </button> */}
            <Link
              to="/dashboard/perfil"
              className={`flex px-12 py-2  active:scale-95 active:bg-light/20 gap-x-6 items-center text-lg text-gray-300 font-medium   cursor-pointer  hover:text-gray-100 transition-all
              ${selected === "settings" && "bg-base"}`}
              onClick={() => handleLinkClick("settings")}
            >
              <RiUserSettingsLine className="text-2xl text-secondary" />
              Configuración
            </Link>

            <button
              onClick={() => handleLogout()}
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
