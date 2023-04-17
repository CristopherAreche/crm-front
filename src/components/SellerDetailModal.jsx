import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  RiUserLine,
  RiPhoneLine,
  RiMailLine,
  RiHome2Line,
} from "react-icons/ri";

function SellerDetailModal({ isVisible, onClose }) {
  const dispatch = useDispatch();
  const sellerId = useSelector((state) => state.sellers.sellerSelected);

  const bossId = useSelector((state) => state.auth.User.id);

  const sellers = useSelector((state) => state.sellers.sellers);
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const [sellerData, setSellerData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    enable: true,
    password: "12345",
    bossId,
  });

  useEffect(() => {
    if (sellerId) {
      const obj = sellers.find((seller) => seller.id === sellerId);
      setSellerData({ ...obj, id: sellerId });
    } else
      setSellerData({
        name: "",
        email: "",
        phone: "",
        address: "",
        enable: true,
        password: "12345",
        bossId,
      });
  }, [sellerId, sellers, dispatch]);

  if (!isVisible) return null;
  return (
    <div
      className="fixed inset-0  bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      {" "}
      <form className="w-96 bg-base-light/70 py-6 px-6 rounded-md flex flex-col gap-y-4">
        <h4 className="text-xl font-medium text-light">Detalles</h4>
        <section className="flex flex-col gap-y-2">
          <label className="text-sm font-medium text-light" htmlFor="name">
            Nombre completo:
          </label>
          <div className="relative">
            <label className="mx-[2em]">{sellerData.name}</label>
            <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
          </div>
        </section>

        <section className="flex flex-col gap-y-2">
          <label className="text-sm font-medium text-light" htmlFor="phone">
            Teléfono:{" "}
          </label>
          <div className="relative">
            <label className="mx-[2em]">{sellerData.phone}</label>
            <RiPhoneLine className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
          </div>
        </section>

        <section className="flex flex-col gap-y-2">
          <label className="text-sm font-medium text-light" htmlFor="email">
            Correo:{" "}
          </label>
          <div className="relative">
            <label className="mx-[2em]">{sellerData.email}</label>
            <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
          </div>
        </section>

        <section className="flex flex-col gap-y-2">
          <label className="text-sm font-medium text-light" htmlFor="address">
            Dirección:{" "}
          </label>
          <div className="relative">
            <label className="mx-[2em]">{sellerData.address}</label>
            <RiHome2Line className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
          </div>
        </section>

        <footer className="flex justify-center items-center">
          <button
            type="button"
            className="p-2 rounded-md font-medium text-base bg-gray-300 shadow-md shadow-gray-300/20 hover:bg-gray-300/80 transition-all"
            onClick={() => {
              onClose();
            }}
          >
            CERRAR
          </button>
        </footer>
      </form>
    </div>
  );
}

export default SellerDetailModal;
