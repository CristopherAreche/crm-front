import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { useDispatch } from "react-redux";
import { dateFilter } from "../app/features/clientActivitiesSlice";

function DateFilter() {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    setValue(newValue);

    dispatch(dateFilter(newValue));
  };
  return (
    <div className="w-full lg:w-96  ">
      <Datepicker
        inputClassName=" font-bold text-center bg-base-light/60 dark:bg-base-light/60 text-black"
        primaryColor={"blue"}
        useRange={false}
        value={value}
        onChange={handleValueChange}
        displayFormat={"DD/MM/YYYY"}
      />
    </div>
  );
}

export default DateFilter;
