import { RiShoppingBag3Fill, RiLoader4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedProductCheckbox } from "../../app/features/productsSlice";
import { getAllProducts } from "../../services/productsServices";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);
  const productError = useSelector((state) => state.products.error);
  const [productSelected, setProductSelected] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (productStatus === "idle") {
      if (!products.length) {
        dispatch(getAllProducts());
      }
    }
  }, [productStatus, dispatch, products]);

  const handleCheckboxChange = (products) => {
    setProductSelected(products.id);
    dispatch(selectedProductCheckbox(products.id));
  };
  const toggleCheckBox = (productId) => {
    if (productId === productSelected) {
      setIsSelected(!isSelected);
    }
  };

  if (productStatus === "loading") {
    return (
      <div className="flex justify-center w-full">
        <RiLoader4Fill className="animate-spin text-4xl text-secondary mt-8" />
      </div>
    );
  } else if (productStatus === "succeeded") {
    return (
      //   <header className="overflow-x-auto lg:min-w-full mt-4 h-96 overflow-y-auto">
      //     <h3 className="flex justify-between w-screen lg:w-full px-8 py-4   bg-base-light/30 rounded-tr-md rounded-tl-md  ">
      //       <RiShoppingBag3Fill className="text-2xl" />
      //       Tus productos
      //     </h3>
      //   </header>
      <div className="flex-col flex h-full w-full">
        <div className="overflow-x-auto ">
          <table className="table-auto w-full text-center text-sm font-regular shadow-md rounded-sm">
            <thead className=" font-medium text-light/75  dark:bg-base-light/30 rounded-md">
              <tr>
                <th scope="col" className=" px-6 py-4">
                  CB
                </th>
                <th scope="col" className=" px-6 py-4">
                  Nombre
                </th>
                <th scope="col" className=" px-6 py-4">
                  Cantidad
                </th>
                <th scope="col" className=" px-6 py-4">
                  Estado
                </th>
                <th scope="col" className=" px-6 py-4">
                  Precio costo
                </th>
                <th scope="col" className=" px-6 py-4">
                  Precio venta
                </th>
                <th scope="col" className=" px-6 py-4">
                  Descuento
                </th>
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
                    <td className="whitespace-nowrap  px-6 py-4 font-medium">
                      <input
                        id={`checkbox-${item.id}`}
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        checked={item.id === productSelected && isSelected}
                        onChange={() => {
                          handleCheckboxChange(item);

                          toggleCheckBox(productSelected);
                        }}
                      />
                    </td>
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
                    <td>${item.cost_price}</td>
                    <td>${item.sale_price}</td>
                    <td>%{item.discount}</td>
                    <td>{item.category}</td>
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
      // </section>
    );
  } else if (productError === "failed") {
    return <div>{productError}</div>;
  }
};
export default ProductList;
