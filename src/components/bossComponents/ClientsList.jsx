import { RiFilter3Line, RiLoader4Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getAllClients } from "../../services/clientsServices";
import { useEffect, useState } from "react";
import ClientsItems from "./ClientsItems";
import {
  cleanClientSelect,
  selectedClientCheckbox,
  cleanAllClients,
} from "../../app/features/clientSlice";
import swal from "sweetalert";

const ClientsList = () => {
  const dispatch = useDispatch();
  const { clients, message } = useSelector((state) => state.clients);
  const total = clients?.reduce(
    (acc, client) => acc + client.totalPurchased,
    0
  );
  const clientHab = clients?.reduce(
    (acc, client) => (client.enable ? acc + 1 : acc),
    0
  );
  const clientsStatus = useSelector((state) => state.clients.status);
  const clientsError = useSelector((state) => state.clients.error);
  const user = useSelector((state) => state.auth.User.id);

  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const handleCheckboxChange = (event, client) => {
    const checkboxId = event.target.id;
    if (selectedCheckbox === checkboxId) {
      setSelectedCheckbox(null);
      dispatch(cleanClientSelect());
    } else {
      setSelectedCheckbox(checkboxId);
      dispatch(selectedClientCheckbox(client.id));
    }
  };

  useEffect(() => {
    dispatch(getAllClients(user));

    return () => dispatch(cleanAllClients());
  }, [dispatch, user]);

  if (clientsStatus === "loading") {
    return (
      <div className="flex justify-center w-full">
        <RiLoader4Fill className="animate-spin text-4xl text-secondary mt-8" />
      </div>
    );
  } else if (clientsStatus === "succeeded") {
    return (
      <section className="overflow-x-auto lg:min-w-full mt-4 min-h-96 lg:h-96 overflow-y-auto pb-4">
        <header className="flex justify-between w-screen lg:w-full px-8 py-4   bg-base-light/30 rounded-tr-md rounded-tl-md  ">
          <h3 className=" text-xl font-medium text-light flex items-center gap-x-2">
            <RiFilter3Line className="text-2xl" />
            Tus clientes
          </h3>
          <section className="flex gap-x-6 items-center">
            <div className="flex flex-col items-center">
              <p className="text-2xl font-bold text-light">{clients.length}</p>
              <span className="text-light/70 font-medium text-xs">
                Clientes
              </span>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-2xl font-bold text-light">{clientHab}</p>
              <span className="text-emerald-200 font-medium text-xs">
                Habilitados
              </span>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-2xl font-bold text-light">${total}</p>
              <span className="text-light/70 font-medium text-xs">
                Balance actual
              </span>
            </div>
          </section>
        </header>
        <table className="min-w-full  text-center text-sm font-regular shadow-md rounded-sm pb-4">
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
                <ClientsItems
                  item={item}
                  key={item.id}
                  onCheckbox={handleCheckboxChange}
                  onSelected={selectedCheckbox}
                />
              ))}
          </tbody>
        </table>
      </section>
    );
  } else if (clientsStatus === "failed") {
    swal("Error", `${message}`, "error");
    return <div>{clientsError} </div>;
  }
};
export default ClientsList;
