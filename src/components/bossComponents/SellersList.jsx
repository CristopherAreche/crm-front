import { RiFilter3Line, RiLoader4Fill } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSellers } from "../../services/sellersServices";
import { selectedSellerCheckbox } from "../../app/features/sellerSlice";
import ModalHistory from "./ModalHistory";
import SellerDetailModal from "../SellerDetailModal";
const SellerList = () => {
  const dispatch = useDispatch();
  const sellers = useSelector((state) => state.sellers.sellers);
  const sellersStatus = useSelector((state) => state.sellers.status);
  const sellersError = useSelector((state) => state.sellers.error);
  const [sellerSelected, setSellerSelected] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state) => state.auth.User.id);
  const selectedSeller = useSelector((state) => state.sellers.sellerSelected);

  useEffect(() => {
    dispatch(getSellers(user));
  }, [dispatch, user]);

  const handleCheckboxChange = (seller) => {
    setSellerSelected(seller.id);
    dispatch(selectedSellerCheckbox(seller.id));
  };
  const toggleCheckBox = (sellerId) => {
    if (sellerId === sellerSelected) {
      if (selectedSeller) {
        dispatch(selectedSellerCheckbox(!selectedSeller));
      }
      setIsSelected(!isSelected);
    }
  };

  if (sellersStatus === "loading") {
    return (
      <div className="flex justify-center w-full">
        <RiLoader4Fill className="animate-spin text-4xl text-secondary mt-8" />
      </div>
    );
  } else if (sellersStatus === "succeeded") {
    return (
      <section className="overflow-x-auto lg:min-w-full my-4 lg:h-96 overflow-y-auto pb-4">
        <header className="flex justify-between w-screen lg:w-full px-8 py-4   bg-base-light/30 rounded-tr-md rounded-tl-md  ">
          <h3 className=" text-xl font-medium text-light flex items-center gap-x-2">
            <RiFilter3Line className="text-2xl" />
            Tus vendedores
          </h3>
        </header>
        <table className="min-w-full text-center text-sm font-regular shadow-md rounded-sm">
          <thead className=" font-medium text-light/75  dark:bg-base-light/30 rounded-md">
            <tr>
              <th scope="col" className=" px-6 py-4">
                {/*  */}
              </th>
              <th scope="col" className=" px-6 py-4">
                Foto de perfil
              </th>
              <th scope="col" className=" px-6 py-4">
                Nombre
              </th>
              <th scope="col" className=" px-6 py-4">
                Total vendido último mes
              </th>
              <th scope="col" className=" px-6 py-4">
                Estado
              </th>
              <th scope="col" className=" px-6 py-4">
                Puntuación
              </th>
            </tr>
          </thead>
          <tbody className=" dark:border-light dark:bg-base-light/60">
            {Array.isArray(sellers) &&
              sellers?.map((item) => (
                <tr key={item.id} className="border-b dark:border-base/30">
                  <td className="whitespace-nowrap  px-6 py-4 font-medium">
                    <input
                      id={`checkbox-${item.id}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      checked={item.id === sellerSelected && isSelected}
                      onChange={() => {
                        handleCheckboxChange(item);
                        toggleCheckBox(sellerSelected);
                      }}
                    />
                  </td>
                  <td className="px-6 py-4 flex justify-center">
                    <button onClick={() => setShowModal(true)}>
                      <img
                        className="h-12 w-12 object-cover rounded-md"
                        src={
                          item?.image
                            ? item?.image
                            : "https://cdn-icons-png.flaticon.com/512/5853/5853761.png"
                        }
                        alt="imagen de perfil"
                      />{" "}
                    </button>
                  </td>
                  <td className="whitespace-nowrap  px-6 py-4  font-medium text-secondary hover:text-secondary/80 hover:underline transition-all">
                    {/* <Link to={`/vendedor/${item.id}`}>{item.name}</Link> */}
                    {item.name}
                    {isShow && (
                      <ModalHistory onClose={() => setIsShow(false)} />
                    )}
                  </td>
                  <td className="whitespace-nowrap  px-6 py-4">
                    ${item.total_monthly_sales}
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
                      item.avgFeedback >= 3 ? "text-white" : "text-orange-200"
                    }`}
                  >
                    {item.avgFeedback === null
                      ? 0
                      : item.avgFeedback?.toFixed(1)}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <SellerDetailModal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        />
      </section>
    );
  } else if (sellersError === "failed") {
    return <div>{sellersError}</div>;
  }
};
export default SellerList;
