import { useEffect, useState } from "react";
import axios from "axios";
import {
  RiCheckboxIndeterminateLine,
  RiCheckboxLine,
  RiMailLine,
  RiPhoneLine,
} from "react-icons/ri";
import swal from "sweetalert";

function ModalSaleDetail({ clientDetail, activitie, onClose }) {
  const API_URL_SALE = `${process.env.REACT_APP_URL}/sale_product`;
  const [saleDetail, setSaleDetail] = useState([]);

  useEffect(() => {
    getSale();
  }, []);

  const getSale = async () => {
    try {
      const response = await axios.get(
        `${API_URL_SALE}?activityId=${activitie.id}`
      );
      setSaleDetail(response.data);
    } catch (error) {
      swal(error.response.data.error);
    }
  };

  return (
    <div className="z-40 fixed inset-0  bg-black  bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <section className=" bg-base/60 rounded-md  grid grid-cols-6 gap-y-4 h-96 ">
        <div className="bg-base-light col-span-2 px-12 flex flex-col gap-6 items-center justify-center font-medium  text-light/9   ">
          <span className="text-secondary">Nombre: {clientDetail.name}</span>
          <span className="text-secondary">Email: {clientDetail.email}</span>
          <span className="text-secondary">Phone: {clientDetail.phone}</span>
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
        <div className="flex flex-col gap-y-3 col-span-4  overflow-x-auto  ">
          <h3>Detalle de la actividad</h3>

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
          <div className=" flex flex-col  justify-center h-20 w-full overflow-hidden">
            <p className="tex-sm text-secondary font-medium">
              Asunto: "{activitie.subject || "No hay asunto para mostrar"}"
            </p>
            <p className="tex-sm text-secondary font-medium w-[40vw] whitespace-break-spaces  h-auto">
              Mensaje: "{activitie.message}"
            </p>
          </div>

          <table className="text-white text-center align-center shadow-md rounded-sm font-light  w-[40vw]  p-2">
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
