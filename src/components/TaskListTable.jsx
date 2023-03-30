import React from "react";

const TaskListTable = () => {
  return (
    <div className="h-24 col-start-4 col-end-11 row-start-3">
      <div className="flex flex-col items-center gap-4">
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
      </div>
    </div>
  );
};

export default TaskListTable;
