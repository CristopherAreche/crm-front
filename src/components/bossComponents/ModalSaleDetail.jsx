import { useEffect, useState } from "react";
import URL from "../../utils/env";
import axios from "axios";
import {
  RiCheckboxIndeterminateLine,
  RiCheckboxLine,
  RiMailLine,
  RiPhoneLine,
} from "react-icons/ri";
import { useSelector } from "react-redux";

function ModalSaleDetail({ clientDetail, activitie, onClose }) {
  const API_URL_SALE = `${URL}/sale_product`;
  const [saleDetail, setSaleDetail] = useState([]);

  useEffect(() => {
    getSale();
  }, []);
  console.log(activitie);

  const getSale = async () => {
    try {
      const response = await axios.get(
        `${API_URL_SALE}?activityId=${activitie.id}`
      );
      setSaleDetail(response.data);
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  return (
    <div className="z-40 fixed inset-0  bg-black  bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <section className="w-[90vw] lg:w-[60vw] bg-base/60 rounded-md flex items-center justify-center gap-y-4 h-96 overflow-y-auto">
        <div className="bg-base-light flex flex-col gap-6 items-center justify-center font-medium  text-light/9 w-[30%] h-[100%]">
          <span className="text-secondary">Nombre: {clientDetail.name}</span>
          <span className="text-secondary">Email: {clientDetail.email}</span>
          <span className="text-secondary">Phone: ${clientDetail.phone}</span>
          <span className="text-secondary">
            Total Comprado: ${clientDetail.totalPurchased}
          </span>
          {clientDetail.vip === true ? (
            <span className="text-secondary">VIP</span>
          ) : null}
          <button
            className=" p-2 rounded-md font-medium text-base bg-gray-300 shadow-md shadow-gray-300/20 hover:bg-gray-300/80 transition-all"
            onClick={onClose}
          >
            Volver
          </button>
        </div>
        <div className="flex flex-col gap-y-3 w-[70%] h-80 overflow-y-auto">
          <h3>Detalle de la actividad</h3>
          <table
            key={activitie.id}
            className="bg-base/40 py-1 px-3 rounded-md flex flex-col"
          >
            <header className="flex justify-between gap-x-12">
              <p className="text-sm  text-light/80 flex gap-x-1 items-center">
                {activitie.method === "Llamada" ? (
                  <RiPhoneLine />
                ) : (
                  <RiMailLine />
                )}
                {activitie.method} - Para:{" "}
                <span className="text-yellow-400">{activitie.to}</span>
              </p>

              <span
                className={`text-2xl ${
                  activitie.state === "Pendiente"
                    ? "text-red-200"
                    : "text-emerald-200"
                } lowercase `}
              >
                {activitie.state === "Pendiente" ? (
                  <RiCheckboxIndeterminateLine />
                ) : (
                  <RiCheckboxLine />
                )}
              </span>
            </header>
            <p className="tex-sm text-secondary font-medium">
              "{activitie.subject || "No hay asunto para mostrar"}"
            </p>
            <p className="tex-sm text-secondary font-medium">
              {activitie.message}
            </p>
          </table>
          <table className="text-white text-center align-center shadow-md rounded-sm font-light  p-2">
            <thead>
              <tr className="text-white font-light  p-2">
                <th className="p-2">Imagen</th>
                <th className="p-2">Producto</th>
                <th className="p-2">Cantidad</th>
                <th className="p-2">Precio unitario</th>
                <th className="p-2">Total</th>
              </tr>
            </thead>
            <tbody className="">
              {saleDetail?.map((sale, index) => (
                <tr key={index} className="border-b p-2">
                  <td>
                    <img
                      className="h-12 w-12 object-cover m-3"
                      src={sale.product.image}
                      alt={sale.product.name}
                    />
                  </td>
                  <td>{sale.product.name}</td>
                  <td> {sale.quantity_sale}</td>
                  <td>$ {sale.price_sale}</td>
                  <td>$ {sale.quantity_sale * sale.price_sale}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default ModalSaleDetail;
