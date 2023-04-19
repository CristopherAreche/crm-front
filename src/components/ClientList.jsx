import {
  RiAddFill,
  RiCustomerService2Fill,
  RiFilter3Line,
  RiLoader4Fill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClients } from "../services/clientsServices";
import { selectedClientCheckbox } from "../app/features/clientSlice";
import CreateClient from "./forms/CreateClient";

const ClientList = () => {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients.clients);
  const clientsStatus = useSelector((state) => state.clients.status);
  const clientsError = useSelector((state) => state.clients.error);
  const [clientSelected, setClientSelected] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state) => state.auth.User);

  useEffect(() => {
    if (user?.id) {
      dispatch(getClients(user?.id));
    }
  }, [dispatch, user?.id]);

  const handleCheckboxChange = (client) => {
    setClientSelected(client.id);
    dispatch(selectedClientCheckbox(client.id));
  };
  const toggleCheckBox = (clientId) => {
    if (clientId === clientSelected) {
      setIsSelected(!isSelected);
    }
  };

  // const onCreateClient = () => {
  //   dispatch(cleanClientSelect());
  //   setShowModal(true);
  // };

  if (clientsStatus === "loading") {
    return (
      <div className="flex justify-center w-full">
        <RiLoader4Fill className="animate-spin text-4xl text-secondary mt-8" />
      </div>
    );
  } else if (clientsStatus === "succeeded") {
    return (
      <section className="overflow-x-auto lg:min-w-full mt-4">
        {!clients.length ? (
          <div className="flex justify-center flex-col items-center h-96 pt-16 gap-y-8">
            <h3 className="text-lg font-medium text-light flex items-center gap-x-2">
              Usted no tiene clientes, para usar esa vista y sus funcionalidades
              obtenga uno.
            </h3>
            <div className="flex gap-x-12 items-center">
              <button
                className="group rounded-xl py-2 px-3 shadow-emerald-400/20 hover:scale-[1.03] hover:bg-emerald-400/80 transition-all shadow-md group bg-emerald-400 relative"
                onClick={() => setShowModal(!showModal)}
              >
                <RiAddFill className="text-2xl" />
                <span className="absolute hidden group-hover:flex -left-3 -top-2 -translate-y-full w-auto px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                  Agregar
                </span>
              </button>
              <button className="group rounded-xl py-2 px-3 shadow-orange-400/20 hover:scale-[1.03] hover:bg-orange-400/80 transition-all shadow-md group bg-orange-400 relative">
                <RiCustomerService2Fill className="text-2xl" />
                <span className="absolute opacity-0 group-hover:opacity-100  px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm ">
                  Consultar Soporte
                </span>
              </button>
            </div>
          </div>
        ) : (
          <>
            <header className="flex justify-between w-screen lg:w-full px-8 py-4   bg-base-light/30 rounded-tr-md rounded-tl-md  ">
              <h3 className=" text-xl font-medium text-light flex items-center gap-x-2">
                <RiFilter3Line className="text-2xl" />
                Tus clientes
              </h3>
            </header>
            <table className="min-w-full  text-center text-sm font-regular shadow-md rounded-sm">
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
                      <td className="whitespace-nowrap  px-6 py-2 font-medium">
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
                      <td className="whitespace-nowrap  px-6 py-2  font-medium text-secondary hover:text-secondary/80 hover:underline transition-all">
                        <Link to={`/dashboard/client/${item.id}`}>
                          {item.name}
                        </Link>
                      </td>
                      <td className="whitespace-nowrap  px-6 py-2">
                        ${item.totalPurchased}
                      </td>
                      <td
                        className={`whitespace-nowrap  px-6 py-2 ${
                          item.enable ? "text-emerald-200" : "text-red-200"
                        }`}
                      >
                        {" "}
                        {item.enable ? "Habilitado" : "Desabilitado"}
                      </td>
                      <td
                        className={`whitespace-nowrap  px-6 py-2 ${
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
          </>
        )}

        <CreateClient
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        />
      </section>
    );
  } else if (clientsError === "failed") {
    return <div>{clientsError}</div>;
  }
};
export default ClientList;
