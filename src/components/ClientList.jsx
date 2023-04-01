import React from "react";

const ClientList = () => {
  return (
    <div className="w-[22rem] mx-auto overflow-x-auto lg:min-w-full py-6   lg:px-8 overflow-hidden mb-4">
      <table className="min-w-full text-center text-sm font-regular shadow-md rounded-sm  ">
        <thead className=" font-medium text-white  dark:bg-base-light/30 rounded-md">
          <tr>
            <th scope="col" className=" px-6 py-4">
              CB
            </th>
            <th scope="col" className=" px-6 py-4">
              Nombre
            </th>
            <th scope="col" className=" px-6 py-4">
              Total Comprado
            </th>
            <th scope="col" className=" px-6 py-4">
              Estado
            </th>
            <th scope="col" className=" px-6 py-4">
              VIP
            </th>
          </tr>
        </thead>
        <tbody className=" dark:border-light dark:bg-base-light/60">
          <tr className="border-b dark:border-base/30">
            <td className="whitespace-nowrap  px-6 py-4 font-medium">1</td>
            <td className="whitespace-nowrap  px-6 py-4  font-medium">
              Gaspar
            </td>
            <td className="whitespace-nowrap  px-6 py-4">100</td>
            <td className="whitespace-nowrap  px-6 py-4 text-emerald-200">
              Habilitado
            </td>
            <td className="whitespace-nowrap  px-6 py-4">No</td>
          </tr>
          <tr className="border-b dark:border-base/30">
            <td className="whitespace-nowrap  px-6 py-4 font-medium">2</td>
            <td className="whitespace-nowrap  px-6 py-4 font-medium">
              Cristopher
            </td>
            <td className="whitespace-nowrap  px-6 py-4">100</td>
            <td className="whitespace-nowrap  px-6 py-4 text-red-200">
              Desabilitado
            </td>
            <td className="whitespace-nowrap  px-6 py-4">No</td>
          </tr>
          <tr className="border-b dark:border-base/30">
            <td className="whitespace-nowrap  px-6 py-4 font-medium">3</td>
            <td className="whitespace-nowrap  px-6 py-4 font-medium">
              Macarena
            </td>
            <td className="whitespace-nowrap  px-6 py-4">100</td>
            <td className="whitespace-nowrap  px-6 py-4 text-emerald-200">
              Habilitado
            </td>
            <td className="whitespace-nowrap  px-6 py-4">No</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ClientList;
