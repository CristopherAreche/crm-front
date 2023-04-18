import { RiCalendarCheckFill, RiLoader4Fill } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import ToDoCard from "./ToDoCard";
import axios from "axios";
import swal from "sweetalert";
import { useSelector } from "react-redux";

export default function ToDoList() {
  const [listToDos, setListToDos] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState("loading");
  const user = useSelector((state) => state.auth.User);

  const fetchData = async (salesmanId) => {
    try {
      const { data } = await axios.get(
        "https://crm.up.railway.app/api/task?salesmanId=" + salesmanId
      );
      return data
    } catch (error) {
      setLoadingStatus("failed")
      await swal("Error", `${error.response.data.error}`, "error");
    }
  };

  useEffect(() => {
    (async () => {
      if(user?.id) {
        setLoadingStatus("loading")
        const todos = await fetchData(user?.id)
        setListToDos(todos)
        setLoadingStatus("succeeded")
      }
    })()
   
  }, [user?.id]);



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
        const { data } = await axios.delete(`${URL}/task?id=` + id);

        fetchData();

        await swal("Borrado!", data.message, "success");
      }
    } catch (error) {
      await swal("Error", `${error.response.data.error}`, "error");
    }
  };

  if (loadingStatus === "loading") {
    return (
      <div className="flex justify-center w-full">
        <RiLoader4Fill className="animate-spin text-4xl text-secondary mt-8" />
      </div>
    );
  } else if (loadingStatus === "succeeded") {
    return (
      <section className="flex flex-col  overflow-x-auto lg:min-w-full mt-6 h-auto overflow-y-auto ">
        <header className=" flex justify-between w-screen lg:w-full px-8 py-4   bg-base-light/30 rounded-tr-md rounded-tl-md  ">
          <h3 className=" text-xl font-medium text-light flex items-center gap-x-2">
            <RiCalendarCheckFill className="text-2xl" />
            {!listToDos.length ? "No hay tareas disponibles" : "Tareas"}
          </h3>
          <div></div>
        </header>
        {!listToDos.length ? (
          <div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/task-completion-6333613-5230173.png"
              alt="No hay tareas"
              className="w-72 h-72"
            />
          </div>
        ) : (
          <table className="min-w-full  text-center text-sm font-regular shadow-md rounded-sm">
            <thead className=" font-medium text-light/75  dark:bg-base-light/30 rounded-md">
              <tr className=" w-full">
                <th scope="col" className=" px-6 py-4">
                  cb
                </th>
                <th scope="col" className=" px-6 py-4">
                  Descripción
                </th>
                <th scope="col" className=" px-6 py-4">
                  Fecha de Vencimiento
                </th>
                <th scope="col" className=" px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className=" dark:border-light dark:bg-base-light/60">
              {listToDos?.map((item) => (
                <ToDoCard key={item.id} item={item} delTask={delTask} />
              ))}
            </tbody>
          </table>
        )}
      </section>
    );
  } else if (loadingStatus === "failed") {
    return <div>{"error"}</div>;
  }
}
