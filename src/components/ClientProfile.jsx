import React from "react";

const ClientProfile = () => {
  return (
    <div className="col-start-4 col-end-11 row-start-3">
      <div className="flex flex-col items-center gap-4">
        <h3 className="font-bold text-[2em] mb-2">Lista de tareas</h3>
        <div className="w-full">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-gray-300">#</th>
                <th className="px-4 py-2 bg-gray-300">Descripción</th>
                <th className="px-4 py-2 bg-gray-300">Estado</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">...</td>
                <td className="border px-4 py-2">Pendiente</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">...</td>
                <td className="border px-4 py-2">Completado</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">3</td>
                <td className="border px-4 py-2">...</td>
                <td className="border px-4 py-2">Pendiente</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className=" text-[2em] font-bold mb-2">Actividades registradas</h3>
        <div className=" w-full">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-gray-300">#</th>
                <th className="px-4 py-2 bg-gray-300">Descripción</th>
                <th className="px-4 py-2 bg-gray-300">Fecha</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">...</td>
                <td className="border px-4 py-2">2022-03-15</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">...</td>
                <td className="border px-4 py-2">2022-03-18</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">3</td>
                <td className="border px-4 py-2">...</td>
                <td className="border px-4 py-2">2022-03-19</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
