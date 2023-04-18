import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtainActivities } from "../app/features/clientActivitiesSlice.js";
import { useParams } from "react-router-dom";
import { SpinningCircles } from "react-loading-icons";

const RegisterActivityTable = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities.activitiesFilter);
  const reversedActivities = [...activities].reverse();
  const activitiesStatus = useSelector((state) => state.activities.status);
  const activitiesError = useSelector((state) => state.activities.error);
  const { id } = useParams();
  const [hoveredSubject, setHoveredSubject] = useState("");

  useEffect(() => {
    dispatch(obtainActivities(id));
  }, [dispatch, id]);

  if (activitiesStatus === "loading") {
    return (
      <div className="pt-2 flex justify-center">
        <SpinningCircles />
      </div>
    );
  }

  if (activitiesStatus === "failed") {
    return <div>Error: {activitiesError}</div>;
  }

  // if(!reversedActivities.length && activitiesStatus !== 'loading') {
  //   return (
  //     <section className="flex items-center w-full  gap-x-4 ">
  //       <div>
  //         <h3 className="text-xl text-light font-medium">
  //           No tiene ninguna tarea pendiente con este cliente
  //         </h3>
  //         <p className="text-light/90">Agende una tarea con este cliente</p>
  //       </div>
  //       <img
  //         src="https://cdn-icons-png.flaticon.com/512/5058/5058432.png"
  //         alt="task not found"
  //         className="w-20 h-20"
  //       />
  //     </section>
  //   );
  // } 

  return (
    <section className="w-auto overflow-x-auto lg:min-w-full  min-h-96 overflow-y-auto  overflow-hidden mb-4 text-white">
      <table className=" text-center w-full text-sm font-regular shadow-md rounded-sm">
        <thead className=" font-medium text-white  dark:bg-base-light/30 rounded-md">
          <tr>
            <th scope="col" className=" px-6 py-4">
              Método
            </th>
            <th scope="col" className=" px-6 py-4">
              Estado
            </th>
            <th scope="col" className=" px-6 py-4">
              Asunto
            </th>
            <th scope="col" className=" px-6 py-4">
              Fecha de creación
            </th>
          </tr>
        </thead>
        <tbody className=" dark:border-light dark:bg-base-light/60">
          {reversedActivities.map((item, index) => (
            <tr key={index} className=" border-b dark:border-base/30">
              <td className="whitespace-nowrap  px-6 py-4 font-medium">
                {item.method}
              </td>
              <td className="whitespace-nowrap px-6 py-4  font-medium">
                {item.state}
              </td>
              <td
                className=" whitespace-nowrap px-6 py-4 font-medium"
                onMouseEnter={() => setHoveredSubject(true)}
                onMouseLeave={() => setHoveredSubject(false)}
                title={hoveredSubject === item.subject ? item.subject : ""}
              >
                {item.subject.length > 20
                  ? item.subject.slice(0, 20) + "..."
                  : item.subject}
                {hoveredSubject ? (
                  <span className="absolute hidden group-hover:flex -left-3 -top-2 -translate-y-full w-auto px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                    Agregar
                  </span>
                ) : null}
              </td>
              <td className="whitespace-nowrap  px-6 py-4">
                {item.createdAt.split("T")[0]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default RegisterActivityTable;
