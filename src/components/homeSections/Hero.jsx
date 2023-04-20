import React from "react";
import imgLanding from "../../assets/png images/imgLanding.png";
import { Link as LinkRoll } from "react-scroll";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      name="inicio"
      className="
    iphone12:pt-12 iphone12:mt-14
    
    sm:justify-center items-center
    mt-[6em] flex flex-col lg:flex-row lg:items-center justify-center h-[100vh] pt-12  lg:pt-0 z-20"
    >
      {/* Hero Info */}
      <section
        className="
        sm:justify-center sm:items-center lg:items-start 
       text-white flex flex-col gap-y-8 lg:w-[36rem] lg:h-[30rem] z-20 "
      >
        {/* Info Principal */}
        <div>
          <h1 className="text-white  text-5xl lg:text-5xl 2xl:text-6xl font-extrabold uppercase  lg:w-[32rem] mb-3">
            Optimiza tu empresa con{" "}
            <span className="bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text">
              NUESTRA CRM
            </span>
          </h1>
          <p
            className="
          text-light opacity-95 text-lg font-medium w-72  lg:w-96 2xl:text-xl"
          >
            Registrate y Gestióna tus clientes de manera más efectiva con
            nuestras herramientas.
          </p>
        </div>
        {/* Botones */}
        <div
          className="
        items-center justify-center
        flex gap-x-4 z-[2]"
        >
          <Link
            to="/authentication/register"
            className="
            iphone12:text-center
            bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-xl text-white font-medium text-lg lg:text-2xl hover:scale-[1.03] transition-all flex gap-x-1 items-center whitespace-nowrap"
          >
            Empezar Ahora
          </Link>
          <LinkRoll
            to="detalles"
            smooth={true}
            duration={500}
            className="border-2 border-secondary rounded-xl p-2 px-4 text-lg lg:text-2xl hover:scale-[1.03] hover:text-white transition-all text-light font-medium flex items-center gap-x-1 cursor-pointer whitespace-nowrap"
          >
            Descubre mas
          </LinkRoll>
        </div>
      </section>
      <img
        src={imgLanding}
        className=" animate-pulse  w-96 lg:w-[30rem] 2xl:w-[40rem]"
        alt="3D icon of computer"
      />
    </section>
  );
};

export default Hero;
