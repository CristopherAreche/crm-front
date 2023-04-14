import React, { useEffect } from "react";
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
import { getAllProducts } from "../../services/productsServices";
import FilterTopProducts from "../../components/bossComponents/FilterTopProducts";
import SearchBar from "../../components/SearchBar";
import ProductListSellers from "../../components/ProductListSellers";
import { MdOutlineInventory2 } from "react-icons/md";
const Inventory = () => {
  const role = useSelector((state) => state.clients.clientRole);
  const products = useSelector((state) => state.products.products);
  const copyProducts = useSelector((state) => state.products.copyProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <main className="bg-base h-screen text-white grid grid-cols-10">
      {role !== "admin" ? (
        <div className="  flex flex-row  gap-y-2 ">
          {/* Inventory --- aqui va el inventario desde la vista del Vendedor. */}
          <h4 className="text-2xl text-light font-medium flex  mb-2 p-2">
            <MdOutlineInventory2 className="text-4xl" />
            Inventario
          </h4>
          <section className="flex flex-col gap-y-2 ">
            <div className="flex gap-x-8 mt-2">
              <SearchBar
                data={products}
                onSearch={(filteredProducts) =>
                  dispatch(searchProducts(filteredProducts))
                }
                onReset={() => dispatch(resetProducts())}
              />
            </div>
            <FilterTopProducts products={copyProducts} />

            <ProductListSellers />
          </section>
        </div>
      ) : (
        <main className=" px-6 w-full py-[1em] col-start-3 col-end-11 h-[100vh] overflow-y-auto z-40 flex flex-col gap-2 lg:w-auto justify-center items-center">
          <SideBar />
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

          <div className=" h-[20em] w-full flex justify-center items-center text-black">
            <MayorStockChart products={products} />
          </div>
          <div className="h-[20em] w-full  flex justify-center items-center text-white font-normal">
            <FilterTopProducts products={copyProducts} />
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
