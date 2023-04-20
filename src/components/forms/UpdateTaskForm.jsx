import React from "react";
import { useState } from "react";
import validation from "../../utils/validation";
import swal from "sweetalert";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { updateTask } from "../../app/features/clientActivitiesSlice";

function UpdateTaskForm({ isVisible, onClose, task }) {
  const dispatch = useDispatch();
  const [taskData, setTaskData] = useState(task);
  const [startDate, setStartDate] = useState(new Date(taskData.due_date));

  const handleDate = (date) => {
    setStartDate(date);
    setTaskData({ ...taskData, due_date: date });
  };

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const [errors, setErrors] = useState({
    description: "",
    due_date: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setTaskData({
      ...taskData,
      [property]: value,
    });

    setErrors(
      validation({
        ...taskData,
        [property]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (errors.description || errors.due_date) {
      swal("Error", "Por favor revise los datos introducidos. ", "error");
    } else {
      swal({
        title: "Estas seguro que deseas cambiar los datos?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((edit) => {
        dispatch(updateTask(taskData));
        if (edit) {
          swal(
            "La tarea fue  agregada",
            setTaskData({
              description: "",
              due_date: "",
            }),
            onClose(),
            {
              icon: "success",
            }
          );
        } else {
          swal("La terea no ha sido agregada");
        }
      });
    }
  };
  if (!isVisible) return null;
  return (
    <div
      className="fixed inset-0 z-[-1]  bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      {" "}
      <form
        className=" w-96 bg-base-light/60 py-6 px-4 rounded-md flex flex-col gap-y-4 z-50"
        onSubmit={handleSubmit}
      >
        <h4 className="text-xl font-medium text-light">
          {"Editar Tarea"}
        </h4>
        <section className="flex flex-col gap-y-2">
          <label className="text-sm font-medium text-light" htmlFor="name">
            Descripcion
          </label>
          <div className="relative">
            <input
              className="bg-base-light/70 py-1 h-[6em] rounded-md outline-none pl-8 pr-4 w-full"
              type="text"
              value={taskData.description}
              name="description"
              onChange={handleInputChange}
            />
          </div>
          {errors.name && <span style={{ color: "red" }}> {errors.name}</span>}
        </section>

        <section className="flex flex-col gap-y-2">
          <label className="text-sm font-medium text-light" htmlFor="phone">
            Fecha:{" "}
          </label>
          <div className="relative">
            <DatePicker
              value={startDate}
              selected={startDate}
              onChange={(date) => handleDate(date)}
              dateFormat="dd/MM/yyyy"
              className="bg-gray-700 text-white appearance-none border rounded w-full py-2 px-6 leading-tight focus:outline-none focus:shadow-outline text-center"
            />
          </div>
          {/* {errors.summary && (
            <span style={{ color: "red" }}> {errors.phone}</span>
          )} */}
        </section>

        <footer className="flex justify-between items-center">
          <button
            type="button"
            className="p-2 rounded-md font-medium text-base bg-gray-300 shadow-md shadow-gray-300/20 hover:bg-gray-300/80 transition-all"
            onClick={() => {
              onClose();
            }}
          >
            CERRAR
          </button>
          <button
            className="p-2 bg-emerald-400 shadow-md shadow-emerald-400/20 rounded-md hover:bg-emerald-400/80 transition-all"
            type="submit"
          >
            {taskData.clientId ? "Actualizar" : "Guardar"}
          </button>
        </footer>
      </form>
    </div>
  );
}

export default UpdateTaskForm;
