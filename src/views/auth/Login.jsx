import React, { useState } from "react";
import { RiArrowLeftLine, RiMailLine, RiLock2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { postLogin, } from "../../services/authServices";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { useSelector } from "react-redux";

const Login = () => {
  const [password, setPassWord] = useState("");
  const [email, setEmail] = useState("");
  const [errorUser, SetErrorUser] = useState(true);
  const [errorPassword, setErrorPassword] = useState(true);
  const [access, setAccess] = useState(false);
  const regularPassword = /^(?=.\d)(?=.[a-z])(?=.*[A-Z])\w{8,}$/;//al menos una letra, al menos un numero, al menos una letra mayúscula, al menos 8 caracteres, no permite espacios.
  const regularUser = /\S+@\S+\.\S+/; //un correo electronico

  const { loginWithRedirect } = useAuth0();
  const dispatch = useDispatch();

  const login = async() => {
    const loginUser = {
      status: "login",
      email:email,
      password:password,
    };
    dispatch(postLogin(loginUser));
  };

  const valUser = (value) => {
    if (regularUser.test(value)) {
      SetErrorUser(false);
    } else {
      SetErrorUser(true);
    }
    setEmail(value);
  };

  const valPassword = (value) => {
    if (regularPassword.test(value)) {
      setErrorPassword(false);
    } else {
      setErrorPassword(false);
    }
    setPassWord(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

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
            type="password"
            onChange={(e) => valPassword(e.target.value)}
            className="bg-base-light/60 py-2 pl-10 pr-4  w-full rounded-md outline-none shadow-md"
          />
          <RiLock2Line className="absolute top-1/2 translate-y-1 left-2 text-2xl text-secondary " />
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
        <Link
          onClick={login}
          to={access ? "/dashboard" : null}
          className="text-center bg-gradient-to-r from-primary to-secondary py-2 px-4 rounded-md font-bold text-lg hover:scale-[1.02] transition-all"
        >
          Iniciar Sesión
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
