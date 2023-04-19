import React, { useEffect } from "react";
import TaskListDetail from "../../components/TaskListDetail";
import ActivitiesList from "../../components/ActivitiesList";
import ClientDetailSideBar from "../../components/sidebars/ClientDetailSideBar";
import { useDispatch } from "react-redux";
import { getClient } from "../../services/clientsServices";
import { useParams } from "react-router-dom";
import Inventory from "./Inventory";
import LightsSvg from "../../components/LightsSvg";

const ClientDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getClient(id));
  }, [dispatch, id]);

  return (
    <main className="bg-base h-screen">
      <ClientDetailSideBar />
      <main className="lg:pl-72 h-[100vh] overflow-y-auto flex flex-col w-[100vw] lg:w-auto">
        <section className="py-6 px-12 grid grid-cols-1 gap-y-12">
          <TaskListDetail clientId={id} />
          <section className="flex flex-col">
            <ActivitiesList />
            <Inventory />
          </section>
        </section>
      </main>
    </main>
  );
};

export default ClientDetail;
