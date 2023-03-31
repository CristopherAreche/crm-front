import { useState } from "react";
import validation from "./validation";

function CreateClient({ isVisible }) {
  const [clientData, setClientData] = useState({
    name: "",
    email: "",
    phone: "",
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
      //aca va el dispatch

      setClientData({
        name: "",
        email: "",
        phone: "",
      });
    }
  };
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <form className="w-[600px] bg-white p-2 rounded " onSubmit={handleSubmit}>
        <div>
          <label className="" htmlFor="name">
            Nombre completo:
          </label>
          <input
            className=""
            type="text"
            value={clientData.name}
            name="name"
            onChange={handleInputChange}
          />
          {errors.name && <span style={{ color: "red" }}> {errors.name}</span>}
        </div>

        <div>
          <label className="" htmlFor="phone">
            Teléfono:{" "}
          </label>
          <input
            className=""
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
            className=""
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
          AGREGAR
        </button>
        <button>CERRAR</button>
      </form>
    </div>
  );
}

export default CreateClient;
