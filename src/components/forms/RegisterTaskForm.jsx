import React, { useState } from "react";
import { postTask } from "../../app/features/clientActivitiesSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";

const RegisterTaskForm = ({ onClose }) => {
  const [description, setDescription] = useState("");
  const [state, setState] = useState("Concretado");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();

  const salesmanId = useSelector((state) => state.auth.User.id);
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      salesmanId,
      clientId: id,
      state: "Pendiente",
      description,
      due_date: selectedDate,
    };
    dispatch(postTask(obj));
    onClose();
  };

  return (
    <div className="fixed inset-0  bg-black  bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className=" w-[100vw] lg:w-[27vw] bg-base/60 rounded-md flex flex-col items-center justify-center h-[25em]"
      >
        <div className=" flex flex-col justify-center items-center w-[100%] h-[85%]">
          <div className="flex  flex-col justify-center items-center gap-y-3">
            {/* text */}
            <p className="text-white font-bold text-[1.2em]">Crear Tarea</p>
            <div className="w-[100%]">
              <span className="text-white font-bold mb-2">Descripcion </span>
              <textarea
                id="message"
                rows="4"
                className="w-[100%] block p-2.5 text-sm text-white  rounded-lg border bg-gray-700"
                placeholder="Escribe aqui..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-white font-bold mb-2">
                Fecha
              </label>
              <DatePicker
                value={selectedDate}
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                className="bg-gray-700 text-white appearance-none border rounded w-full py-2 px-6 leading-tight focus:outline-none focus:shadow-outline text-center"
              />
            </div>
          </div>
        </div>
        <div className=" flex  w-[100%] h-[15%] justify-center items-center gap-x-20">
          <button
            type="submit"
            className=" p-2 rounded-md font-medium text-base bg-green-300 shadow-md shadow-gray-300/20 hover:bg-gray-300/80 transition-all"
          >
            Crear
          </button>
          <button
            className=" p-2 rounded-md font-medium text-base bg-red-300 shadow-md shadow-gray-300/20 hover:bg-gray-300/80 transition-all"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterTaskForm;
