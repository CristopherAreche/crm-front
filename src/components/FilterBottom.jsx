import React from "react";
import { Link } from "react-router-dom";

const FilterBottom = () => {
  return (
    <div className=" text-white flex justify-evenly p-[0.6em] w-[80%] bg-[#24314c] rounded-full">
      <Link to="/vendedor_detalles_cliente">
        <button className="h-[2em] rounded-full bg-[#2c3860] w-[8em]">
          Detalles
        </button>
      </Link>
      <button className="h-[2em] rounded-full bg-[#2c3860] w-[8em]">
        Agregar
      </button>
      <button className="h-[2em] rounded-full bg-[#2c3860] w-[8em]">
        Editar
      </button>
      <button className="h-[2em] rounded-full bg-[#2c3860] w-[8em]">
        Deshabilitar
      </button>
      <button className="h-[2em] rounded-full bg-[#2c3860] w-[8em]">
        Eliminar
      </button>
    </div>
  );
};

export default FilterBottom;
