import React, { useCallback, useEffect } from "react";
import SideBar from "../../components/sidebars/SideBar";
import { useDispatch, useSelector } from "react-redux";
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
import LightsSvg from "../../components/LightsSvg";

const Inventory = () => {
  const role = useSelector((state) => state.auth.User.role);
  const { products } = useSelector((state) => state.products);
  const copyProducts = useSelector((state) => state.products.copyProducts);
  const { id, bossId } = useSelector((state) => state.auth.User);

  const dispatch = useDispatch();

  const fetchData = useCallback(() => {
    if (role === "admin") {
      dispatch(getAllProducts(id));
    } else {
      dispatch(getAllProducts(bossId));
    }
  }, [dispatch, role, id, bossId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <main className=" h-screen  text-white ">
      {role !== "admin" ? (
        <div className="  flex flex-row  gap-y-2 ">
          {/* Inventory --- aqui va el inventario desde la vista del Vendedor. */}
          <section className="flex flex-col gap-y-2 w-full">
            <h4 className="text-2xl text-light font-medium flex  mb-2 p-2">
              <MdOutlineInventory2 className="text-4xl" />
              Inventario
            </h4>
            <div className="flex gap-x-8 mt-2 ">
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
        <main className="bg-base h-screen text-white">
          <SideBar />

          <section className="lg:pl-72 h-[100vh] overflow-y-auto flex flex-col w-[100vw] lg:w-auto">
            <section className="py-6 px-12 z-20  ">
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
              <section className="flex flex-col">
                <FilterTopProducts products={copyProducts} />

                <ProductList />

                <BottomProduct />

                <MayorStockChart products={products} />
              </section>
            </section>
          </section>
          <LightsSvg />
        </main>
      )}


    </main>
  );
};

export default Inventory;
