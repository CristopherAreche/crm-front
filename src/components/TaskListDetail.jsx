import React, { useEffect } from "react";
import { RiBookReadLine, RiLoader4Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { obtainTask } from "../app/features/clientActivitiesSlice";
import TaskCard from "./TaskCard";

const TaskListDetail = ({ clientId }) => {
  const { tasks, statusTask } = useSelector((state) => state.activities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtainTask(clientId));
  }, [clientId, dispatch]);

  if (statusTask === "loading") {
    return (
      <div className="flex justify-center w-full">
        <RiLoader4Fill className="animate-spin text-4xl text-secondary mt-8" />
      </div>
    );
  }

  if (!tasks.length && statusTask !== "loading") {
    return (
      <section className="flex items-center w-full  gap-x-4 z-20">
        <div>
          <h3 className="text-xl text-light font-medium">
            No tiene ninguna tarea pendiente con este cliente
          </h3>
          <p className="text-light/90">Agende una tarea con este cliente</p>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5058/5058432.png"
          alt="task not found"
          className="w-20 h-20"
        />
      </section>
    );
  }

  return (
    <section className=" text-white mb-0 lg:mb-6  z-20">
      <h4 className="text-2xl text-light font-medium flex gap-x-4 items-center mb-6">
        <RiBookReadLine className="text-4xl" /> Lista de Tareas
      </h4>
      <section className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} clientId={clientId} />
        ))}
      </section>
    </section>
  );
};

export default TaskListDetail;
