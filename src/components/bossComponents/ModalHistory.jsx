import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtainActivities } from "../../app/features/clientActivitiesSlice";
import ModalHistoryActivities from "./ModalHistoryActivities";

const ModalHistory = ({ onClose, clientDetail }) => {
  const dispatch = useDispatch();
  const clientId = useSelector((state) => state.clients.clientSelected);
  const activities = useSelector((state) => state.activities.activities);

  useEffect(() => {
    if (clientId) dispatch(obtainActivities(clientId));
  }, [dispatch]);

  return (
    <div className="fixed inset-0  bg-black  bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <section className="w-[90vw] lg:w-[60vw] bg-base/60 rounded-md flex flex-col lg:flex-row items-center justify-center gap-y-4 h-96 overflow-y-auto">
        <div className="bg-base-light flex flex-col gap-6 items-center justify-center font-medium  text-light/9 py-4 lg:py-0 w-full lg:w-[30%] h-[100%]">
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
            className=" p-2 rounded-md font-medium text-base bg-gray-300 shadow-md shadow-gray-300/20 hover:bg-gray-300/80 transition-all "
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
        <div className="flex flex-col gap-y-3 w-[70%] h-80 overflow-y-auto">
          <h3>Lista de actividades</h3>
          {activities?.map((activitie) => (
            <ModalHistoryActivities
              activitie={activitie}
              clientDetail={clientDetail}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
export default ModalHistory;
