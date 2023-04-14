import React, { useState } from "react";
import { createActivity } from "../app/features/postActivitySlice";
import { useDispatch, useSelector } from "react-redux";

const RegisterActivitiesModal = ({ onClose }) => {
  const [method, setMethod] = useState("Llamada");
  const [status, setStatus] = useState("Pendiente");
  const [subject, setSubject] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const [quantity_sale, setQuantity_sale] = useState("");
  const [producId, setProductId] = useState("");
  const products = useSelector((state) => state.products.products);

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      // salesmanId,
      // clientId,
      method,
      status,
      subject,
      from,
      to,
      message,
    };

    dispatch(createActivity(obj));

    console.log(obj);
    onClose();
  };

  // const handleCreateActivity = async (salesmanId) => {
  //   try {
  //     dispatch(
  //       createActivity({
  //         salesmanId,
  //         method,
  //         status,
  //         subject,
  //         from,
  //         to,
  //         message,
  //       })
  //     );
  //     onClose();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="fixed inset-0  bg-black  bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className=" w-[100vw] lg:w-[70vw] bg-base/60 rounded-md flex flex-col items-center justify-center h-[45em]"
      >
        <div className=" bg-red-200 flex    w-[100%] h-[85%]">
          {/* Metodo */}
          <div className="bg-green-200 w-[50%] flex flex-col justify-center items-center">
            <div className=" bg-blue-200 w-[100%] h-[25%]  flex gap-x-16 justify-center items-center">
              <label className="block">
                <span className="text-white">Metodo</span>
                <select
                  className="form-select mt-1 block w-full"
                  value={method}
                  onChange={(e) => setMethod(e.target.value)}
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
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Pendiente">Pendiente</option>
                  <option value="Concretado">Concretado</option>
                </select>
              </label>
            </div>

            <div className=" bg-yellow-200 w-[100%] h-[75%] flex  flex-col justify-center items-center gap-y-3">
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
          <div className="bg-purple-300 w-[50%] flex flex-col justify-center items-center">
            {status === "Concretado" ? (
              <>
                <label className="block">
                  <span className="text-white">Producto vendido </span>
                  <select
                    className="form-select mt-1 block w-full"
                    value={producId}
                    onChange={(e) => setProductId(e.target.value)}
                  >
                    {products.map((product, index) => (
                      <option key={index} value={product.name}>
                        {product.name}
                      </option>
                    ))}
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
              </>
            ) : null}
          </div>
        </div>
        <div className="  flex  w-[100%] h-[15%] justify-center items-center gap-x-20">
          <button
            onClick={handleSubmit}
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
