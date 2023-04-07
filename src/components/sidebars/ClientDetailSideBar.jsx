import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getClient } from "../../services/clientsServices";
import { cleanDetail } from "../../app/features/clientSlice";
import { Link } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";

const ClientDetailSideBar = () => {
  const dispatch = useDispatch();
  const { clientDetail } = useSelector((state) => state.clients);
  const { id } = useParams();
  const role = useSelector((state) => state.clients.clientRole);

  useEffect(() => {
    dispatch(getClient(id));

    return () => dispatch(cleanDetail());
  }, [dispatch, id]);

  return (
    <section className="bg-base-light/80 lg:bg-base-light/40 col-start-1 col-end-3  flex flex-col gap-y-8 justify-center items-center  fixed lg:static  h-screen z-50 transition-all duration-200 lg:left-0">
      <div className=" flex flex-col justify-center items-center w-full">
        <img
          src="https://via.placeholder.com/150"
          alt="placeholder"
          className="w-28 h-28 rounded-full mb-8"
        />
        <div className="flex gap-x-2 w-[100%] justify-center">
          <div
            className={`${
              clientDetail.enable
                ? "bg-green-400 shadow-green-400/10"
                : "bg-gray-400 shadow-gray-400/10"
            } text-xs flex justify-center items-center rounded-full py-1 px-2 font-bold text-black shadow-md bottom-0 right-0`}
          >
            {clientDetail.enable ? "Habilitado" : "Deshabilitado"}
          </div>
          {clientDetail.vip === true ? (
            <div className=" text-center bg-yellow-400 py-2 px-4  rounded-full font-medium text-base-light shadow-md shadow-yellow-400/10">
              VIP
            </div>
          ) : null}
        </div>
      </div>
      <h4 className="text-light text-2xl  text-center font-medium">
        {clientDetail.name}
      </h4>
      <p className="text-light  text-sm font-medium ">
        <span className="text-gray-300">Email:</span> {clientDetail.email}
      </p>
      <p className="text-light text-sm font-medium ">
        <span className="text-gray-300">Teléfono:</span> {clientDetail.phone}
      </p>
      <div className="flex gap-x-4">
        <BiTask className="bg-light p-3 box-content text-xl rounded-full " />
        <AiOutlineMail className="bg-light text-xl rounded-full p-3 box-content " />
        <AiOutlinePhone className="bg-light shadow-md text-xl rounded-full p-3 box-content" />
      </div>
      <div className=" flex flex-col justify-center items-center">
        <p className="text-2xl text-light font-medium">
          $ {clientDetail.totalPurchased}
        </p>
        <p className="text-light/80 font-medium ">Total pagado</p>
      </div>
      {role !== "admin" ? (
        <Link
          to="crm-front/dashboard/all_clients"
          className="flex px-12 py-2  active:scale-95 active:bg-light/20 gap-x-6 items-center text-lg text-gray-300 font-medium   cursor-pointer  hover:text-gray-100 transition-all"
        >
          <RiLogoutCircleRLine className="text-2xl text-secondary" />
          Volver
        </Link>
      ) : (
        <Link
          to="#"
          className="flex px-12 py-2  active:scale-95 active:bg-light/20 gap-x-6 items-center text-lg text-gray-300 font-medium   cursor-pointer  hover:text-gray-100 transition-all"
        >
          <RiLogoutCircleRLine className="text-2xl text-secondary" />
          Volver
        </Link>
      )}
    </section>
  );
};

export default ClientDetailSideBar;
