import React, { useEffect } from "react";
import LightsSvg from "../components/LightsSvg";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";
import Cookies from "universal-cookie";
import { jwtVerify } from "jose";
import { useDispatch } from "react-redux";
import { persistenceLogin } from "../app/features/authSlice";

const SuccessPayment = () => {
  const navigate = useNavigate();

  const cookies = new Cookies();
  const myToken = cookies.get("myToken");
  const dispatch = useDispatch();

  const persitenceAuth = async (token) => {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode("secret")
    );
    return payload;
  };

  useEffect(() => {
    if (myToken === undefined) {
      navigate("/authentication");
    } else {
      persitenceAuth(myToken).then((res) => dispatch(persistenceLogin(res)));
    }
  }, [dispatch, myToken, navigate]);

  return (
    <>
      <main className="bg-base min-h-screen text-white flex items-center justify-center flex-col gap-y-6 ">
        <div className="absolute top-4 left-4 z-40">
          <Link
            to="/dashboard/perfil"
            className="flex gap-x-1 items-center font-medium group hover:text-white/90 transition-colors"
          >
            <RiArrowLeftLine className="text-2xl group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </Link>
        </div>
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text">
          PAGO CON EXITO
        </h1>
        <p className="text-lg font-medium text-light w-[60vw]">
          <span className="text-emerald-200">¡Felicidades!</span> Tu compra ha
          sido todo un éxito. Gracias por elegir nuestros productos/servicios.
          Nos complace haber cumplido tus expectativas y proporcionarte una
          experiencia de compra satisfactoria.
        </p>
      </main>
      <LightsSvg />
    </>
  );
};

export default SuccessPayment;
