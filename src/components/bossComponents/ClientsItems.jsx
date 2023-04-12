import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedClientCheckbox } from "../../app/features/clientSlice";
import { getSeller } from "../../services/sellersServices";
import ModalHistory from "./ModalHistory";

const ClientsItems = ({ item }) => {
  const [clientSelected, setClientSelected] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const seller = useSelector((state) => state.sellers.seller);
  const dispatch = useDispatch();

  const handleCheckboxChange = (client) => {
    setClientSelected(client.id);
    dispatch(selectedClientCheckbox(client.id));
  };

  const toggleCheckBox = (clientId) => {
    if (clientId === clientSelected) {
      setIsSelected(!isSelected);
    }
  };

  useEffect(() => {
    if (item.salesmanId) {
      dispatch(getSeller(item.salesmanId));
      setSellerName(seller.name);
    }
  }, []);

  return (
    <tr key={item.id} className="border-b dark:border-base/30">
      <td className="whitespace-nowrap  px-6 py-4 font-medium">
        <input
          id={`checkbox-${item.id}`}
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          checked={item.id === clientSelected && isSelected}
          onChange={() => {
            handleCheckboxChange(item);
            toggleCheckBox(clientSelected);
          }}
        />
      </td>
      <td className="whitespace-nowrap  px-6 py-4  font-medium text-secondary hover:text-secondary/80 hover:underline transition-all">
        {/* <Link to={`/dashboard/client/${item.id}`}> */}
        <button onClick={() => setIsShow(true)}>{item.name}</button>
        {isShow && (
          <ModalHistory clientDetail={item} onClose={() => setIsShow(false)} />
        )}
        {/* </Link> */}
      </td>
      <td className="whitespace-nowrap  px-6 py-4  font-medium text-yellow-400 hover:text-yellow-400/80 hover:underline transition-all">
        {sellerName}
      </td>
      <td className="whitespace-nowrap  px-6 py-4 text-white">
        {item.totalPurchased}
      </td>
      <td
        className={`whitespace-nowrap  px-6 py-4 ${
          item.enable ? "text-emerald-200" : "text-red-200"
        }`}
      >
        {" "}
        {item.enable ? "Habilitado" : "Desabilitado"}
      </td>
      <td
        className={`whitespace-nowrap  px-6 py-4 ${
          item.vip ? "text-orange-200" : "text-white"
        }`}
      >
        {" "}
        {item.vip ? "Si" : "No"}
      </td>
    </tr>
  );
};

export default ClientsItems;
