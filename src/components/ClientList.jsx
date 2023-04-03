import { RiFilter3Line, RiLoader4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClients } from "../services/clientsServices";
import { selectedClientCheckbox } from "../app/store/clientSlice";

const ClientList = () => {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients.clients);
  const clientsStatus = useSelector((state) => state.clients.status);
  const clientsError = useSelector((state) => state.clients.error);
  const [clientSelected, setClientSelected] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (clientsStatus === "idle") {
      if(!clients.length){
      dispatch(getClients());}
      //dispatch
    }
  }, [clientsStatus, dispatch, clients]);

  const handleCheckboxChange = (client) => {
    setClientSelected(client.id);
    dispatch(selectedClientCheckbox(client.id));
  };
  const toggleCheckBox = (clientId) => {
    if (clientId === clientSelected) {
      setIsSelected(!isSelected);
    }
  };


  if (clientsStatus === "loading") {
    return <RiLoader4Fill className="animate-spin text-4xl text-secondary mt-8"/>
  } else if (clientsStatus === "succeeded") {
    return (
      <section className="w-[22rem] mx-auto overflow-x-auto lg:min-w-full pt-14 pb-4 lg:py-6 lg:px-4   lg:mb-0 ">
        <header className="flex justify-between w-screen lg:w-full px-8 py-4   bg-base-light/30 rounded-tr-md rounded-tl-md  ">
          <h3 className=" text-xl font-medium text-light flex items-center gap-x-2">
            {" "}
            <RiFilter3Line className="text-2xl" />
            Tus clientes
          </h3>
        </header>
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
                Total Comprado
              </th>
              <th scope="col" className=" px-6 py-4">
                Estado
              </th>
              <th scope="col" className=" px-6 py-4">
                VIP
              </th>
            </tr>
          </thead>
          <tbody className=" dark:border-light dark:bg-base-light/60">
            {Array.isArray(clients) &&
            clients?.map((item) => (
              <tr key={item.id} className="border-b dark:border-base/30">
                <td className="whitespace-nowrap  px-6 py-4 font-medium">
                <input
                      id={`checkbox-${item.id}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      checked={item.id === clientSelected && isSelected}
                      onChange={() => {
                      handleCheckboxChange(item);
                      toggleCheckBox(clientSelected);
                      }}
                    />
                </td>
                <td className="whitespace-nowrap  px-6 py-4  font-medium text-secondary hover:text-secondary/80 hover:underline transition-all">
                  <Link to={`/vendedor_detalles_cliente/${item.id}`}>
                    {item.name}
                  </Link>
                </td>
                <td className="whitespace-nowrap  px-6 py-4">${item.totalPurchased}</td>
                <td
                  className={`whitespace-nowrap  px-6 py-4 ${
                    item.enable ? "text-emerald-200" : "text-red-200"
                  }`}
                >
                  {" "}
                  {item.enable ? "Habilitado" : "Desabilitado"}
                </td>
                <td
                  className={`whitespace-nowrap  px-6 py-4 ${
                    item.vip ? "text-orange-200" : "text-white"
                  }`}
                >
                  {" "}
                  {item.vip ? "Si" : "No"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  } else if (clientsStatus === "failed") {
    return <div>{clientsError}</div>;
  }
};
export default ClientList;
