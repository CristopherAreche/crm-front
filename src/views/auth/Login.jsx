import React, { useState } from "react";
import {
  RiArrowLeftLine,
  RiMailLine,
  RiLock2Line,
  RiEyeOffLine,
  RiEyeLine,
  RiTyphoonFill
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../services/authServices";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Cookies from 'universal-cookie';


const Login = () => {
  const [password, setPassWord] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const status = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginWithRedirect} = useAuth0();

  

  const cookies = new Cookies();
  const myToken = cookies.get('myToken');

  const valUser = (value) => {
    setEmail(value);
  };

  const valPassword = (value) => {
    setPassWord(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (myToken !== undefined) {
      navigate("/dashboard");
    }
  }, [myToken, navigate]);


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
      <div className="text-3xl flex justify-start items-center gap-x-2  font-bold tracking-widest pt-2">
            <RiTyphoonFill className="text-white" />
            <p className="bg-gradient-to-r from-primary  to-secondary text-end  text-transparent bg-clip-text hover:underline hover:text-light transition-all cursor-pointer">
              CRM
            </p>
      </div>
      <h3 className="text-2xl font-medium text-light">Hey, Hola de nuevo ✋</h3>
      <p className="text-gray-400 ">
        Ingrese la información que ingresó al registrarse
      </p>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex flex-col w-full gap-y-4 mb-4"
      >
        <div className="relative flex flex-col gap-y-1 mb-2">
          <label className="font-medium text-gray-200">Email</label>
          <input
            name="email"
            value={email}
            placeholder="correo@dominio.com"
            type="text"
            onChange={(e) => valUser(e.target.value)}
            className="bg-base-light/60 py-2 pl-10 pr-4 w-full rounded-md outline-none shadow-md"
          />
          <RiMailLine className="absolute top-1/2 translate-y-1 left-2 text-2xl text-secondary " />
        </div>
        <div className="relative flex flex-col gap-y-1">
          <label className="font-medium text-gray-200">Contraseña</label>
          <input
            name="password"
            value={password}
            placeholder="Contraseña"
            type={showPassword ? "text" : "password"}
            onChange={(e) => valPassword(e.target.value)}
            className="bg-base-light/60 py-2 pl-10 pr-4  w-full rounded-md outline-none shadow-md"
          />
          <RiLock2Line className="absolute top-1/2 translate-y-1 left-2 text-2xl text-secondary " />
          {showPassword ? (
            <RiEyeLine
              className="absolute top-1/2 translate-y-1 right-2 text-xl cursor-pointer text-secondary "
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <RiEyeOffLine
              className="absolute top-1/2 translate-y-1 right-2 text-xl cursor-pointer text-secondary "
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>
        <div className="flex justify-between">
          <Link
            to="/authentication/register"
            className="bg-gradient-to-r text-light  hover:underline hover:text-white transition-all cursor-pointer"
          >
            No tienes cuenta? Registrate
          </Link>
          <p className="bg-gradient-to-r from-primary  to-secondary text-end  text-transparent bg-clip-text hover:underline hover:text-light transition-all cursor-pointer">
            Olvidaste tu contraseña?
          </p>
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="text-center bg-gradient-to-r from-primary to-secondary py-2 px-4 rounded-md font-bold text-lg hover:scale-[1.02] transition-all"
        >
          {status === "loading" ? "Cargando..." : status === 'failed' ? "Iniciar sesión" : "Iniciar sesión"}
        </button>
      </form>
      <section className="flex gap-x-2 items-center justify-center w-full bg-white py-2 hover:scale-[1.03] transition-all cursor-pointer rounded-md px-2 lg:px-0">
        <img
          src="https://img.freepik.com/iconos-gratis/buscar_318-265146.jpg"
          alt="logo google"
          className="w-8 h-8 mr-4"
        />
        <button
          className="text-base font-medium "
          onClick={async() => loginWithRedirect({ screen_hint: "signup" })}
        >
          Ingresa con Google o Microsoft
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

export default Login;
