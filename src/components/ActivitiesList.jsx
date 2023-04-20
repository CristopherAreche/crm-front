import { RiBarChart2Line } from "react-icons/ri";
import DateFilter from "./DateFilter";
import ActivitiesFilter from "./ActivitiesFilter";
import RegisterActivityTable from "./RegisterActivityTable";

const ActivitiesList = () => {
  return (
    <section className="flex flex-col gap-y-2 z-10">
      <h4 className="text-2xl text-light font-medium flex gap-x-4 items-center mb-2">
        <RiBarChart2Line className="text-4xl" />
        Actividades
      </h4>
      <div className="flex gap-x-8">
        <DateFilter />
        <ActivitiesFilter />
      </div>

      <RegisterActivityTable />
    </section>
  );
};

export default ActivitiesList;
