import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import {
  RiBarChart2Line,
  RiTeamLine,
  RiLogoutCircleRLine,
  // RiMenu3Fill,
  // RiCloseFill,
} from "react-icons/ri";
import { useState } from "react";
// import spotlight1 from "../assets/svg/Spotlight1.svg";
// import spotlight2 from "../assets/svg/Spotlight2.svg";

function SideBarDetail({
  clients,
  routeClients,
  salesMans,
  routeSalesMans,
  inventario,
  routeInventario,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      className={`${
        isOpen ? "left-0" : "-left-full"
      } bg-base-light/40 w-68 lg:w-full  flex flex-col gap-y-8 justify-between py-4 px-12 lg:static h-full z-40 transition-all duration-200 lg:left-0 border-r border-light/40 `}
    >
      <section className="flex flex-col gap-y-4">
        <h1 className="mt-6 text-4xl font-bold tracking-widest text-center border-b border-light/40 pb-8">
          LOGO
        </h1>
        <p className="flex justify-center gap-x-4 items-center text-xl text-gray-300 font-medium py-2 rounded-lg cursor-pointer  px-4 hover:bg-base/20 hover:text-gray-100 transition-all">
          Gaspar@gmail.com
        </p>
        <p className="justify-center text-[2.6em] flex gap-x-4 items-center text-xl text-gray-300 font-medium py-2 rounded-lg cursor-pointer  px-4 hover:bg-base/20  hover:text-gray-100 transition-all">
          Gaspar
        </p>
        <div className="flex justify-evenly">
          <BiTask className="bg-slate-600 text-[3.5em] rounded-full p-3" />
          <AiOutlineMail className="bg-slate-600 text-[3.5em] rounded-full p-3" />
          <AiOutlinePhone className="bg-slate-600 text-[3.5em] rounded-full p-3" />
        </div>
        <div className="my-2 flex flex-col justify-center items-center">
          <p className="text-[2em] font-bold">$34,321</p>
          <p>Total pagado</p>
        </div>
        <div className="px-8 my-2 flex flex-wrap justify-between text-black">
          <div className="bg-yellow-400 py-3 px-6 rounded-lg">VIP</div>
          <div className="bg-blue-400 py-3 px-6 rounded-lg">Categoria</div>
        </div>
      </section>
      <div className=" flex justify-center">
        <Link
          to="/vendedor_cliente"
          className="flex items-center gap-x-2 py-2 rounded-lg cursor-pointer text-gray-300 px-4 text-lg hover:bg-base/20 hover:text-gray-100 transition-all"
        >
          <RiLogoutCircleRLine className="text-3xl" /> Volver
        </Link>
      </div>
    </section>
  );
}

export default SideBarDetail;
