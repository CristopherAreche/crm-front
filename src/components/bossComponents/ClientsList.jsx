import { RiFilter3Line, RiLoader4Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getClients } from "../../services/clientsServices";
import { useEffect } from "react";
import ClientsItems from "./ClientsItems";

const sellerId = "7155a9d8-acff-4cf9-93fd-385830b9bcae";
const bossId = "00d4cf20-b761-40cc-baf2-7c40aa53caf9";

const ClientList = () => {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients.clients);
  const clientsStatus = useSelector((state) => state.clients.status);
  const clientsError = useSelector((state) => state.clients.error);

  useEffect(() => {
    if (clientsStatus === "idle") {
      if (!clients.length) {
        dispatch(getClients(sellerId));
      }
    }
  }, [clientsStatus, dispatch, clients]);
  if (clientsStatus === "loading") {
    return (
      <div className="flex justify-center w-full">
        <RiLoader4Fill className="animate-spin text-4xl text-secondary mt-8" />
      </div>
    );
  } else if (clientsStatus === "succeeded") {
    return (
      <section className="overflow-x-auto lg:min-w-full mt-4 h-96 overflow-y-auto">
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
                Su Vendedor
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
                <ClientsItems item={item} key={item.id} />
              ))}
          </tbody>
        </table>
      </section>
    );
  } else if (clientsError === "failed") {
    return <div>{clientsError}</div>;
  }
};
export default ClientList;
