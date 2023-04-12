import React, { useState } from "react";
import { RiAlignRight, RiUserLine } from "react-icons/ri";
import { Link as LinkRoll } from "react-scroll";
import { Link } from "react-router-dom";
import NavModal from "../NavModal";

const HomeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <header
        className={`${
          navbar ? "bg-base" : "bg-transparent"
        } flex py-4 lg:py-6 items-center lg:justify-evenly justify-between px-10 lg:px-0 fixed  z-50 right-0 left-0 transition-all`}
      >
        <LinkRoll
          to="inicio"
          smooth={true}
          duration={500}
          spy={true}
          onSetActive={handleSetActive}
        >
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
          <li
            className={`${
              activeSection === "detalles" && "text-white border-b border-white"
            } font-medium text-light/80 hover:text-white transition-colors cursor-pointer`}
          >
            <LinkRoll
              to="detalles"
              smooth={true}
              duration={500}
              spy={true}
              onSetActive={handleSetActive}
            >
              Detalles
            </LinkRoll>
          </li>
          <li
            className={`${
              activeSection === "funcionalidades" &&
              "text-white border-b border-white"
            } font-medium text-light/80 hover:text-white transition-colors cursor-pointer`}
          >
            <LinkRoll
              to="funcionalidades"
              smooth={true}
              duration={500}
              spy={true}
              onSetActive={handleSetActive}
            >
              Funcionalidades
            </LinkRoll>
          </li>
          <li
            className={`${
              activeSection === "precios" && "text-white border-b border-white"
            } font-medium text-light/80 hover:text-white transition-colors cursor-pointer`}
          >
            <LinkRoll
              to="precios"
              smooth={true}
              duration={500}
              spy={true}
              onSetActive={handleSetActive}
            >
              Precios
            </LinkRoll>
          </li>

          <li
            className={`${
              activeSection === "creadores" &&
              "text-white border-b border-white"
            } font-medium text-light/80 hover:text-white transition-colors cursor-pointer`}
          >
            <LinkRoll
              to="creadores"
              smooth={true}
              duration={500}
              spy={true}
              onSetActive={handleSetActive}
            >
              Creadores
            </LinkRoll>
          </li>
          <li
            className={`${
              activeSection === "faq" && "text-white border-b border-white"
            } font-medium text-light/80 hover:text-white transition-colors cursor-pointer`}
          >
            <LinkRoll
              to="faq"
              smooth={true}
              duration={500}
              spy={true}
              onSetActive={handleSetActive}
            >
              FAQ
            </LinkRoll>
          </li>
        </ul>
        <section className="hidden lg:flex gap-x-8 items-center">
          <Link
            to="/authentication/register"
            className="bg-gradient-to-r from-primary to-secondary px-2 py-1 rounded-md text-white font-medium text-lg hover:scale-[1.03] transition-all"
          >
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
