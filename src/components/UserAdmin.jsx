import React from "react";
import { Link } from "react-router-dom";
import { RiBarChart2Line, RiTeamLine } from "react-icons/ri";
import { MdOutlineInventory2, MdSell } from "react-icons/md";

const UserAdmin = () => {
  return (
    <>
      <section className="flex flex-col gap-y-2 items-center mb-6">
        <img
          src="https://via.placeholder.com/150"
          alt="placeholder"
          className="w-28 h-28 rounded-full "
        />
      </section>
      <section className="flex flex-col gap-y-4 ">
        <Link
          to="/vendedor"
          className="flex px-12 py-2 gap-x-6 items-center text-lg text-gray-300 font-medium   cursor-pointer  hover:bg-light/20 hover:text-gray-100 transition-all"
        >
          <RiBarChart2Line className="text-3xl text-secondary" /> Resumen
        </Link>
        <Link
          to="/vendedor/clientes"
          className="flex px-12 py-2 gap-x-6 items-center text-lg text-gray-300 font-medium   cursor-pointer  hover:bg-light/20  hover:text-gray-100 transition-all"
        >
          <RiTeamLine className="text-3xl text-secondary" /> Clientes
        </Link>
        <Link
          to="#"
          className="flex px-12 py-2 gap-x-6 items-center text-lg text-gray-300 font-medium   cursor-pointer  hover:bg-light/20  hover:text-gray-100 transition-all"
        >
          <MdSell className="text-3xl text-secondary" /> Vendedores
        </Link>
        <Link
          to="#"
          className="flex px-12 py-2 gap-x-6 items-center text-lg text-gray-300 font-medium   cursor-pointer  hover:bg-light/20  hover:text-gray-100 transition-all"
        >
          <MdOutlineInventory2 className="text-3xl text-secondary" /> Inventario
        </Link>
      </section>
    </>
  );
};

export default UserAdmin;
