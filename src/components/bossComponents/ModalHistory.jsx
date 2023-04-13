import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtainActivities } from "../../app/features/clientActivitiesSlice";
import {
  RiCheckboxIndeterminateLine,
  RiCheckboxLine,
  RiMailLine,
  RiPhoneLine,
} from "react-icons/ri";

const ModalHistory = ({ onClose, clientDetail }) => {
  const dispatch = useDispatch();
  const clientId = useSelector((state) => state.clients.clientSelected);
  const activities = useSelector((state) => state.activities.activities);

  useEffect(() => {
    if (clientId) dispatch(obtainActivities(clientId));
  }, [clientId, dispatch]);

  return (
    <div className="fixed inset-0  bg-black  bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <section className="w-[90vw] lg:w-[50vw] bg-base/60 rounded-md flex items-center justify-center gap-y-4 h-96 overflow-y-auto">
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
            Cerrar
          </button>
        </div>
        <div className="flex flex-col gap-y-3 w-[70%] h-80 overflow-y-auto">
          <h3>Lista de actividades</h3>
          {activities?.map((activitie) => (
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
                "{activitie.subject || "No hay sujeto para mostrar"}"
              </p>
            </table>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ModalHistory;
