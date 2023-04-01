import React from "react";
import { Link } from "react-router-dom";
import CreateClient from "./forms/CreateClient";
import { useState } from "react";

const FilterBottom = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className=" text-white text-bold flex justify-evenly w-full bg-base-light/40 items-center py-4 rounded-md flex-wrap gap-4">
      <Link to="/vendedor_detalles_cliente">
        <button className=" rounded-xl py-2 px-3 shadow-orange-400/20 shadow-md bg-orange-400 ">
          Detalles
        </button>
      </Link>
      <button
        className=" rounded-xl py-2 px-3 shadow-emerald-400/20 shadow-md bg-emerald-400 "
        onClick={() => setShowModal(true)}
      >
        Agregar
      </button>
      <button
        className=" rounded-xl py-2 px-3 shadow-indigo-400/20 shadow-md bg-indigo-400 "
        onClick={() => setShowModal(true)}
      >
        Editar
      </button>
      <button className=" rounded-xl py-2 px-3 shadow-gray-500/20 shadow-md bg-gray-500 ">
        Deshabilitar
      </button>
      <button className=" rounded-xl py-2 px-3 shadow-red-400/20 shadow-md bg-red-400 ">
        Eliminar
      </button>
      <CreateClient isVisible={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default FilterBottom;
