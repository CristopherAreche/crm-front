import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

function DateFilter() {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <div className="col-start-5 col-end-7 row-start-5 row-end-6 flex justify-center items-center">
      <Datepicker
        inputClassName=" font-bold text-center bg-gray-900 dark:bg-green-900 text-white"
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