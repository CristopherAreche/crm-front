import React from "react";
import RegisterActivityTable from "../components/RegisterActivityTable";
import TaskList from "../components/TaskList";
import DateFilter from "../components/DateFilter";
import ActivitiesFilter from "../components/ActivitiesFilter";
import SideBar from "../components/sideBar";
import spotlight1 from "../assets/svg/Spotlight1.svg";
import spotlight2 from "../assets/svg/Spotlight2.svg";
import { RiBarChart2Line } from "react-icons/ri";

const VendedorDetallesCliente = () => {
  return (
    <main className="bg-base h-screen grid grid-cols-8 ">
      <SideBar typeSidebar="client-detail" />
      {/* View Client Detail */}
      <section className="col-span-6 w-[100vw] lg:w-auto  z-40 h-full overflow-y-auto px-8 py-6">
        <TaskList />
        <section className="flex flex-col gap-y-2">
          <h4 className="text-2xl text-light font-medium flex gap-x-4 items-center mb-2">
            <RiBarChart2Line className="text-4xl" />
            Actividades
          </h4>
          <DateFilter />
          
          <RegisterActivityTable />
        </section>
      </section>
      <img
        src={spotlight1}
        className="absolute top-0 left-0 opacity-80 z-[1]"
        alt="light glow"
      />
      <img
        src={spotlight2}
        className="absolute bottom-0 right-0 opacity-80 z-[1]"
        alt="light glow"
      />
    </main>
  );
};

export default VendedorDetallesCliente;
