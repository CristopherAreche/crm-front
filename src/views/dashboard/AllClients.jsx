import React from "react";
import SideBar from "../../components/sidebars/SideBar";
import Header from "../../components/Header";
import FilterTop from "../../components/FilterTop";
import ClientList from "../../components/ClientList";
import FilterBottom from "../../components/FilterBottom";
import Clients from "./Clients";
import { useDispatch, useSelector } from "react-redux";
import { resetClients, searchClients } from "../../app/features/clientSlice";

const AllClients = () => {
  const role = useSelector((state) => state.clients.clientRole);
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients.clients);

  return (
    <main className="bg-base h-screen text-white grid grid-cols-10">
      <SideBar />
      {role === "admin" ? (
        <Clients />
      ) : (
        <div className=" flex flex-col  h-screen w-full col-start-3 col-end-11">
          <Header
            mainText={"CLIENTES"}
            data={clients}
            onSearch={(filteredClients) =>
              dispatch(searchClients(filteredClients))
            }
            onReset={() => dispatch(resetClients())}
          />
          <FilterTop />
          <ClientList />
          <FilterBottom />
        </div>
      )}
    </main>
  );
};

export default AllClients;