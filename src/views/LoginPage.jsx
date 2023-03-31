import { Link } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";
import spotlight1 from "../assets/svg/Spotlight1.svg";
import LoginSection from "./LoginSection";

const LoginPage = () => {
  return (
    <main className="min-h-screen bg-base text-white flex ">
      <section className="hidden lg:block bg-gradient-to-r from-primary to-secondary flex-1 rounded-tr-md rounded-br-md">
        <div className="absolute top-4 left-4">
          <Link
            to="/"
            className="flex gap-x-1 items-center font-medium group hover:text-white/90 transition-colors"
          >
            <RiArrowLeftLine className="text-2xl group-hover:-translate-x-1 transition-transform" />
            Volver atras
          </Link>
        </div>
        <article className="flex flex-col  justify-center w-[28rem] 2xl:w-[32rem] mx-auto h-full">
          <div className="bg-base/40 rounded-md px-8 py-4 2xl:px-12 2xl:py-8">
            <h1 className="text-5xl 2xl:text-6xl font-bold mb-4 ">
              Descubre cómo nuestra{" "}
              <span className="bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text">
                CRM
              </span>{" "}
              puede ayudar a tu negocio.
            </h1>
            <p className="font-medium text-lg text-white/90">
              Aumenta la productividad de tu equipo con nuestra CRM
            </p>
          </div>
        </article>
      </section>
      <section className="flex-1 z-[2]">
        <LoginSection />
      </section>
      <img
        src={spotlight1}
        className="absolute top-0 right-0 opacity-80 z-[1]"
        alt="light glow"
      />
    </main>
  );
};

export default LoginPage;
