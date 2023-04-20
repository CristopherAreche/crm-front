import { RiCloseLine, RiTyphoonFill, RiUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

const NavModal = ({ isOpen, onOpen }) => {
  const closeModal = () => {
    onOpen(false);
  };

  return (
    <section
      className={`${
        isOpen ? "left-0" : "-left-full"
      } bg-base-light fixed h-screen w-full top-0 text-center pt-20 z-50 transition-all duration-200`}
    >
      <button
        onClick={closeModal}
        className="absolute top-4 right-4  text-4xl lg:hidden hover:bg-base/40 rounded-full py-1 px-2 box-content z-50 transition-all"
      >
        <RiCloseLine className="text-4xl text-light " />
      </button>
      <LinkRoll
            to="inicio"
            smooth={true}
            duration={500}
            spy={true}
            onClick={closeModal}
          >
          <div className="text-3xl flex justify-center items-center gap-x-2  font-bold tracking-widest mb-4">
            <RiTyphoonFill className="text-white" />
            <p className="bg-gradient-to-r from-primary  to-secondary text-end  text-transparent bg-clip-text hover:underline hover:text-light transition-all cursor-pointer">
              CRM
            </p>
          </div>
      </LinkRoll>
      
      <ul className="flex flex-col gap-y-4 z-10 mb-4">
        <li
          className="font-medium text-xl
            py-4 hover:bg-base/40 text-gray-300 hover:text-white transition-all cursor-pointer"
        >
          <LinkRoll
            to="detalles"
            smooth={true}
            duration={500}
            spy={true}
            onClick={closeModal}
          >
            Detalles
          </LinkRoll>
        </li>
        <li
          className="font-medium text-xl
            py-4 hover:bg-base/40 text-gray-300 hover:text-white transition-all cursor-pointer"
        >
          <LinkRoll
            to="funcionalidades"
            smooth={true}
            duration={500}
            spy={true}
            onClick={closeModal}
          >
            Funcionalidades
          </LinkRoll>
        </li>
        <li
          className="font-medium text-xl
            py-4 hover:bg-base/40 text-gray-300 hover:text-white transition-all cursor-pointer"
        >
          <LinkRoll
            to="precios"
            smooth={true}
            duration={500}
            spy={true}
            onClick={closeModal}
          >
            Precios
          </LinkRoll>
        </li>
        <li
          className="font-medium text-xl
            py-4 hover:bg-base/40 text-gray-300 hover:text-white transition-all cursor-pointer"
        >
          <LinkRoll
            to="faq"
            smooth={true}
            duration={500}
            spy={true}
            onClick={closeModal}
          >
            FAQ
          </LinkRoll>
        </li>
        <li
          className="font-medium text-xl
            py-4 hover:bg-base/40 text-gray-300 hover:text-white transition-all cursor-pointer"
        >
          <LinkRoll
            to="creadores"
            smooth={true}
            duration={500}
            spy={true}
            onClick={closeModal}
          >
            Creadores
          </LinkRoll>
        </li>
      </ul>
      <div className="flex gap-x-8 w-full justify-center items-center">
        <Link
          to="/authentication/register"
          className="bg-gradient-to-r from-primary to-secondary px-2 py-1 rounded-md text-white font-medium text-xl hover:scale-[1.03] transition-all whitespace-nowrap"
        >
          Empezar Ahora
        </Link>
        <Link
          to="/authentication"
          className=" flex gap-x-1 items-center text-white text-xl font-medium hover:text-light transition-colors border border-secondary px-2 py-1 rounded-md whitespace-nowrap"
        >
          <RiUserLine className="text-2xl" /> LOG IN
        </Link>
      </div>
    </section>
  );
};

export default NavModal;
