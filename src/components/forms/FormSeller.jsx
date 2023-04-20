import { useEffect, useState } from "react";
import validation from "../../utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { putSeller, postSeller } from "../../services/sellersServices";
import {
  RiUserLine,
  RiPhoneLine,
  RiMailLine,
  RiHome2Line,
  RiImageAddFill,
} from "react-icons/ri";
import swal from "sweetalert";

function FormSeller({ isVisible, onClose }) {
  const dispatch = useDispatch();
  const sellerId = useSelector((state) => state.sellers.sellerSelected);

  const bossId = useSelector((state) => state.auth.User.id);

  const sellers = useSelector((state) => state.sellers.sellers);
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const [file, setFile] = useState(null);

  const [sellerData, setSellerData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    enable: true,
    password: "12345",
    bossId,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;

    if (name === "image") {
      setFile(files[0]);
    } else {
      setSellerData({
        ...sellerData,
        [name]: value,
      });
    }

    setErrors(
      validation({
        ...sellerData,
        [name]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("sellerData", JSON.stringify(sellerData));

    if (errors.name || errors.email || errors.phone || errors.address) {
      swal("Error", "Por favor revise los datos introducidos. ", "error");
    } else if (sellerId) {
      swal({
        title: "Estas seguro que deseas modificar los datos del vendedor?",
        text: `Nombre: ${sellerData.name}
         Teléfono: ${sellerData.phone}
         Correo: ${sellerData.email}
         Dirección:${sellerData.address}`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((edit) => {
        if (edit) {
          swal(
            "El vendedor fue modificado",
            dispatch(putSeller(formData)),
            onClose(),
            {
              icon: "success",
            }
          );
        } else {
          swal("El vendedor no se ha modificado");
        }
      });
    } else {
      swal({
        title: "Estas seguro que deseas agregar el vendedor?",
        text: `Nombre: ${sellerData.name}
        Teléfono: ${sellerData.phone}
        Correo: ${sellerData.email}
        Dirección: ${sellerData.address}`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((edit) => {
        if (edit) {
          swal(
            "El vendedor fue agregado",
            dispatch(postSeller(formData)),
            setSellerData({
              name: "",
              email: "",
              phone: "",
              address: "",
              enable: true,
              bossId,
            }),
            onClose(),
            {
              icon: "success",
            }
          );
        } else {
          swal("El vendedor no ha sido agregado");
        }
      });
    }
  };

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
      <form
        className="w-96 bg-base-light/70 py-6 px-4 rounded-md flex flex-col gap-y-4"
        onSubmit={handleSubmit}
      >
        <h4 className="text-xl font-medium text-light">
          {sellerId ? "Actualizar vendedor" : "Guardar un vendedor"}
        </h4>
        <section className="flex flex-col gap-y-2">
          <label className="text-sm font-medium text-light" htmlFor="name">
            Nombre completo:
          </label>
          <div className="relative">
            <input
              className="bg-base-light/70 py-1 rounded-md outline-none pl-8 pr-4 w-full"
              type="text"
              value={sellerData.name}
              name="name"
              onChange={handleInputChange}
            />
            <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
          </div>
          {errors.name && <span style={{ color: "red" }}> {errors.name}</span>}
        </section>

        <section className="flex flex-col gap-y-2">
          <label className="text-sm font-medium text-light" htmlFor="image">
            Imagen:{" "}
          </label>
          <div className="relative">
            <input
              className="bg-base-light/70 py-1 rounded-md outline-none pl-8 pr-4 w-full"
              type="file"
              filelist={file}
              name="image"
              onChange={handleInputChange}
            />
            <RiImageAddFill className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
          </div>
          {errors.image && (
            <span style={{ color: "red" }}> {errors.image}</span>
          )}
        </section>

        <section className="flex flex-col gap-y-2">
          <label className="text-sm font-medium text-light" htmlFor="phone">
            Teléfono:{" "}
          </label>
          <div className="relative">
            <input
              className="bg-base-light/70 py-1 rounded-md outline-none pl-8 pr-4 w-full"
              type="text"
              value={sellerData.phone}
              name="phone"
              onChange={handleInputChange}
            />
            <RiPhoneLine className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
          </div>
          {errors.phone && (
            <span style={{ color: "red" }}> {errors.phone}</span>
          )}
        </section>

        <section className="flex flex-col gap-y-2">
          <label className="text-sm font-medium text-light" htmlFor="email">
            Correo:{" "}
          </label>
          <div className="relative">
            <input
              className="bg-base-light/70 py-1 rounded-md outline-none pl-8 pr-4 w-full"
              type="text"
              value={sellerData.email}
              name="email"
              onChange={handleInputChange}
            />
            <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
          </div>
          {errors.email && (
            <span style={{ color: "red" }}> {errors.email}</span>
          )}
        </section>

        <section className="flex flex-col gap-y-2">
          <label className="text-sm font-medium text-light" htmlFor="address">
            Dirección:{" "}
          </label>
          <div className="relative">
            <input
              className="bg-base-light/70 py-1 rounded-md outline-none pl-8 pr-4 w-full"
              type="text"
              value={sellerData.address}
              name="address"
              onChange={handleInputChange}
            />
            <RiHome2Line className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
          </div>
          {errors.address && (
            <span style={{ color: "red" }}> {errors.address}</span>
          )}
        </section>

        <footer className="flex justify-between items-center">
          <button
            type="button"
            className="p-2 rounded-md font-medium text-base bg-gray-300 shadow-md shadow-gray-300/20 hover:bg-gray-300/80 transition-all"
            onClick={() => {
              onClose();
            }}
          >
            CERRAR
          </button>
          <button
            className="p-2 bg-emerald-400 shadow-md shadow-emerald-400/20 rounded-md hover:bg-emerald-400/80 transition-all"
            type="submit"
          >
            {sellerId ? "Actualizar" : "Guardar"}
          </button>
        </footer>
      </form>
    </div>
  );
}

export default FormSeller;
