import React, { useState } from "react";
import { createActivity } from "../../services/activityService";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getClient } from "../../services/clientsServices";
import { getAllProducts } from "../../services/productsServices";
import { RiDeleteBin3Line } from "react-icons/ri";
import swal from "sweetalert";

const RegisterActivitiesModal = ({ onClose }) => {
  const [method, setMethod] = useState("Llamada");
  const [state, setState] = useState("Pendiente");
  const [subject, setSubject] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { id: salesmanId, bossId } = useSelector((state) => state.auth.User);
  const [quantity_sale, setQuantity_sale] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [productData, setProductData] = useState({
    productId: "",
    price_sale: "",
    name: "",
  });
  const [productSelected, setProductSelected] = useState([]);

  const products = useSelector((state) => state.products.products);
  const { clientDetail } = useSelector((state) => state.clients);
  const user = useSelector((state) => state.auth.User);

  const { id } = useParams();
  const [total, setTotal] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      salesmanId,
      clientId: id,
      method,
      state,
      subject,
      // from,
      // to,
      message,
    };

    const sale = {
      quantity_sale,
      productData,
    };

    await dispatch(createActivity({ activity: obj, sale: productSelected }));
    await dispatch(getClient(id));
    await dispatch(getAllProducts(bossId));
    onClose();
  };

  const append = (e) => {
    e.preventDefault();
    const subtotal = quantity_sale * productData.price_sale;
    if (quantity_sale <= productData.quantity_sale) {
      setProductSelected([
        ...productSelected,
        { ...productData, quantity_sale, subtotal },
      ]);
      setTotalAmount(totalAmount + subtotal);
    } else {
      swal("Error", `La cantidad indicada supera el stock disponible`, "error");
    }
  };

  const handleDelete = (index) => {
    // const productToDelete = productSelected[index];
    // const subtotalToDelete = productToDelete.subtotal;
    const newProductSelected = productSelected.filter((p, i) => i !== index);
    setProductSelected(newProductSelected);
    setTotalAmount(newProductSelected.reduce((acc, p) => acc + p.subtotal, 0));
  };

  const deleteProductSelected = (productId) => {
    let filterList = productSelected.filter((product) => {
      if (product.productId !== productId) {
        return true;
      } else {
        setTotal(total - product.price_sale * product.quantity_sale);
      }
    });

    setProductSelected(filterList);
  };

  return (
    <div className=" fixed inset-0  bg-black  bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={`${
          state === "Pendiente" ? "w-[30vw]" : "w-[65vw]"
        } bg-base/60 rounded-md pr-8 flex flex-col items-center justify-center h-[35em]`}
      >
        <header className="text-white py-6 font-bold">CREAR ACTIVIDAD</header>
        <div className="  flex  w-[100%] h-[85%]">
          {/* Metodo */}
          <div className=" w-[100%] flex flex-col justify-center items-center">
            <div className=" w-[100%] h-[25%]  flex gap-x-16 justify-center items-center">
              <label className="block">
                <span className="text-white">Metodo</span>
                <select
                  className="form-select mt-1 block w-full"
                  value={method}
                  onChange={(e) => {
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
              {method === "Llamada" ? null : (
                <>
                  <label className="block">
                    <span className="text-white">Desde: {user.email}</span>
                  </label>
                  <label className="block">
                    <span className="text-white">
                      Para: {clientDetail.email}
                    </span>
                  </label>
                </>
              )}
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
          <>
            {state === "Concretado" ? (
              <div className=" w-[100%] flex flex-col justify-center items-center">
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
                        quantity_sale: selectedProduct.quantity,
                      });
                    }}
                    value={productData.name}
                  >
                    <option value={productData.name}>{productData.name}</option>
                    {/* pendiente por revisar... funciona con alambres */}

                    {products.map((product, index) => {
                      if (product.enable === true)
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
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {productSelected.map((p, index) => (
                      <tr key={index} className="border-b p-2">
                        <td>{p.name}</td>
                        <td> {p.quantity_sale}</td>
                        <td>$ {p.price_sale}</td>
                        <td>$ {p.subtotal}</td>

                        <td>
                          {" "}
                          <RiDeleteBin3Line
                            onClick={() => handleDelete(index)}
                          />{" "}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <span className="font-bold text-white py-8 flex justify-start">
                  Total: ${totalAmount.toFixed(2)}
                </span>
              </div>
            ) : null}
          </>
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
