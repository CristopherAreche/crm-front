import React from "react";

const Inventory = () => {
  return (
    <div className="col-start-11 col-end-13 row-start-2 row-end-7 flex flex-col pt-20 items-center">
      <div className="">
        <input
          type="text"
          placeholder="Buscar en inventario"
          className="border-gray-300 border-solid border-2 rounded-md p-2"
        />
      </div>
      <div className="mt-3">
        <select className="border-gray-300 border-solid border-2 rounded-md p-2">
          <option value="filtro" disabled>
            Selecciona una opcion
          </option>
          <option value="filtro">Filtros</option>
          <option value="ordenamiento">Ordenamientos</option>
        </select>
      </div>
    </div>
  );
};

export default Inventory;
