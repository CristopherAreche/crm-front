import { RiLoader4Fill } from "react-icons/ri";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../services/productsServices";
import ProductsCards from "./ProductsCards";
import { cleanProducts } from "../app/features/productsSlice";

const ProductListSellers = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);
  const productError = useSelector((state) => state.products.error);
  const { bossId } = useSelector((state) => state.auth.User);

  useEffect(() => {
    if (productStatus === "idle") {
      if (!products.length) {
        dispatch(getAllProducts(bossId));
      }
    }
    return () => dispatch(cleanProducts());
  }, [dispatch]);

  if (productStatus === "loading") {
    return (
      <div className="flex justify-center w-full">
        <RiLoader4Fill className="animate-spin text-4xl text-secondary mt-8" />
      </div>
    );
  } else if (productStatus === "succeeded") {
    return (
      <section className="w-auto  overflow-x-auto  h-96 overflow-y-auto  overflow-hidden mb-4 text-white">
        <div className="flex flex-col gap-2">
          {products?.map((item) => (
            <ProductsCards key={item.id} item={item} />
          ))}
        </div>
      </section>
    );
  } else if (productError === "failed") {
    return <div>{productError}</div>;
  }
};
export default ProductListSellers;
