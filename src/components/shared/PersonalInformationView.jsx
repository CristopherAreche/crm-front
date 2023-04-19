import {
  RiMapPinLine,
  RiPhoneLine,
  RiUser3Line,
  RiUser5Line,
  RiPaypalLine,
} from "react-icons/ri";
import axios from "axios";
import URL from "../../utils/env";

const API_URL_ORDER = `${URL}/create-order`;

const PersonalInformationView = ({ data, type }) => {
  const payment = async (e) => {
    e.preventDefault();
    const postData = { id: data.id };
    const response = await axios.post(API_URL_ORDER, postData);
    window.location.href = response.data.links[1].href;
  };

  return (
    <section
      className={`${type === "boss" ? "col-span-4" : "col-span-6"
        } flex flex-col gap-y-6`}
    >
      <header className="flex flex-col gap-y-4">
        <h4 className="text-light font-medium text-4xl">
          Informacion Personal
        </h4>
        <p className="text-light/80 text-sm">
          Gestiona tu información personal general, incluye numero de telefono y
          email para que puedas ser contactado
        </p>
      </header>
      <main className="grid grid-cols-2 gap-4">
        <article className="bg-base-light/30 py-4 px-4 shadow-md rounded-md">
          <header className="flex items-center justify-between mb-2">
            <p className="text-light text-lg font-medium">Nombre completo</p>
            <RiUser3Line className="text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full" />
          </header>
          <p className="text-light/80 ">{data.name}</p>
        </article>
        <article className="bg-base-light/30 py-4 px-4 shadow-md rounded-md">
          {type === "boss" ? (
            <>
              <header className="flex items-center justify-between mb-2">
                <p className="text-light text-lg font-medium">
                  Nombre de usuario
                </p>
                <RiUser5Line className="text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full" />
              </header>
              <p className="text-light/80 ">{data.username}</p>
            </>
          ) : (
            <>
              <header className="flex items-center justify-between mb-2">
                <p className="text-light text-lg font-medium">Mi rol</p>
                <RiUser5Line className="text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full" />
              </header>
              <p className="text-light/80 ">Vendedor</p>
            </>
          )}
        </article>
        <article className="bg-base-light/30 py-4 px-4 shadow-md rounded-md">
          <header className="flex items-center justify-between mb-2">
            <p className="text-light text-lg font-medium">Direccion</p>
            <RiMapPinLine className="text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full" />
          </header>
          <p className="text-light/80 ">{data.address}</p>
        </article>
        <article className="bg-base-light/30 py-4 px-4 shadow-md rounded-md">
          <header className="flex items-center justify-between mb-2">
            <p className="text-light text-lg font-medium">Telefono</p>
            <RiPhoneLine className="text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full" />
          </header>
          <p className="text-light/80 ">{data.phone}</p>
        </article>
        {type === "boss" && (
          <article className="bg-base-light/30 py-4 px-4 shadow-md rounded-md">
            <header className="flex items-center justify-between mb-2">
              <p className="text-light text-lg font-medium">Matodo de pago</p>
              <RiPaypalLine className="text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full" />
            </header>
            <button className="text-light hover:text-white " onClick={payment}>
              Paypal
            </button>
          </article>
        )}
      </main>
    </section>
  );
};

export default PersonalInformationView;
