import React from "react";
import ClientProfile from "../components/ClientProfile";
import SideBarDetail from "../components/SideBarDetail";
import Header from "../components/Header";
const VendedorDetallesCliente = () => {
  return (
    <body>
      <div
        className=" h-screen grid grid-cols-12 grid-rows-12"
        style={{ gridTemplateRows: "5em" }}
      >
        <Header mainText="Cliente" />
        <SideBarDetail />
        <ClientProfile />
      </div>
    </body>
  );
};

export default VendedorDetallesCliente;
