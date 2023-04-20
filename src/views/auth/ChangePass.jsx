import React, { useState } from "react";
import {
  RiLock2Line,
  RiLogoutCircleRLine,
  RiTyphoonFill,
} from "react-icons/ri";
import { Link, useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import swal from "sweetalert";

export default function ChangePass() {
  const navigate = useNavigate();
  const { id, role } = useParams();
  const [password, setPassWord] = useState({
    password: "",
    password2: "",
  });
  const [errorPassword, setErrorPassword] = useState(false);

  const valPassword = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPassWord({
      ...password,
      [name]: value,
    });

    if (name === "password2" && value !== password.password) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
  };

  const sendPassword = async () => {
    if (errorPassword || password.password.length < 8) {
      await swal(
        "Error",
        "Ambas constraseñas deben coincidir \ny tener almenos 8 caracteres. \n\nFavor de revizar los datos Ingresados",
        "error"
      );
    } else {
      const info = {
        id,
        password: password.password,
      };

      try {
        let data;
        if (role === "admin") {
          const formData = new FormData();
          formData.append("formLogin", JSON.stringify(info));
          const response = await axios.put(
            `${process.env.REACT_APP_URL}/boss`,
            formData
          );
          data = response.data;
        } else {
          const formData = new FormData();
          formData.append("sellerData", JSON.stringify(info));
          const response = await axios.put(
            `${process.env.REACT_APP_URL}/salesman`,
            formData
          );
          data = response.data;
        }
        await swal(
          "Modificación",
          `${data.name}, tus datos han sido actualizados correctamente`,
          "success"
        );
        navigate("/");
      } catch (error) {
        await swal("Error", `${error.response.data.error}`, "error");
      }
    }
  };
  //cambio
  return (
    <main className="min-h-screen bg-base text-white flex z-50 ">
      <section className="hidden lg:block bg-gradient-to-r from-primary to-secondary flex-1 rounded-tr-md rounded-br-md">
        <Link
          to="/dashboard/perfil"
          className="flex px-12 py-2  active:scale-95 active:bg-light/20 gap-x-6 items-center text-lg text-grey-300 font-medium   cursor-pointer  hover:text-gray-100 transition-all"
        >
          <RiLogoutCircleRLine className="text-2xl text-secondary" />
          Volver
        </Link>
        <article className="flex flex-col  justify-center w-[28rem] 2xl:w-[32rem] mx-auto h-full">
          <div className="bg-base/40 rounded-md px-8 py-4 2xl:px-12 2xl:py-8">
            <h1 className="text-center text-5xl 2xl:text-6xl font-bold mb-4 ">
              <span className=" bg-gradient-to-r from-primary flex justify-center   to-secondary text-transparent bg-clip-text">
                <RiTyphoonFill className=" text-white mr-4 " /> CRM
              </span>

              <div>
                <span className="text-center text-2xl">
                  {"\nCambio de contraseña "}
                </span>
              </div>
            </h1>
            <h1 className="text-5xl 2xl:text-6xl font-bold mb-4 "></h1>
            <article>
              <div className="relative flex flex-col gap-y-1">
                <label className="font-medium text-gray-300">
                  Contraseña nueva
                </label>
                <input
                  onChange={(e) => valPassword(e)}
                  name="password"
                  value={password.password}
                  type="password"
                  className="bg-base-light/60 py-2 pl-10 pr-4  w-full rounded-md outline-none shadow-md"
                />
                <RiLock2Line className="absolute top-1/2 translate-y-1 left-2 text-2xl text-secondary " />
              </div>
              <div className="relative flex flex-col gap-y-1">
                <label className="font-medium text-gray-300 mt-3">
                  Repita su contraseña
                </label>
                <input
                  onChange={(e) => valPassword(e)}
                  name="password2"
                  value={password.password2}
                  type="password"
                  className="bg-base-light/60 py-2 pl-10 pr-4  w-full rounded-md outline-none shadow-md"
                />
                {errorPassword ? (
                  <span className="text-red-900">
                    Las contraseñas no coinciden
                  </span>
                ) : null}
                <RiLock2Line className="absolute top-1/2 translate-y-1 left-2 text-2xl text-secondary " />
              </div>
            </article>
            <article className="flex flex-col  justify-center mt-6">
              <button
                onClick={sendPassword}
                to="/authentication/register"
                className="bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-xl text-white font-medium text-lg lg:text-2xl hover:scale-[1.03] transition-all gap-x-1 items-center"
              >
                Cambiar contraseña
              </button>
            </article>
          </div>
        </article>
      </section>

      <div className="absolute top-0 right-0 z-[-1] opacity-70">
        <svg
          width="783"
          height="388"
          viewBox="0 0 783 388"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_29_36)">
            <rect
              width="478"
              height="366"
              transform="matrix(-1 0 0 1 583 -178)"
              fill="#87D0D0"
              fill-opacity="0.27"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_29_36"
              x="-95"
              y="-378"
              width="878"
              height="766"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_29_36"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div></div>
    </main>
  );
}
