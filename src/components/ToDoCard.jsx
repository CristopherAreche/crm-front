import axios from "axios";
import { useEffect, useState } from "react";
import { RiDeleteBin3Line } from "react-icons/ri";
import URL from "../utils/env";

export default function ToDoCard({ item, delTask }) {
  const [isChecked, setIsChecked] = useState(false);
  const [due_date, setDue_date] = useState("");

  useEffect(() => {
    if (item.state === "Completado") {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
    setDue_date(new Date(item.due_date));
  }, [item.state, item.due_date]);

  const handleCheckboxChange = async (event) => {
    if (!event.target.checked && item.state === "Completado") {
      item.state = "Pediente";
      setIsChecked(false);
    } else {
      item.state = "Completado";
      setIsChecked(true);
    }
    await axios.put(`${URL}/task`, {
      id: item.id,
      state: item.state,
    });
  };

  const isExpired = () => {
    const today = new Date(Date.now());
    return today >= due_date;
  };

  return (
    <>
      <tr className="border-b dark:border-base/30">
        <td className="  py-4 font-medium">
          <input
            id={`checkbox-${item.id}`}
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            checked={isChecked}
            onChange={(e) => {
              handleCheckboxChange(e);
              //toggleCheckBox(clientSelected);
            }}
          />
        </td>
        <td
          className={`  py-4 ${
            isChecked ? "text-emerald-200" : "text-red-200"
          }`}
        >
          {" "}
          {item.description}
        </td>
        <td
          className={`  py-4 ${isExpired() ? "text-orange-200" : "text-white"}`}
        >
          {" "}
          {typeof due_date === "string" ? null : due_date.toLocaleDateString()}
        </td>
        <td className="  py-4 font-medium">
          <RiDeleteBin3Line
            className="text-2xl text-red-400 hover:text-red-400/70 active:text-red-500 cursor-pointer"
            onClick={() => {
              delTask(item.id);
            }}
          />
        </td>
      </tr>
    </>
  );
}
