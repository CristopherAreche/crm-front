import React from "react";
import TaskList from "../../components/TaskList";
import SideBar from "../../components/sidebars/SideBar";
import spotlight1 from "../../assets/svg/Spotlight1.svg";
import spotlight2 from "../../assets/svg/Spotlight2.svg";
import ActivitiesList from "../../components/ActivitiesList";

const ClientDetail = () => {
  return (
    <section className="bg-base h-screen ">
      <SideBar typeSidebar="client-detail" />
      {/* View Client Detail */}
      <main className="lg:pl-72 w-[100vw] lg:w-auto  h-full overflow-y-auto flex flex-col">
        <section className="py-6 px-12  z-[2]">
          <TaskList />
          <ActivitiesList />
        </section>
      </main>

      {/* Luces */}
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
    </section>
  );
};

export default ClientDetail;
