import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getClient } from "../services/clientsServices";
import { cleanDetail } from "../app/store/clientSlice";

const ClientSideBarDetail = () => {
  const dispatch = useDispatch();
  const { clientDetail } = useSelector((state) => state.clients);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getClient(id));

    return () => dispatch(cleanDetail());
  }, [dispatch, id]);

  return (
    <>
      <h4 className="text-light text-3xl text-center font-medium">
        {clientDetail.name}
      </h4>
      <p className="text-light text-sm font-medium text-center">
        <span className="text-gray-400">Email:</span> {clientDetail.email}
      </p>
      <p className="text-light text-sm font-medium text-center">
        <span className="text-gray-400">Telefono:</span> {clientDetail.phone}
      </p>
      <div className="flex justify-center gap-x-4">
        <BiTask className="bg-light p-3 box-content text-xl rounded-full " />
        <AiOutlineMail className="bg-light text-xl rounded-full p-3 box-content " />
        <AiOutlinePhone className="bg-light text-xl rounded-full p-3 box-content" />
      </div>
      <div className=" flex flex-col gap-y-1 justify-center items-center">
        <p className="text-4xl text-secondary font-medium">
          {clientDetail.totalPurchased}
        </p>
        <p className="text-light text-lg ">Total pagado</p>
      </div>
      <div className="flex justify-center gap-x-4">
        {clientDetail.vip === true ? (
          <div className="bg-yellow-400 py-3 px-6 rounded-lg font-medium text-base-light shadow-md shadow-yellow-400/10">
            VIP
          </div>
        ) : null}

        {clientDetail.enable === true ? (
          <div className="bg-green-400 py-3 px-6 rounded-lg font-medium text-base-light shadow-md shadow-green-400/10">
            Enable
          </div>
        ) : (
          <div className="bg-gray-400 py-3 px-6 rounded-lg font-medium text-base-light shadow-md shadow-green-400/10">
            Disable
          </div>
        )}
      </div>
    </>
  );
};

export default ClientSideBarDetail;
