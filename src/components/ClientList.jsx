import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClients } from "../services/clientsServices";

const ClientList = () => {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients);
  const clientsStatus = useSelector((state) => state.clients.status);
  const clientsError = useSelector((state) => state.clients.error);
  const [selectedClients, setSelectedClients] = useState({});

  useEffect(() => {
    if (clientsStatus === "idle") {
      dispatch(getClients());
    }
  }, [clientsStatus, dispatch]);

  const handleCheckboxChange = (clientId) => {
    setSelectedClients({ [clientId]: true });
  };

  if (clientsStatus === "loading") {
    return <div className="text-white">Loading...</div>;
  } else if (clientsStatus === "succeeded") {
    return (
      <div>
        <table className="w-[90%] h-[60vh]">
          <thead className="text-white w-full">
            <tr className="bg-green-300 ">
              <th className="py-3 px-3 bg-base-light">CB</th>
              <th className="py-3 px-3 bg-base-light">Nombre</th>
              <th className="py-3 px-3 bg-base-light">Total Comprado</th>
              <th className="py-3 px-3 bg-base-light">Estado de Negociacion</th>
              <th className="py-3 px-3 bg-base-light">VIP</th>
            </tr>
          </thead>
          <tbody className="text-white text-center w-full h-full bg-[#2a3652]">
            {clients.data.map((item) => (
              <tr
                key={item.id}
                className="border-none cursor-pointer duration-300"
              >
                <td>
                  <input
                    id={`checkbox-${item.id}`}
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    checked={!!selectedClients[item.id]}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </td>
                <td className="py-3 px-6"> {item.name}</td>
                <td className="py-3 px-6"> {item.phone}</td>
                <td className="py-3 px-6"> {item.id}</td>
                <td className="py-3 px-6"> {item.vip.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else if (clientsStatus === "failed") {
    return <div>{clientsError}</div>;
  } else {
    return null;
  }
};

export default ClientList;
