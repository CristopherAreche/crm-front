import React from "react";
import { RiArrowLeftLine, RiMailLine, RiLock2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Register = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <section className="flex flex-col items-start justify-center min-h-screen px-8 lg:px-20 gap-y-4">
      <div className="block lg:hidden absolute top-4 left-4">
        <Link
          to="/"
          className="flex gap-x-1 items-center font-medium group hover:text-white/90 transition-colors"
        >
          <RiArrowLeftLine className="text-2xl group-hover:-translate-x-1 transition-transform" />
          Volver atras
        </Link>
      </div>
      <h2 className="text-xl text-white font-bold tracking-widest hover:text-light transition-colors cursor-pointer z-10">
        LOGO
      </h2>
      <p className="text-gray-400 ">No olvide sus datos ingresados</p>
      <form className="flex flex-col w-full gap-y-4 mb-4">
        <div className="relative flex flex-col gap-y-1 mb-2">
          <label className="font-medium text-gray-300">Email</label>
          <input
            type="text"
            className="bg-base-light/60 py-2 pl-10 pr-4 w-full rounded-md outline-none shadow-md"
          />
          <RiMailLine className="absolute top-1/2 translate-y-1 left-2 text-2xl text-secondary " />
        </div>
        <div className="relative flex flex-col gap-y-1">
          <label className="font-medium text-gray-300">Contraseña</label>
          <input
            type="password"
            className="bg-base-light/60 py-2 pl-10 pr-4  w-full rounded-md outline-none shadow-md"
          />
          <RiLock2Line className="absolute top-1/2 translate-y-1 left-2 text-2xl text-secondary " />
        </div>
        <div className="relative flex flex-col gap-y-1">
          <label className="font-medium text-gray-300">
            Repita su Contraseña
          </label>
          <input
            type="password"
            className="bg-base-light/60 py-2 pl-10 pr-4  w-full rounded-md outline-none shadow-md"
          />
          <RiLock2Line className="absolute top-1/2 translate-y-1 left-2 text-2xl text-secondary " />
        </div>
        <div className="text-end">
          <Link
            to="/authentication"
            className="bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text hover:underline hover:text-light transition-all cursor-pointer"
          >
            Ya tienes una cuenta? Ingresa
          </Link>
        </div>
        <Link
          to="#"
          className="text-center bg-gradient-to-r from-primary to-secondary py-2 px-4 rounded-md font-bold text-lg hover:scale-[1.02] transition-all"
        >
          Registrate
        </Link>
      </form>
      <section className="flex gap-x-2 items-center justify-center w-full bg-white py-2 hover:scale-[1.03] transition-all cursor-pointer rounded-md">
        <img
          src="https://img.freepik.com/iconos-gratis/buscar_318-265146.jpg"
          alt="logo google"
          className="w-8 h-8 mr-4"
        />
        <button
          className="text-base font-medium "
          onClick={() => loginWithRedirect({ screen_hint: "signup" })}
        >
          Inicia sesión con Google o Microsoft
        </button>
        <img
          src="https://cdn-icons-png.flaticon.com/512/732/732221.png?w=740&t=st=1680637866~exp=1680638466~hmac=6099a6118528d9a0e0b89bc5f7d0c78b31b9f71b84a7c81bc034269616924215"
          alt="logo microsoft"
          className="w-8 h-8 ml-4"
        />
      </section>
    </section>
  );
};

export default Register;
