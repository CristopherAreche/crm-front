import { useState } from "react";
import validation from "./validation";
import { useDispatch } from "react-redux";
import { addClient } from "../../app/store/clientSlice";

function CreateClient({ isVisible, onClose }) {
  const dispatch = useDispatch();
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const [clientData, setClientData] = useState({
    name: "",
    email: "",
    phone: "",
    vip: false,
    enable: true,
    salesmanId: "1",
  });

  const [errors, setErros] = useState({
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

    setErros(
      validation({
        ...clientData,
        [property]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (errors.name || errors.email || errors.phone) {
      alert("Por favor revise los datos introducidos. ");
    } else {
      dispatch(addClient(clientData));
      //aca va el dispatch

      setClientData({
        name: "",
        email: "",
        phone: "",
        vip: false,
        enable: true,
        salesmanId: "1",
      });
    }
  };
  if (!isVisible) return null;
  return (
    <div
      className="fixed inset-0  bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      {" "}
      <div>
        <form
          className="w-[600px] space-x-2 space-y-3.5  bg-base-light/70 p-3 rounded "
          onSubmit={handleSubmit}
        >
          <div>
            <label className="m-3 py-2" htmlFor="name">
              Nombre completo:
            </label>
            <input
              className="bg-base-light/70 "
              type="text"
              value={clientData.name}
              name="name"
              onChange={handleInputChange}
            />
            {errors.name && (
              <span style={{ color: "red" }}> {errors.name}</span>
            )}
          </div>

          <div>
            <label className="" htmlFor="phone">
              Teléfono:{" "}
            </label>
            <input
              className="bg-base-light/70"
              type="text"
              value={clientData.phone}
              name="phone"
              onChange={handleInputChange}
            />
            {errors.summary && (
              <span style={{ color: "red" }}> {errors.phone}</span>
            )}
          </div>

          <div>
            <label className="" htmlFor="email">
              Correo:{" "}
            </label>
            <input
              className="bg-base-light/70"
              type="text"
              value={clientData.email}
              name="email"
              onChange={handleInputChange}
            />
            {errors.summary && (
              <span style={{ color: "red" }}> {errors.email}</span>
            )}
          </div>

          <button className="p-2" type="submit">
            GUARDAR
          </button>
          <button
            onClick={() => {
              onClose();
            }}
          >
            CERRAR
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateClient;
