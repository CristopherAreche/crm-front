import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiCloseFill, RiLogoutCircleRLine, RiMenu3Fill } from "react-icons/ri";
import ContentDetailSidebar from "./ContentDetailSidebar";

const ClientDetailSideBar = () => {
  const role = useSelector((state) => state.auth.userRole);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section
        className={`${
          isOpen ? "left-0" : "-left-full"
        }  bg-base-light/80 lg:bg-base-light/40 w-72 lg:w-72  flex flex-col  justify-between py-4 fixed   h-full z-50 transition-all duration-200 lg:left-0 overflow-y-auto`}
      >
        <ContentDetailSidebar />
        {role !== "admin" ? (
          <Link
            to="/dashboard/all_clients"
            className="flex px-12 py-2  active:scale-95 active:bg-light/20 gap-x-6 items-center text-lg text-gray-300 font-medium   cursor-pointer  hover:text-gray-100 transition-all"
          >
            <RiLogoutCircleRLine className="text-2xl text-secondary" />
            Volver
          </Link>
        ) : (
          <Link
            to="/dashboard/all_clients"
            className="flex px-12 py-2  active:scale-95 active:bg-light/20 gap-x-6 items-center text-lg text-gray-300 font-medium   cursor-pointer  hover:text-gray-100 transition-all"
          >
            <RiLogoutCircleRLine className="text-2xl text-secondary" />
            Volver
          </Link>
        )}
      </section>
      <button
        className="absolute bottom-6 right-8 text-4xl lg:hidden bg-base-light/60 rounded-full py-1 px-2 box-content z-50 text-light"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <RiCloseFill /> : <RiMenu3Fill />}
      </button>
    </>
  );
};

export default ClientDetailSideBar;
