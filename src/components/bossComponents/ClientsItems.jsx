import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSeller } from "../../services/sellersServices";
import ModalHistory from "./ModalHistory";
import { RiLoader4Fill } from "react-icons/ri";

const ClientsItems = ({ item, onCheckbox, onSelected }) => {
  const [isShow, setIsShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sellerName, setSellerName] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.User.id);
  useEffect(() => {
    if (item.salesmanId)
      getSeller({ bossId: user, id: item.salesmanId }).then((res) => {
        setLoading(true);
        setSellerName(res.name);
        setLoading(false);
      });
  }, [dispatch, item.salesmanId, user]);

  return (
    <tr key={item.id} className="border-b dark:border-base/30">
      <td className="whitespace-nowrap  px-6 py-4 font-medium">
        <input
          id={`checkbox-${item.id}`}
          type="checkbox"
          checked={onSelected === `checkbox-${item.id}`}
          onChange={(event) => onCheckbox(event, item)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
        {loading ? (
          <RiLoader4Fill className="animate-spin text-4xl text-secondary text-center" />
        ) : (
          <>{sellerName}</>
        )}
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
