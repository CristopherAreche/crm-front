import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtainActivities } from "../app/store/clientActivitiesSlice.js";
import { useParams } from "react-router-dom";

const RegisterActivityTable = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities.activitiesFilter);
  const activitiesStatus = useSelector((state) => state.activities.status);
  const activitiesError = useSelector((state) => state.activities.error);
  const { id } = useParams();

  useEffect(() => {
    dispatch(obtainActivities(id));
  }, [dispatch]);

  if (activitiesStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (activitiesStatus === "failed") {
    return <div>Error: {activitiesError}</div>;
  }

  return (
    <section className="w-auto overflow-x-auto lg:min-w-full   overflow-hidden mb-4 text-white">
      <table className="min-w-full text-center text-sm font-regular shadow-md rounded-sm">
        <thead className=" font-medium text-white  dark:bg-base-light/30 rounded-md">
          <tr>
            <th scope="col" className=" px-6 py-4">
              Método
            </th>
            <th scope="col" className=" px-6 py-4">
              Estado
            </th>
            <th scope="col" className=" px-6 py-4">
              Fecha de creación
            </th>
          </tr>
        </thead>
        <tbody className=" dark:border-light dark:bg-base-light/60">
          {activities.map((item, index) => (
            <tr key={index} className="border-b dark:border-base/30">
              <td className="whitespace-nowrap  px-6 py-4 font-medium">
                {item.method}
              </td>
              <td className="whitespace-nowrap  px-6 py-4  font-medium">
                {item.state}
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
