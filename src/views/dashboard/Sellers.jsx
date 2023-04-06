import React from "react";
import SideBar from "../../components/sidebars/SideBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import BossFilterTop from "../../components/bossComponents/BossFilterTop";
import SellersList from "../../components/bossComponents/SellersList";

const Sellers = () => {
  const role = useSelector((state) => state.clients.clientRole);
  return (
    <main className="bg-base h-screen text-white grid grid-cols-10">
      <SideBar />
      {role !== "admin" ? (
        <div className="text-white">
          Inventory --- aqui va el inventario desde la vista del Vendedor.
        </div>
      ) : (
        <main className=" px-6 w-full py-[1em] col-start-3 col-end-11 h-[100vh] overflow-y-auto z-40 flex flex-col gap-2 lg:w-auto justify-center items-center">
          <Outlet />
          <BossFilterTop />
          <SellersList />
          <div className=" h-[5em] w-full bg-green-400 flex justify-center items-center text-black">
            Agregar | Eliminar
          </div>
        </main>
      )}
    </main>
  );
};

export default Sellers;
