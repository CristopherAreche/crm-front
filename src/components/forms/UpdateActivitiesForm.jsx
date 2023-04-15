import React from "react";
import { useEffect, useState } from "react";
import validation from "../../utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { postClient, putClient } from "../../services/clientsServices";
import { RiUserLine, RiPhoneLine, RiMailLine } from "react-icons/ri";
import swal from "sweetalert";

function UpdateActivitiesModal({ isVisible, onClose }) {
  const dispatch = useDispatch();
  const clientId = useSelector((state) => state.clients.clientSelected);
  const salesmanId = "ae8b659a-1158-411e-a16c-06ca9c0accc5";

  const clients = useSelector((state) => state.clients.clients);
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const [clientData, setClientData] = useState({
    name: "",
    email: "",
    phone: "",
    enable: true,
    salesmanId,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setClientData({
      ...clientData,
      [property]: value,
    });

    setErrors(
      validation({
        ...clientData,
        [property]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (errors.name || errors.email || errors.phone) {
      swal("Error", "Por favor revise los datos introducidos. ", "error");
    } else if (clientId) {
      swal({
        title: "Estas seguro que deseas modificar los datos del cliente?",
        text: `Nombre: ${clientData.name}
         Teléfono: ${clientData.phone}
         Correo: ${clientData.email}`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((edit) => {
        if (edit) {
          swal(
            "El cliente fue modificado",
            dispatch(putClient(clientData)),
            onClose(),
            {
              icon: "success",
            }
          );
        } else {
          swal("El cliente no se ha modificado");
        }
      });
    } else {
      swal({
        title: "Estas seguro que deseas agregar el cliente?",
        text: `Nombre: ${clientData.name}
        Teléfono: ${clientData.phone}
        Correo: ${clientData.email}`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((edit) => {
        if (edit) {
          swal(
            "El cliente fue agregado",
            dispatch(postClient(clientData)),
            setClientData({
              name: "",
              email: "",
              phone: "",
              enable: true,
              salesmanId,
            }),
            onClose(),
            {
              icon: "success",
            }
          );
        } else {
          swal("El cliente no ha sido agregado");
        }
      });
    }
  };

  useEffect(() => {
    if (clientId) {
      const obj = clients.find((client) => client.id === clientId);

      setClientData({
        name: obj.name,
        email: obj.email,
        phone: obj.phone,
        enable: obj.enable,
        id: obj.id,
      });
    } else
      setClientData({
        name: "",
        email: "",
        phone: "",
        enable: true,
        salesmanId,
      });
  }, [clientId, clients, dispatch]);

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
          {clientId ? "Actualizar cliente" : "Guardar un cliente"}
        </h4>
        <section className="flex flex-col gap-y-2">
          <label className="text-sm font-medium text-light" htmlFor="name">
            Nombre completo:
          </label>
          <div className="relative">
            <input
              className="bg-base-light/70 py-1 rounded-md outline-none pl-8 pr-4 w-full"
              type="text"
              value={clientData.name}
              name="name"
              onChange={handleInputChange}
            />
            <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
          </div>
          {errors.name && <span style={{ color: "red" }}> {errors.name}</span>}
        </section>

        <section className="flex flex-col gap-y-2">
          <label className="text-sm font-medium text-light" htmlFor="phone">
            Teléfono:{" "}
          </label>
          <div className="relative">
            <input
              className="bg-base-light/70 py-1 rounded-md outline-none pl-8 pr-4 w-full"
              type="text"
              value={clientData.phone}
              name="phone"
              onChange={handleInputChange}
            />
            <RiPhoneLine className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
          </div>
          {errors.summary && (
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
              value={clientData.email}
              name="email"
              onChange={handleInputChange}
            />
            <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
          </div>
          {errors.summary && (
            <span style={{ color: "red" }}> {errors.email}</span>
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
            {clientId ? "Actualizar" : "Guardar"}
          </button>
        </footer>
      </form>
    </div>
  );
}

export default UpdateActivitiesModal;
