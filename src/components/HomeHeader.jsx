import React, { useState } from "react";
import { RiAlignRight, RiUserLine } from "react-icons/ri";
import { Link as LinkRoll } from "react-scroll";
import { Link } from "react-router-dom";
import NavModal from "./NavModal";

const HomeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex py-4 lg:py-6 items-center justify-evenly fixed bg-base z-50 right-0 left-0">
        <LinkRoll to="inicio" smooth={true} duration={500}>
          <h2 className="text-xl text-white  font-bold tracking-widest hover:text-light transition-colors cursor-pointer z-10">
            LOGO
          </h2>
        </LinkRoll>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden block z-[2]"
        >
          <RiAlignRight className="text-4xl text-white hover:text-white/60 transition-colors cursor-pointer" />
        </button>
        <ul className="hidden lg:flex gap-x-6 z-10 ">
          <LinkRoll to="detalles" smooth={true} duration={500}>
            <li className="font-medium text-light/80 hover:text-white transition-colors cursor-pointer">
              Detalles
            </li>
          </LinkRoll>
          <LinkRoll to="precios" smooth={true} duration={500}>
            <li className="font-medium text-light/80 hover:text-white transition-colors cursor-pointer">
              Precios
            </li>
          </LinkRoll>
          <LinkRoll to="soporte" smooth={true} duration={500}>
            <li className="font-medium text-light/80 hover:text-white transition-colors cursor-pointer">
              Central de ayuda
            </li>
          </LinkRoll>
          <LinkRoll to="sobre nosotros" smooth={true} duration={500}>
            <li className="font-medium text-light/80 hover:text-white transition-colors cursor-pointer">
              Sobre nosotros
            </li>
          </LinkRoll>
          <LinkRoll to="integrantes" smooth={true} duration={500}>
            <li className="font-medium text-light/80 hover:text-white transition-colors cursor-pointer">
              Integrantes
            </li>
          </LinkRoll>
        </ul>
        <section className="hidden lg:flex gap-x-8 items-center">
          <Link to="/authentication/register" className="bg-gradient-to-r from-primary to-secondary px-2 py-1 rounded-md text-white font-medium text-lg hover:scale-[1.03] transition-all">
            Empezar Ahora
          </Link>
          <Link
            to="/authentication"
            className=" flex gap-x-1 items-center text-white font-medium hover:text-light transition-colors "
          >
            <RiUserLine className="text-2xl" /> Iniciar Sesión
          </Link>
        </section>
      </header>
      <NavModal isOpen={isOpen} onOpen={setIsOpen} />
    </>
  );
};

export default HomeHeader;
