import React from "react";
import ClientList from "../components/ClientList";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import SideBar from "../components/sideBar";
import SideBarRight from "../components/SideBarRight";
import FilterButton from "../components/FilterButton";

const VendedorCliente = () => {
  return (
    <body>
      <div
        className="h-screen grid grid-cols-12 grid-rows-12"
        style={{ gridTemplateRows: "5em" }}
      >
        <Header mainText="Cliente" />
        <SideBar clients={"Cliente"} />
        <SideBarRight />
        <h2 className="flex justify-center pt-[2.5em] text-[2em] font-bold text-gray-600 col-start-5 col-end-9 row-start-2">
          Lista de Clientes
        </h2>
        <SearchBar />
        <FilterButton />
        <ClientList />
        {/* un comentario */}
      </div>
    </body>
  );
};

export default VendedorCliente;
