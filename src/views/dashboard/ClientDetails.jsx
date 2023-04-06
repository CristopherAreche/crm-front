import React from "react";
import TaskList from "../../components/TaskList";
import spotlight1 from "../../assets/svg/Spotlight1.svg";
import spotlight2 from "../../assets/svg/Spotlight2.svg";
import ActivitiesList from "../../components/ActivitiesList";
import ClientDetailSideBar from "../../components/sidebars/ClientDetailSideBar";

const ClientDetail = () => {
  return (
    <main className="bg-base h-screen grid grid-cols-10">
      <ClientDetailSideBar />
      <main className=" py-10 col-start-3 col-end-11 lg:w-auto  h-full overflow-y-auto flex flex-col">
        <section className="py-6 px-12  z-[2]">
          <TaskList />
          <ActivitiesList />
        </section>
      </main>

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

export default ClientDetail;
