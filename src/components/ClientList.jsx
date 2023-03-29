import React from "react";

const ClientList = () => {
  return (
    <div className=" flex justify-center items-center flex-col row-start-5 col-start-3 col-end-5 ">
      <table className="shadow-1xl border-2 border-gray-500 w-full">
        <thead className="text-black">
          <tr>
            <th className="py-3 px-3 bg-gray-300">CB</th>
            <th className="py-3 px-3 bg-gray-300">Nombre</th>
            <th className="py-3 px-3 bg-gray-300">Total Comprado</th>
            <th className="py-3 px-3 bg-gray-300">Estado de Negociacion</th>
            <th className="py-3 px-3 bg-gray-300">VIP</th>
          </tr>
        </thead>
        <tbody className="text-center bg-white">
          <tr className="cursor-pointer duration-300 border-[1px]">
            <td>
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </td>
            <td className="py-3 px-6"> Gaspar</td>
            <td className="py-3 px-6"> 100</td>
            <td className="py-3 px-6"> Incompleto</td>
            <td className="py-3 px-6"> No</td>
          </tr>
          <tr className="cursor-pointer duration-300 border-[1px]">
            <td>
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </td>
            <td className="py-3 px-6"> Cristopher</td>
            <td className="py-3 px-6"> 100</td>
            <td className="py-3 px-6"> Incompleto</td>
            <td className="py-3 px-6"> No</td>
          </tr>
          <tr className="cursor-pointer duration-300 border-[1px]">
            <td>
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </td>
            <td className="py-3 px-6"> Macarena</td>
            <td className="py-3 px-6"> 100</td>
            <td className="py-3 px-6"> Incompleto</td>
            <td className="py-3 px-6"> No</td>
          </tr>
          <tr className="cursor-pointer duration-300 border-[1px]">
            <td>
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </td>
            <td className="py-3 px-6"> Ricardo</td>
            <td className="py-3 px-6"> 100</td>
            <td className="py-3 px-6"> Incompleto</td>
            <td className="py-3 px-6"> No</td>
          </tr>
          <tr className="cursor-pointer duration-300 border-[1px]">
            <td>
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </td>
            <td className="py-3 px-6"> Matias</td>
            <td className="py-3 px-6"> 100</td>
            <td className="py-3 px-6"> Incompleto</td>
            <td className="py-3 px-6"> No</td>
          </tr>
          <tr className="cursor-pointer duration-300 border-[1px]">
            <td>
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </td>
            <td className="py-3 px-6"> Matias</td>
            <td className="py-3 px-6"> 100</td>
            <td className="py-3 px-6"> Incompleto</td>
            <td className="py-3 px-6"> No</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ClientList;
