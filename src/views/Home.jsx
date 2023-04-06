import { Link } from "react-router-dom";
import imgLanding from "../assets/imgLanding.png";
import spotlight1 from "../assets/svg/Spotlight1.svg";
import spotlight2 from "../assets/svg/Spotlight2.svg";
import LandingHeader from "../components/LandingHeader";
const Home = () => {
  return (
    <main className="bg-base h-screen overflow-hidden px-10 lg:px-20 ">
      {/* TODO : Componetizar Landing */}
      {/* Seccion Header */}
      <LandingHeader />
      {/* Seccion Hero */}
      <section className="flex flex-col lg:flex-row items-start lg:items-center justify-center h-screen pt-12  lg:pt-0">
        {/* Hero Info */}
        <section className="text-white flex flex-col gap-y-8 items-start  lg:w-[36rem] lg:h-[30rem] ">
          {/* Info Principal */}
          <div>
            <h1 className="text-light  text-4xl lg:text-5xl 2xl:text-6xl font-extrabold uppercase  lg:w-[32rem] mb-3">
              Optimiza tu empresa con{" "}
              <span className="bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text">
                nuestra CRM
              </span>
            </h1>
            <p className="text-light opacity-95 text-lg font-medium w-72  lg:w-96 2xl:text-xl">
              Registrate y Gestiona tus clientes de manera más efectiva con
              nuestras herramientas.
            </p>
          </div>
          {/* Botones */}
          <div className="flex gap-x-4 z-[2]">
            <Link
              to="/authentication/register"
              className="bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-xl text-white font-medium text-lg lg:text-2xl hover:scale-[1.03] transition-all flex gap-x-1 items-center"
            >
              Empezar Ahora
            </Link>
            <button className="border-2 border-secondary rounded-xl p-2 px-4 text-lg lg:text-2xl hover:scale-[1.03] hover:text-white transition-all text-light font-medium flex items-center gap-x-1">
              Descubre mas
            </button>
          </div>
        </section>
        {/* Hero Image */}
        <img
          src={imgLanding}
          className="animate-pulse w-96 lg:w-[30rem] 2xl:w-[40rem]"
          alt="3D icon of computer"
        />
      </section>
      {/* Luces */}
      <img
        src={spotlight1}
        alt="lights glows"
        className="absolute top-0 left-0 opacity-80 z-[1]"
      />
      <img
        src={spotlight2}
        alt="lights glows"
        className="absolute bottom-0 right-0 opacity-80"
      />
    </main>
  );
};

export default Home;
