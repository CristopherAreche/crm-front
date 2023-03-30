import React from "react";
import ClientList from "../components/ClientList";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import SideBar from "../components/sideBar";
import SideBarRight from "../components/SideBarRight";
import FilterButton from "../components/FilterButton";

const VendedorCliente = () => {
  return (
    <body className="bg-gradient-to-br from-gray-600 to-gray-800">
    <div className="h-screen grid grid-cols-6 grid-rows-6">
      <Header mainText="Cliente" />
      <SideBar clients={"Cliente"} />
      <SideBarRight />
      <h2 className="flex justify-center pt-[2.5em] text-[2em] font-bold text-white col-span-4 row-start-2">
        Lista de Clientes
      </h2>
      <SearchBar />

      <ClientList />

    </div>
  </body>
  );
};

export default VendedorCliente;
