import ellipse from "../../assets/svg/ellipse.svg";
import character from "../../assets/character.png";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Funcionalities = () => {
  return (
    <section
      name="funcionalidades"
      className=" h-[100vh] items-center flex-col w-full lg:flex-row justify-between flex lg:pt-12 lg:px-28 "
    >
      <div className="flex flex-col gap-y-4 items-start">
        <h3 className="text-3xl lg:text-4xl w-full lg:w-[30rem]   font-extrabold text-white mb-4">
          Funcionalidades para simplificar tu gestión en un solo lugar{" "}
        </h3>
        <p className="text-lg font-medium text-gray-200 flex items-center gap-x-4">
          <RiCheckboxCircleFill className="text-secondary text-4xl" /> Agenda de
          clientes
        </p>
        <p className="text-lg font-medium text-gray-200 flex items-center gap-x-4">
          <RiCheckboxCircleFill className="text-secondary text-4xl" /> Cálculos
          automaticos de tus ventas
        </p>
        <p className="text-lg font-medium text-gray-200 flex items-center gap-x-4">
          <RiCheckboxCircleFill className="text-secondary text-4xl" /> Control
          de tus vendedores e inventario
        </p>
        <p className="text-lg font-medium text-gray-200 flex items-center gap-x-4">
          <RiCheckboxCircleFill className="text-secondary text-4xl" /> Sistema
          de ascenso
        </p>
        <p className="text-lg font-medium text-gray-200 flex items-center gap-x-4">
          <RiCheckboxCircleFill className="text-secondary text-4xl" /> Alertas por correo electrónico
        </p>
        <Link
          to="/authentication/register"
          className="bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-xl text-white font-medium text-lg lg:text-2xl hover:scale-[1.03] transition-all flex gap-x-1 items-center"
        >
          Empezar Ahora
        </Link>
      </div>

      <div className="relative hidden lg:block">
        <img
          src={ellipse}
          alt="ellipse gradient"
          className="w-[28rem] h-[28rem]"
        />
        <img
          src={character}
          alt="character"
          className="absolute top-0 left-6 object-cover w-[26rem]"
        />
      </div>
    </section>
  );
};

export default Funcionalities;
