import React from "react";
import SideBar from "../../components/sidebars/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import ProductList from "../../components/bossComponents/ProductList";
import MayorStockChart from "../../components/charts/MayorStockChart";
import Header from "../../components/Header";
import {
  resetProducts,
  searchProducts,
} from "../../app/features/productsSlice";
import BottomProduct from "../../components/bossComponents/BottomProduct";

const Inventory = () => {
  const role = useSelector((state) => state.clients.clientRole);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

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
          <div className=" text-white w-full flex flex-col lg:flex-row items-center  lg:justify-between gap-y-2 mb-6">
            <Header
              mainText={"INVENTARIO"}
              data={products}
              onSearch={(filteredProducts) =>
                dispatch(searchProducts(filteredProducts))
              }
              onReset={() => dispatch(resetProducts())}
            />
          </div>

          <div className=" h-[20em] w-full bg-green-200/25 flex justify-center items-center text-black">
            <MayorStockChart />
          </div>
          <div className="h-[20em] w-full  flex justify-center items-center text-white font-normal">
            <ProductList />
          </div>
          <div className=" h-[5em] w-full  flex justify-center items-center text-black">
            <BottomProduct />
          </div>
        </main>
      )}
    </main>
  );
};

export default Inventory;
