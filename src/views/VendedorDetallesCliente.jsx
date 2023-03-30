import React from "react";
import SideBarDetail from "../components/SideBarDetail";
import Header from "../components/Header";
import DateFilter from "../components/filter/DateFilter";
import TaskListTable from "../components/TaskListTable";
import RegisterActivityTable from "../components/RegisterActivityTable";
const VendedorDetallesCliente = () => {
  return (
    <body>
      <div
        className="h-screen grid grid-cols-12 grid-rows-12"
        style={{ gridTemplateRows: "5em" }}
      >
        <Header mainText="Cliente" />
        <SideBarDetail />
        <div className="h-1 col-start-6 col-end-8 row-start-2 font-bold text-[2em] flex justify-center items-center pt-16">
          <h3 className=" flex justify-center items-center w-full">
            Lista de tareas
          </h3>
        </div>
        <TaskListTable />
        <div className="h-1 col-start-5 col-end-9 row-start-4 font-bold text-[2em] flex justify-center items-center">
          <h3 className="pt-20 flex justify-center items-center w-full">
            Actividades Registradas
          </h3>
        </div>
        <DateFilter />
        <RegisterActivityTable />
      </div>
    </body>
  );
};

export default VendedorDetallesCliente;
