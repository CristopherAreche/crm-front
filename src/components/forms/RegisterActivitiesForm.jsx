import React, { useState } from "react";
import { createActivity } from "../../services/activityService";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const RegisterActivitiesModal = ({ onClose }) => {
  const [method, setMethod] = useState("Llamada");
  const [state, setState] = useState("Pendiente");
  const [subject, setSubject] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const [quantity_sale, setQuantity_sale] = useState("");
  const [productData, setProductData] = useState({
    productId: "",
    price_sale: "",
    name: "",
  });
  const [productSelected, setProductSelected] = useState([]);

  const products = useSelector((state) => state.products.products);
  const { clientDetail } = useSelector((state) => state.clients);
  const salesmanId = "7155a9d8-acff-4cf9-93fd-385830b9bcae";
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      salesmanId,
      clientId: id,
      method,
      state,
      subject,
      from,
      to,
      message,
    };

    const sale = {
      quantity_sale,
      productData,
    };

    dispatch(createActivity(obj));

    console.log(obj);
    onClose();
  };

  const append = (e) => {
    e.preventDefault();
    setProductSelected([...productSelected, { ...productData, quantity_sale }]);
    console.log(productData);
  };

  return (
    <div className=" fixed inset-0  bg-black  bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className=" w-[100vw] lg:w-[60vw] bg-base/60 rounded-md flex flex-col items-center justify-center h-[35em]"
      >
        <div className="  flex    w-[100%] h-[85%]">
          {/* Metodo */}
          <div className=" w-[50%] flex flex-col justify-center items-center">
            <div className=" w-[100%] h-[25%]  flex gap-x-16 justify-center items-center">
              <label className="block">
                <span className="text-white">Metodo</span>
                <select
                  className="form-select mt-1 block w-full"
                  value={method}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setMethod(e.target.value);
                  }}
                >
                  <option value="Llamada">Llamada</option>
                  <option value="Correo-E">Correo-E</option>
                </select>
              </label>
              {/* Estado */}
              <label className="block">
                <span className="text-white">Estado</span>
                <select
                  className="form-select mt-1 block w-full"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="Pendiente">Pendiente</option>
                  <option value="Concretado">Concretado</option>
                </select>
              </label>
            </div>

            <div className="  w-[100%] h-[75%] flex  flex-col justify-center items-center gap-y-3">
              {/* Asunto */}
              <label className="block">
                <span className="text-white">Asunto: </span>
                <input
                  type="text"
                  className="w-[100%]"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </label>
              {/* from */}
              <label className="block">
                <span className="text-white">Desde: </span>
                <input
                  type="email"
                  className="w-[100%]"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                />
              </label>
              {/* To */}
              <label className="block">
                <span className="text-white">Para: </span>
                <input
                  type="email"
                  className="w-[100%]"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                />
              </label>
              {/* text */}
              <label className="block">
                <span className="text-white">Mensaje </span>
                {/* <input type="text" className="h-[6em] w-[100%]" /> */}
                <textarea
                  id="message"
                  rows="4"
                  className="w-[100%] block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Escribe aqui..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </label>
            </div>
          </div>
          <div className=" w-[50%] flex flex-col justify-center items-center">
            {state === "Concretado" ? (
              <>
                <label className="block" htmlFor="name">
                  <span className="text-white">Producto vendido </span>
                  <select
                    className="form-select mt-1 block w-full"
                    name="name"
                    onChange={(e) => {
                      const selectedProduct = JSON.parse(e.target.value);
                      const price = clientDetail.vip
                        ? selectedProduct.withDiscount
                        : selectedProduct.sale_price;

                      setProductData({
                        productId: selectedProduct.id,
                        price_sale: price,
                        name: selectedProduct.name,
                      });
                    }}
                    value={productData.name}
                  >
                    <option value={productData.name}>{productData.name}</option>
                    {/* pendiente por revisar... funciona con alambres */}

                    {products.map((product, index) => {
                      return (
                        <option key={index} value={JSON.stringify(product)}>
                          {product.name}
                        </option>
                      );
                    })}
                  </select>
                </label>

                <label className="block">
                  <span className="text-white">Cantidad: </span>
                  <input
                    type="text"
                    className="w-[100%]"
                    value={quantity_sale}
                    onChange={(e) => setQuantity_sale(e.target.value)}
                  />
                </label>
                <button
                  className=" p-2 mt-2 rounded-md font-medium text-base bg-green-300 shadow-md shadow-gray-300/20 hover:bg-gray-300/80 transition-all"
                  onClick={append}
                >
                  Agregar
                </button>
                <table className="text-white text-center shadow-md rounded-sm font-light  p-2">
                  <thead>
                    <tr className="text-white font-light  p-2">
                      <th className="p-2">Producto</th>
                      <th className="p-2">Cantidad</th>
                      <th>Precio por unidad</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {productSelected.map((p, index) => (
                      <>
                        <tr className="border-b p-2">
                          <td>{p.name}</td>
                          <td> {p.quantity_sale}</td>
                          <td>$ {p.price_sale}</td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </>
            ) : null}
          </div>
        </div>
        <div className="  flex  w-[100%] h-[15%] justify-center items-center gap-x-20">
          <button
            type="submit"
            className=" p-2 rounded-md font-medium text-base bg-green-300 shadow-md shadow-gray-300/20 hover:bg-gray-300/80 transition-all"
          >
            Crear
          </button>
          <button
            className=" p-2 rounded-md font-medium text-base bg-red-300 shadow-md shadow-gray-300/20 hover:bg-gray-300/80 transition-all"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterActivitiesModal;
