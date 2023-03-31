import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import ClientList from "../components/ClientList";
import FilterBottom from "../components/FilterBottom";
import FilterTop from "../components/FilterTop";

const VendedorCliente = () => {
  return (
    <div className="bg-base h-screen md:flex">
      <div className="bg-base-light text-white md:w-[30em] md:h-full h-[6em]">
        <SideBar />
      </div>
      <div className=" w-full h-full items-center flex flex-col gap-6">
        <Header />
        <FilterTop />
        <ClientList />
        <FilterBottom />
      </div>
    </div>
  );
};

export default VendedorCliente;
