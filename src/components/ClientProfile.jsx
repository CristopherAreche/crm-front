import React from 'react'
import Header from './Header'
const ClientProfile = () => {
  return (
    <div className="bg-gray-100">
      <div className="">
        <Header mainText="Cliente" />
      </div>
      <div className="flex flex-col items-center gap-4 mt-10 ">
        <div>
          <h3 className="text-lg font-bold mb-2">Lista de tareas</h3>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Descripción</th>
                <th className="px-4 py-2">Estado</th>
              </tr>
            </thead>
            <tbody>
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
        <div>
          <h3 className="text-lg font-bold mb-2">Actividades registradas</h3>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Descripción</th>
                <th className="px-4 py-2">Fecha</th>
              </tr>
            </thead>
            <tbody>
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
  )
}

export default ClientProfile