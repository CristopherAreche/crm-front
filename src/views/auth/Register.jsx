import React from "react";
import {
  RiArrowLeftLine,
  RiMailLine,
  RiLock2Line,
  RiTyphoonFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { postUserLogin } from "../../services/authServices";
import { useState } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authServices";

const Register = () => {
  const [password, setPassWord] = useState({
    password: "",
    password2: "",
  });
  const [email, setEmail] = useState("");
  const [errorUser, SetErrorUser] = useState(true);
  const [errorPassword, setErrorPassword] = useState(true);
  // const [access, setAccess] = useState(false);
  const regularPassword = /^(?=.\d)(?=.[a-z])(?=.*[A-Z])\w{8,}$/; //al menos una letra, al menos un numero, al menos una letra mayúscula, al menos 8 caracteres, no permite espacios.
  const regularUser = /\S+@\S+\.\S+/; //un correo electronico
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loginWithRedirect } = useAuth0();

  const register = async () => {
    try {
      const formData = new FormData();
      const formLogin = {
        name: email.split("@")[0],
        username: email.split("@")[0],
        email: email,
        password: password.password2,
        enable: false,
      };
      formData.append("formLogin", JSON.stringify(formLogin));
      const temps = await dispatch(postUserLogin(formData));
      if (temps.payload.status === 200) {
        await dispatch(login({ email, password: password.password2 }));
        navigate("/dashboard/perfil");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const valUser = (value) => {
    if (regularUser.test(value)) SetErrorUser(false);
    else SetErrorUser(true);
    setEmail(value);
  };

  const valPassword = (e) => {
    if (regularPassword.test(e.target.value)) setErrorPassword(false);
    else setErrorPassword(false);

    setPassWord({ ...password, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.password === "" || password.password2 === "" || email === "") {
      swal("Error", "Por favor, complete todos los campos.", "error");
    }
    if (password.password.toString() !== password.password2.toString())
      swal({
        title: "Error",
        text: "Las contraseñas no coinciden. Por favor, inténtelo de nuevo.",
        icon: "error",
        button: "Aceptar",
      });
    else await register();
  };

  return (
    <section className="flex flex-col items-start justify-center min-h-screen px-8 lg:px-20 gap-y-4">
      <header className="block lg:hidden absolute top-4 left-4">
        <Link
          to="/"
          className="flex gap-x-1 items-center font-medium group hover:text-white/90 transition-colors"
        >
          <RiArrowLeftLine className="text-2xl group-hover:-translate-x-1 transition-transform" />
          Volver atras
        </Link>
      </header>
      <div className="text-3xl flex justify-center items-center gap-x-2 font-bold tracking-widest ">
        <RiTyphoonFill className="text-white" />
        <p className="bg-gradient-to-r from-primary  to-secondary text-end  text-transparent bg-clip-text hover:underline hover:text-light transition-all cursor-pointer">
          CRM
        </p>
      </div>
      <p className="text-gray-400 ">No olvide sus datos ingresados</p>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex flex-col w-full gap-y-4 mb-4"
      >
        <div className="relative flex flex-col gap-y-1 mb-2">
          <label className="font-medium text-gray-300">Email</label>
          <input
            value={email}
            onChange={(e) => valUser(e.target.value)}
            type="text"
            placeholder="correo@dominio.com"
            className="bg-base-light/60 py-2 pl-10 pr-4 w-full rounded-md outline-none shadow-md"
          />
          <RiMailLine className="absolute top-1/2 translate-y-1 left-2 text-2xl text-secondary " />
        </div>
        <div className="relative flex flex-col gap-y-1">
          <label className="font-medium text-gray-300">Contraseña</label>
          <input
            onChange={(e) => valPassword(e)}
            name="password"
            value={password.password}
            type="password"
            placeholder="********"
            className="bg-base-light/60 py-2 pl-10 pr-4  w-full rounded-md outline-none shadow-md"
          />
          <RiLock2Line className="absolute top-1/2 translate-y-1 left-2 text-2xl text-secondary " />
        </div>
        <div className="relative flex flex-col gap-y-1">
          <label className="font-medium text-gray-300">
            Repita su contraseña
          </label>
          <input
            onChange={(e) => valPassword(e)}
            name="password2"
            value={password.password2}
            type="password"
            placeholder="********"
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
        <button
          to="#"
          type="submit"
          className="text-center bg-gradient-to-r from-primary to-secondary py-2 px-4 rounded-md font-bold text-lg hover:scale-[1.02] transition-all"
        >
          Registrate
        </button>
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
