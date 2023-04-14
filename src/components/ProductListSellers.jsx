import { RiShoppingBag3Fill, RiLoader4Fill } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../services/productsServices";

const ProductListSellers = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);
  const productError = useSelector((state) => state.products.error);
  const { clientDetail } = useSelector((state) => state.clients);

  useEffect(() => {
    if (productStatus === "idle") {
      if (!products.length) {
        dispatch(getAllProducts());
      }
    }
  }, [productStatus, dispatch, products]);

  if (productStatus === "loading") {
    return (
      <div className="flex justify-center w-full">
        <RiLoader4Fill className="animate-spin text-4xl text-secondary mt-8" />
      </div>
    );
  } else if (productStatus === "succeeded") {
    return (
      <section className="w-auto overflow-x-auto lg:min-w-full  h-96 overflow-y-auto  overflow-hidden mb-4 text-white">
        <div className="flex-col flex h-full w-full">
          <div className="overflow-x-auto ">
            <table className="table-auto w-full text-center text-sm font-regular shadow-md rounded-sm">
              <thead className=" font-medium text-light/75  dark:bg-base-light/30 rounded-md">
                <tr>
                  <th scope="col" className=" px-4 py-4">
                    Nombre
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Cantidad
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Estado
                  </th>

                  <th scope="col" className=" px-6 py-4">
                    Precio venta
                  </th>

                  {clientDetail.vip === true ? (
                    <>
                      <th scope="col" className=" px-6 py-4">
                        Descuento
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Precio con descuento
                      </th>
                    </>
                  ) : null}
                  <th scope="col" className=" px-6 py-4">
                    Categoria
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Imagen
                  </th>
                </tr>
              </thead>
              <tbody className=" dark:border-light dark:bg-base-light/60">
                {Array.isArray(products) &&
                  products?.map((item) => (
                    <tr key={item.id} className="border-b dark:border-base/30">
                      <td className="whitespace-nowrap  px-6 py-4  font-medium text-secondary hover:text-secondary/80 hover:underline transition-all">
                        {item.name}
                      </td>
                      <td className="whitespace-nowrap  px-6 py-4">
                        {item.quantity}
                      </td>
                      <td
                        className={`whitespace-nowrap  px-6 py-4 ${
                          item.enable ? "text-emerald-200" : "text-red-200"
                        }`}
                      >
                        {" "}
                        {item.enable ? "Habilitado" : "Desabilitado"}
                      </td>

                      <td>$ {item.sale_price}</td>

                      {clientDetail.vip === true ? (
                        <>
                          <td>% {item.discount}</td>
                          <td>$ {item.withDiscount}</td>
                        </>
                      ) : null}
                      <td> {item.category}</td>
                      <td className="px-6 py-4 flex justify-center">
                        <img
                          className="h-24 px-2 py-2 "
                          src={item?.image}
                          alt=""
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  } else if (productError === "failed") {
    return <div>{productError}</div>;
  }
};
export default ProductListSellers;
