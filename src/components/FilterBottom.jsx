import React from "react";
import { Link } from "react-router-dom";

const FilterBottom = () => {
  return (
    <div className=" text-white text-bold flex justify-evenly w-full bg-base-light/40 items-center py-4 rounded-md flex-wrap gap-4">
      <Link to="/vendedor_detalles_cliente">
        <button className=" rounded-xl py-2 px-3 shadow-orange-400/20 shadow-md bg-orange-400 ">
          Detalles
        </button>
      </Link>
      <button className=" rounded-xl py-2 px-3 shadow-emerald-400/20 shadow-md bg-emerald-400 ">
        Agregar
      </button>
      <button className=" rounded-xl py-2 px-3 shadow-indigo-400/20 shadow-md bg-indigo-400 ">
        Editar
      </button>
      <button className=" rounded-xl py-2 px-3 shadow-gray-500/20 shadow-md bg-gray-500 ">
        Deshabilitar
      </button>
      <button className=" rounded-xl py-2 px-3 shadow-red-400/20 shadow-md bg-red-400 ">
        Eliminar
      </button>
    </div>
  );
};

export default FilterBottom;
