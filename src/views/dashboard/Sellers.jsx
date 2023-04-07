import React from "react";
import SideBar from "../../components/sidebars/SideBar";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import BossFilterTop from "../../components/bossComponents/BossFilterTop";
import SellersList from "../../components/bossComponents/SellersList";
import BossFilterBottom from "../../components/bossComponents/BossFilterBottom";
import { resetSellers, searchSellers } from "../../app/features/sellerSlice";
import Header from "../../components/Header";

const Sellers = () => {
  const role = useSelector((state) => state.clients.clientRole);
  const dispatch = useDispatch();
  const sellers = useSelector((state) => state.sellers.sellers);
  return (
    <main className="bg-base h-screen text-white grid grid-cols-10 ">
      <SideBar />
      {role !== "admin" ? (
        <div className="text-white">
          Inventory --- aqui va el inventario desde la vista del Vendedor.
        </div>
      ) : (
        <main className=" px-6 w-full py-[1em] col-start-3 col-end-11 h-[100vh] overflow-y-auto z-40 flex flex-col gap-2 lg:w-auto justify-start items-center">
          <Outlet />
          <Header
            mainText={"VENDEDORES"}
            data={sellers}
            onSearch={(filteredSellers) =>
              dispatch(searchSellers(filteredSellers))
            }
            onReset={() => dispatch(resetSellers())}
          />
          <BossFilterTop />
          <SellersList />
          <BossFilterBottom />
        </main>
      )}
    </main>
  );
};

export default Sellers;
