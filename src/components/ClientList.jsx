import React from "react";

const ClientList = () => {
  return (
    <body className="bg-white flex justify-center items-center flex-col h-screen">
      <table className="shadow-2xl font-[Poppins] border-2 border-black w-6/12">
        <thead className="text-black">
          <tr>
            <th className="py-3 px-3 bg-gray-300">Nombre</th>
            <th className="py-3 px-3 bg-gray-300">Total Comprado</th>
            <th className="py-3 px-3 bg-gray-300">Estado de Negociacion</th>
            <th className="py-3 px-3 bg-gray-300">VIP</th>
          </tr>
        </thead>
        <tbody className="text-center bg-white">
          <tr className="cursor-pointer duration-300 border-[1px]">
            <td className="py-3 px-6"> Gaspar</td>
            <td className="py-3 px-6"> 100</td>
            <td className="py-3 px-6"> Incompleto</td>
            <td className="py-3 px-6"> No</td>
          </tr>
          <tr className="cursor-pointer duration-300 border-[1px]">
            <td className="py-3 px-6"> Cristopher</td>
            <td className="py-3 px-6"> 100</td>
            <td className="py-3 px-6"> Incompleto</td>
            <td className="py-3 px-6"> No</td>
          </tr>
          <tr className="cursor-pointer duration-300 border-[1px]">
            <td className="py-3 px-6"> Macarena</td>
            <td className="py-3 px-6"> 100</td>
            <td className="py-3 px-6"> Incompleto</td>
            <td className="py-3 px-6"> No</td>
          </tr>
          <tr className="cursor-pointer duration-300 border-[1px]">
            <td className="py-3 px-6"> Ricardo</td>
            <td className="py-3 px-6"> 100</td>
            <td className="py-3 px-6"> Incompleto</td>
            <td className="py-3 px-6"> No</td>
          </tr>
          <tr className="cursor-pointer duration-300 border-[1px]">
            <td className="py-3 px-6"> Matias</td>
            <td className="py-3 px-6"> 100</td>
            <td className="py-3 px-6"> Incompleto</td>
            <td className="py-3 px-6"> No</td>
          </tr>
        </tbody>
      </table>
    </body>
  );
};

export default ClientList;
