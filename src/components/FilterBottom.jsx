import {
  RiAddFill,
  RiDeleteBin6Line,
  RiEdit2Line,
  RiUserUnfollowLine,
} from "react-icons/ri";
import CreateClient from "./forms/CreateClient";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putDisableClient } from "../services/clientsServices";

const FilterBottom = () => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch()
  const {clientSelected} = useSelector(state => state)
  const onDisable = () => dispatch(putDisableClient(clientSelected))


  return (
    <section className=" text-white text-bold flex justify-evenly w-full  items-center rounded-md flex-wrap gap-4 py-12">
      <button
        className=" rounded-xl py-2 px-3 shadow-emerald-400/20 hover:scale-[1.03] hover:bg-emerald-400/80 transition-all shadow-md bg-emerald-400 "
        onClick={() => setShowModal(true)}
      >
        <RiAddFill className="text-2xl" />
      </button>
      <button
        className=" rounded-xl py-2 px-3 shadow-indigo-400/20 hover:scale-[1.03] hover:bg-indigo-400/60 transition-all shadow-md bg-indigo-400 "
        onClick={() => setShowModal(true)}
      >
        <RiEdit2Line className="text-2xl" />
      </button>
      <button className=" rounded-xl py-2 px-3 shadow-gray-500/20 hover:scale-[1.03] hover:bg-gray-500/60 transition-all shadow-md bg-gray-500 " onClick={onDisable}>
        <RiUserUnfollowLine className="text-2xl" />
      </button>
      <button className=" rounded-xl py-2 px-3 shadow-red-400/20 hover:scale-[1.03] hover:bg-red-400/60 transition-all shadow-md bg-red-400 ">
        <RiDeleteBin6Line className="text-2xl" />
      </button>
      <CreateClient isVisible={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default FilterBottom;
