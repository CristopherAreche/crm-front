import React from "react";
import { RiBookReadLine } from "react-icons/ri";

const TaskList = () => {
  return (
    <section className=" text-white mb-6">
      <h4 className="text-2xl text-light font-medium flex gap-x-4 items-center mb-6">
        <RiBookReadLine className="text-4xl" /> Lista de Tareas
      </h4>
      <section className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <article className="bg-base-light/40 px-4 py-3 rounded-md shadow-md flex flex-col gap-y-3 items-start">
          <p className="text-ellipsis overflow-hidden  w-24 lg:w-auto lg:h-auto h-14 text-sm font-medium text-gray-300 ">
            Actualizar la información de los productos que ofrece en la
            aplicación CRM.
          </p>
          <label className="bg-red-400 text-sm font-medium text-gray-200 py-1 px-2 rounded-md shadow-md flex flex-col gap-y-3 items-start shadow-red-400/50">
            Pendiente
          </label>
        </article>
        <article className="bg-base-light/40 px-4 py-3 rounded-md shadow-md flex flex-col gap-y-3 items-start">
          <p className="text-ellipsis overflow-hidden  w-24 lg:w-auto lg:h-auto h-14 text-sm font-medium text-gray-300">
            Realizar seguimiento de los clientes potenciales que muestran
            interés en sus productos.
          </p>
          <label className="bg-red-400 text-sm font-medium text-gray-200 py-1 px-2 rounded-md shadow-md flex flex-col gap-y-3 items-start shadow-red-400/50">
            Pendiente
          </label>
        </article>
        <article className="bg-base-light/40 px-4 py-3 rounded-md shadow-md flex flex-col gap-y-3 items-start">
          <p className="text-ellipsis overflow-hidden  w-24 lg:w-auto lg:h-auto h-14 text-sm font-medium text-gray-300">
            Hacer un seguimiento de las oportunidades de venta y mantener
            actualizado el estado de cada una en la aplicación CRM.
          </p>
          <label className="bg-emerald-400 text-sm font-medium text-gray-200 py-1 px-2 rounded-md shadow-md flex flex-col gap-y-3 items-start shadow-emerald-400/50">
            Completada
          </label>
        </article>
        <article className="bg-base-light/40 px-4 py-3 rounded-md shadow-md flex flex-col gap-y-3 items-start">
          <p className="text-ellipsis overflow-hidden  w-24 lg:w-auto lg:h-auto h-14 text-sm font-medium text-gray-300">
            Gestionar el proceso de ventas desde la identificación de un cliente
            potencial hasta la realización de la venta.
          </p>
          <label className="bg-emerald-400 text-sm font-medium text-gray-200 py-1 px-2 rounded-md shadow-md flex flex-col gap-y-3 items-start shadow-emerald-400/50">
            Completada
          </label>
        </article>
        <article className="bg-base-light/40 px-4 py-3 rounded-md shadow-md flex flex-col gap-y-3 items-start">
          <p className="text-ellipsis overflow-hidden  w-24 lg:w-auto lg:h-auto h-14 text-sm font-medium text-gray-300">
            Realizar el seguimiento postventa con los clientes para asegurarse
            de su satisfacción con los productos adquiridos.
          </p>
          <label className="bg-red-400 text-sm font-medium text-gray-200 py-1 px-2 rounded-md shadow-md flex flex-col gap-y-3 items-start shadow-red-400/50">
            Pendiente
          </label>
        </article>
        <article className="bg-base-light/40 px-4 py-3 rounded-md shadow-md flex flex-col gap-y-3 items-start">
          <p className="text-ellipsis overflow-hidden  w-24 lg:w-auto lg:h-auto h-14 text-sm font-medium text-gray-300">
            Gestionar la facturación y pagos de los clientes a través de la
            aplicación CRM.
          </p>
          <label className="bg-emerald-400 text-sm font-medium text-gray-200 py-1 px-2 rounded-md shadow-md flex flex-col gap-y-3 items-start shadow-emerald-400/50">
            Completada
          </label>
        </article>
      </section>
    </section>
  );
};

export default TaskList;
