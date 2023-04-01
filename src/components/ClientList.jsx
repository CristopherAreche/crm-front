import React from "react";
import { RiFilter3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const ClientList = () => {
  return (
    <div className="w-[22rem] mx-auto overflow-x-auto lg:min-w-full  py-6 lg:px-8 overflow-hidden  ">
      <div className="flex justify-between  w-full px-8 py-2   bg-base-light/30 rounded-tr-md rounded-tl-md">
        <h3 className=" text-xl font-medium text-light flex items-center gap-x-2"> <RiFilter3Line className="text-2xl"/>Tus clientes</h3>
      </div>
      <table className="min-w-full text-center text-sm font-regular shadow-md rounded-sm  ">
        <thead className=" font-medium text-light/75  dark:bg-base-light/30 rounded-md">
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
            <td className="whitespace-nowrap  px-6 py-4 font-medium">
              <input type="checkbox" className=" "/>
            </td>
            <td className="whitespace-nowrap  px-6 py-4  font-medium text-secondary hover:text-secondary/80 hover:underline transition-all">
              <Link to='/vendedor_detalles_cliente'>Ervin Howell</Link>
            </td>
            <td className="whitespace-nowrap  px-6 py-4">100</td>
            <td className="whitespace-nowrap  px-6 py-4 text-emerald-200">
              Habilitado
            </td>
            <td className="whitespace-nowrap  px-6 py-4">No</td>
          </tr>
          <tr className="border-b dark:border-base/30">
            <td className="whitespace-nowrap  px-6 py-4 font-medium">
              <input type="checkbox" className=" "/>

            </td>
            <td className="whitespace-nowrap  px-6 py-4  font-medium text-secondary hover:text-secondary/80 hover:underline transition-all">
              <Link to='/vendedor_detalles_cliente'>Clementine Bauch</Link>
            </td>
            <td className="whitespace-nowrap  px-6 py-4">100</td>
            <td className="whitespace-nowrap  px-6 py-4 text-red-200">
              Desabilitado
            </td>
            <td className="whitespace-nowrap  px-6 py-4">No</td>
          </tr>
          <tr className="border-b dark:border-base/30">
            <td className="whitespace-nowrap  px-6 py-4 font-medium">
              <input type="checkbox" className=" "/>

            </td>
            <td className="whitespace-nowrap  px-6 py-4  font-medium text-secondary hover:text-secondary/80 hover:underline transition-all">
              <Link to='/vendedor_detalles_cliente'>Leanne Graham</Link>
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
