import React from 'react';

const Inventory = () => {
  return (
    <div className="flex flex-col items-end">
      <div className="mt-10 w-1/2">
        <input
          type="text"
          placeholder="Buscar en inventario"
          className="border-gray-300 border-solid border-2 rounded-md p-2 w-96"
        />
      </div>
      <div className="mt-4 w-1/2">
        <select
          className="border-gray-300 border-solid border-2 rounded-md p-2 w-96"
        >
          <option value="filtro" disabled>Selecciona una opcion</option>
          <option value="filtro">Filtros</option>
          <option value="ordenamiento">Ordenamientos</option>
        </select>
      </div>
    </div>
  );
};

export default Inventory;