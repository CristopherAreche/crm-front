import { RiLoader4Fill } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedProductCheckbox } from "../../app/features/productsSlice";
import { getAllProducts } from "../../services/productsServices";
import { cleanProducts } from "../../app/features/productsSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);
  const selectedProduct = useSelector(
    (state) => state.products.productSelected
  );
  const productError = useSelector((state) => state.products.error);
  const [productSelected, setProductSelected] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const bossId = useSelector((state) => state.auth.User.id);

  useEffect(() => {
    if (bossId) {
      dispatch(getAllProducts(bossId));
    }
    return () => dispatch(cleanProducts());
  }, [dispatch, bossId]);

  const handleCheckboxChange = (products) => {
    setProductSelected(products.id);
    dispatch(selectedProductCheckbox(products.id));
  };
  const toggleCheckBox = (productId) => {
    if (productId === productSelected) {
      if (selectedProduct) {
        dispatch(selectedProductCheckbox(!selectedProduct));
      }
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
      <div className="overflow-x-auto lg:min-w-full my-4 lg:h-96 overflow-y-auto pb-4"  >
        <table className="min-w-full text-center text-sm font-regular shadow-md rounded-sm">
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
                      className="h-12 w-12 object-cover rounded-md"
                      src={
                        item.image
                          ? item.image
                          : "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-6_large.png?format=jpg&quality=90&v=1530129477"
                      }
                      alt=""
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  } else if (productError === "failed") {
    return <div>{productError}</div>;
  }
};
export default ProductList;
