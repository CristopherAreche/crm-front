import axios from "axios";
import React, { useState } from "react";
import { obtainTask } from "../app/features/clientActivitiesSlice";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { RiDeleteBin3Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import UpdateTaskForm from "./forms/UpdateTaskForm";

export default function TaskCard({ task, clientId }) {
  const item = { ...task };
  const [state, setState] = useState(item.state);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  let due_date = new Date(item.due_date);

  const changeState = async () => {
    if (state === "Completado") {
      item.state = "Pendiente";
    } else {
      item.state = "Completado";
    }
    const { data } = await axios.put(`${process.env.REACT_APP_URL}/task`, {
      id: item.id,
      state: item.state,
    });
    setState(data.state);
  };

  const delTask = async (id) => {
    try {
      const result = await swal({
        title: "Estas Segur@?",
        text: "Esta acción, no es posible revertirla",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
      if (result) {
        const { data } = await axios.delete(
          `${process.env.REACT_APP_URL}/task?id=` + id
        );

        dispatch(obtainTask(clientId));

        await swal("Borrado!", data.message, "success");
      }
    } catch (error) {
      await swal("Error", `${error.response.data.error}`, "error");
    }
  };

  const isExpired = () => {
    const today = new Date(Date.now());
    return today >= due_date;
  };

  return (
    <article
      key={item.id}
      className="justify-between bg-base-light/40 px-4 py-3 rounded-md shadow-md flex flex-col  items-start gap-y-4"
    >
      <div className="flex flex-row justify-between w-full">
          <p className="text-ellipsis overflow-hidden  w-10/12 lg:w-auto lg:h-auto h-14 text-sm font-medium text-gray-300 ">
            {item.description}
          </p>
          <RiDeleteBin3Line
            className="text-2xl text-red-400 hover:text-red-400/70 active:text-red-500 cursor-pointer"
            onClick={() => {
              delTask(item.id);
            }}
          />
      </div>
      <div className="flex flex-col lg:flex-row justify-between w-full gap-4">
          <button
            onClick={changeState}
            className={`${
              state === "Pendiente"
                ? "bg-red-400 shadow-red-400/50"
                : "bg-green-400 shadow-green-400/50"
            } hover:scale-110 text-sm font-medium text-gray-200 py-1 px-2 rounded-md shadow-md flex flex-col gap-y-3 items-start `}
          >
            {state}
          </button>
          <p
            className={`text-ellipsis overflow-hidden  w-10/12 lg:w-auto lg:h-auto  text-sm font-medium text-gray-300
                    ${isExpired() ? "text-red-300" : "text-white"}`}
          >
            {`Exp: ${due_date.getDate()}/${
              due_date.getMonth() + 1
            }/${due_date.getFullYear()}`}
          </p>
        <button onClick={() => setShowModal(true)}>
          <FiEdit className="text-xl lg:text-2xl text-green-400 hover:text-green-400/70 active:text-green-500 cursor-pointer" />
        </button>
      </div>
      <UpdateTaskForm
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        task={{ ...item, due_date }}
      />
    </article>
  );
}
