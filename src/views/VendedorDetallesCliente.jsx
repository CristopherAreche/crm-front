import React from "react";
import RegisterActivityTable from "../components/RegisterActivityTable";
import SideBarDetail from "../components/SideBarDetail";
import TaskListTable from "../components/TaskListTable";
import DateFilter from "../components/DateFilter";
import ActivitiesFilter from "../components/ActivitiesFilter";

const VendedorDetallesCliente = () => {
  return (
    <div className="bg-base h-screen md:flex">
      <div className="bg-base-light text-white md:w-[30em] md:h-full h-[6em]">
        <SideBarDetail />
      </div>
      <div className="w-full h-full flex flex-col">
        <TaskListTable />

        {/* activity table */}
        <div className=" h-auto mx-11 mt-3 rounded-lg text-white">
          <p className="text-[2em] font-bold mb-3">Actividades</p>
          <div className="flex justify-between">
            <RegisterActivityTable />

            {/* calendar */}
            <div className="bg-[#2a3652] w-[22em] rounded-lg">
              <DateFilter />
              <ActivitiesFilter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendedorDetallesCliente;
