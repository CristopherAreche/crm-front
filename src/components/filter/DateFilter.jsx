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
    <div className="w-1/5">
      <Datepicker
        inputClassName=" font-bold text-center bg-cyan-950 dark:bg-green-900 text-white"
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
