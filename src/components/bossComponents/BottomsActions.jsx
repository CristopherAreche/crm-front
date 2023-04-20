import React from "react";
import { RiVipCrown2Line } from "react-icons/ri";
import { toggleVipClient } from "../../services/clientsServices";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

const BottomsActions = () => {
  const clientSelected = useSelector((state) => state.clients.clientSelected);
  const dispatch = useDispatch();
  const onPromoteVip = () => {
   
    dispatch(toggleVipClient({ clientSelected, vip: true }));
  };
  const OnUnsubscribeVip = () => {
   
    dispatch(toggleVipClient({ clientSelected, vip: false }));
  };

  return (
    <section className=" text-white text-bold flex justify-evenly w-full  items-center rounded-md flex-wrap gap-4 pt-8">
      <button
        className="group rounded-xl py-2 px-3 shadow-orange-400/20 hover:scale-[1.03] hover:bg-orange-400/60 transition-all shadow-md bg-orange-400 "
        onClick={onPromoteVip}
      >
        <RiVipCrown2Line className="text-2xl" />
        <span className="absolute hidden group-hover:flex -left-3 -top-2 -translate-y-full w-auto px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
          Agregar VIP
        </span>
      </button>
      <button
        className="group rounded-xl py-2 px-3 shadow-gray-400/20 hover:scale-[1.03] hover:bg-gray-400/60 transition-all shadow-md bg-gray-400 "
        onClick={OnUnsubscribeVip}
      >
        <RiVipCrown2Line className="text-2xl" />
        <span className="absolute hidden group-hover:flex -left-3 -top-2 -translate-y-full w-auto px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
          Remover VIP
        </span>
      </button>
    </section>
  );
};

export default BottomsActions;
