import React from "react";
import ClientProfile from "../components/ClientProfile";
import SideBarDetail from "../components/SideBarDetail";
import Header from "../components/Header";
const VendedorDetallesCliente = () => {
  return (
    <div className="">
      <Header mainText="Cliente" />
      <section className="fixed ml-60">
        <ClientProfile />
      </section>
      <div className="fixed">
        <SideBarDetail />
      </div>
    </div>
  );
};

export default VendedorDetallesCliente;
