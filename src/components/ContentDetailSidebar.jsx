import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getClient } from "../services/clientsServices";
import { cleanDetail } from "../app/features/clientSlice";

const ContentDetailSidebar = () => {
  const dispatch = useDispatch();
  const { clientDetail } = useSelector((state) => state.clients);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getClient(id));

    return () => dispatch(cleanDetail());
  }, [dispatch, id]);

  return (
    <section className="flex items-center flex-col gap-y-3 px-8 w-full">
      <div className="relative">
        <img
          src="https://via.placeholder.com/150"
          alt="placeholder"
          className="w-28 h-28 rounded-full "
        />
        <div
          className={`${
            clientDetail.enable
              ? "bg-green-400 shadow-green-400/10"
              : "bg-gray-400 shadow-gray-400/10"
          } text-xs text-center rounded-full py-1 px-2 font-bold text-white shadow-md absolute bottom-0 right-0`}
        >
          {clientDetail.enable ? "Habilitado" : "Deshabilitado"}
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

      {clientDetail.vip === true ? (
        <div className="bg-yellow-400 py-2 px-4  rounded-lg font-medium text-base-light shadow-md shadow-yellow-400/10">
          VIP
        </div>
      ) : null}
    </section>
  );
};

export default ContentDetailSidebar;
