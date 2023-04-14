import React, { useState } from "react";
import { editTask } from "../../app/features/clientActivitiesSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RegisterTaskForm = ({ onClose }) => {
  const [description, setDescription] = useState("");
  const [state, setState] = useState("Concretado");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();

  const salesmanId = "7155a9d8-acff-4cf9-93fd-385830b9bcae";
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
    dispatch(editTask(obj));
    onClose();
  };

  return (
    <div className="fixed inset-0  bg-black  bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className=" w-[100vw] lg:w-[30vw] bg-base/60 rounded-md flex flex-col items-center justify-center h-[35em]"
      >
        <div className=" flex flex-col justify-center items-center w-[100%] h-[85%]">
          {/* Metodo */}
          <div className="  w-[100%] h-[25%] flex gap-x-16 justify-center items-center">
            {/* Estado */}
            <label className="block">
              {/* <span className="text-white">Estado</span>
              <select
                className="form-select mt-1 block w-full"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="Concretado">Concretado</option>
                <option value="Pendiente">Pendiente</option>
              </select> */}
            </label>
          </div>
          <div className=" w-[100%] h-[75%] flex  flex-col justify-center items-center gap-y-3">
            {/* text */}
            <label className="block">
              <span className="text-white">Descripcion </span>
              {/* <input type="text" className="h-[6em] w-[100%]" /> */}
              <textarea
                id="message"
                rows="4"
                className="w-[100%] block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Escribe aqui..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </label>
            <div className="mb-4">
              <label
                htmlFor="date"
                className="block text-gray-700 font-bold mb-2"
              >
                Fecha
              </label>
              <DatePicker
                value={selectedDate}
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
