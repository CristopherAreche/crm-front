import React, { useEffect } from "react";
import TaskListDetail from "../../components/TaskListDetail";
import spotlight1 from "../../assets/svg/Spotlight1.svg";
import spotlight2 from "../../assets/svg/Spotlight2.svg";
import ActivitiesList from "../../components/ActivitiesList";
import ClientDetailSideBar from "../../components/sidebars/ClientDetailSideBar";
import { useDispatch } from "react-redux";
import { getClient } from "../../services/clientsServices";
import { useParams } from "react-router-dom";
import { cleanDetail } from "../../app/features/clientSlice";
import Inventory from "./Inventory";

const ClientDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getClient(id));

    return () => dispatch(cleanDetail());
  }, [dispatch, id]);

  return (
    <main className="bg-base h-screen ">
      <ClientDetailSideBar />
      <main className="lg:pl-72 h-[100vh] overflow-y-auto flex flex-col z-[2] w-[100vw  ] lg:w-auto">
        <section className="py-6 px-12 z-[2] grid grid-cols-1 gap-y-12">
          <TaskListDetail clientId={id} />
          <section className="flex flex-col">
            <ActivitiesList />
            <Inventory />
          </section>
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
