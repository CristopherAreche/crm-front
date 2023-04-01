import React from "react";
import { RiBookReadLine } from "react-icons/ri";

const TaskList = () => {
  return (
    <section className=" text-white mb-6">
      <h4 className="text-2xl text-light font-medium flex gap-x-4 items-center mb-6"><RiBookReadLine className="text-4xl"/> Lista de Tareas</h4>
      <section className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <article className="bg-base-light/40 px-4 py-3 rounded-md shadow-md flex flex-col gap-y-3 items-start">
          <p className="text-ellipsis overflow-hidden  w-24 lg:w-auto lg:h-auto h-14 text-sm font-medium text-gray-300 ">Here are the biggest enterprise technology of 2021 so fair, in reverse chronological order.</p>
          <label className="bg-red-400 text-sm font-medium text-gray-200 py-1 px-2 rounded-md shadow-md flex flex-col gap-y-3 items-start shadow-red-400/50">Pending</label>
        </article>
        <article className="bg-base-light/40 px-4 py-3 rounded-md shadow-md flex flex-col gap-y-3 items-start">
          <p className="text-ellipsis overflow-hidden  w-24 lg:w-auto lg:h-auto h-14 text-sm font-medium text-gray-300">Here are the biggest enterprise technology of 2021 so fair, in reverse chronological order.</p>
          <label className="bg-red-400 text-sm font-medium text-gray-200 py-1 px-2 rounded-md shadow-md flex flex-col gap-y-3 items-start shadow-red-400/50">Pending</label>
        </article>
        <article className="bg-base-light/40 px-4 py-3 rounded-md shadow-md flex flex-col gap-y-3 items-start">
          <p className="text-ellipsis overflow-hidden  w-24 lg:w-auto lg:h-auto h-14 text-sm font-medium text-gray-300">Here are the biggest enterprise technology of 2021 so fair, in reverse chronological order.</p>
          <label className="bg-emerald-400 text-sm font-medium text-gray-200 py-1 px-2 rounded-md shadow-md flex flex-col gap-y-3 items-start shadow-emerald-400/50">Completed</label>
        </article>
        <article className="bg-base-light/40 px-4 py-3 rounded-md shadow-md flex flex-col gap-y-3 items-start">
          <p className="text-ellipsis overflow-hidden  w-24 lg:w-auto lg:h-auto h-14 text-sm font-medium text-gray-300">Here are the biggest enterprise technology of 2021 so fair, in reverse chronological order.</p>
          <label className="bg-red-400 text-sm font-medium text-gray-200 py-1 px-2 rounded-md shadow-md flex flex-col gap-y-3 items-start shadow-red-400/50">Pending</label>
        </article>
      </section>
    </section>
  );
};

export default TaskList;
