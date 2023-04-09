import { Link } from "react-router-dom";
import imgLanding from "../assets/png images/imgLanding.png";
import spotlight1 from "../assets/svg/Spotlight1.svg";
import calendar from "../assets/png images/calendar.png";
import HomeHeader from "../components/HomeHeader";
import chart3 from "../assets/png images/chart3.png";
import chart4 from "../assets/png images/chart4.png";
const Home = () => {
  return (
    <main className="bg-base overflow-hidden px-10 lg:px-20">
      <HomeHeader />
      {/* <section
        name="inicio"
        className="
        mt-[6em] flex flex-col lg:flex-row items-start lg:items-center justify-center h-[100vh] pt-12  lg:pt-0"
      > */}
      <section
        name="inicio"
        className="
      iphone12:pt-12 iphone12:mt-14
      sm:justify-center items-center
      mt-[6em] flex flex-col lg:flex-row lg:items-center justify-center h-[100vh] pt-12  lg:pt-0"
      >
        {/* Hero Info */}
        <section
          className="
          sm:justify-center sm:items-center
         text-white flex flex-col gap-y-8 lg:w-[36rem] lg:h-[30rem] "
        >
          {/* Info Principal */}
          <div
            className="
          iphone12:text-center
          flex flex-col
          justify-center
          items-center
          "
          >
            <h1
              className="
            text-light  text-4xl lg:text-5xl 2xl:text-6xl font-extrabold uppercase  lg:w-[32rem] mb-3"
            >
              Optimiza tu empresa{" "}
              <span className="bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text">
                CON NUESTRA CRM
              </span>
            </h1>
            <p
              className="
            text-light opacity-95 text-lg font-medium w-72  lg:w-96 2xl:text-xl"
            >
              Registrate y Gestiona tus clientes de manera más efectiva con
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
              bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-xl text-white font-medium text-lg lg:text-2xl hover:scale-[1.03] transition-all flex gap-x-1 items-center"
            >
              Empezar Ahora
            </Link>
            <button className="border-2 border-secondary rounded-xl p-2 px-4 text-lg lg:text-2xl hover:scale-[1.03] hover:text-white transition-all text-light font-medium flex items-center gap-x-1">
              Descubre mas
            </button>
          </div>
        </section>
        <img
          src={imgLanding}
          className=" w-96 lg:w-[27em] xxl:w-[40rem]"
          alt="3D icon of computer"
        />
      </section>

      <section
        name="detalles"
        className="h-[100vh] justify-center items-center flex"
      >
        <div className="bg-green-200 w-[95vw] h-[60vh] flex flex-col justify-center">
          <div>
            <h1 className="bg-red-400 text-light text-center text-4xl lg:text-5xl 2xl:text-6xl font-extrabold uppercase  lg:w-full">
              Todas las funciones que necesitas{" "}
              <span className="bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text">
                la tiene nuestra CRM
              </span>
            </h1>
          </div>

          <div>
            <div className="bg-purple-800 text-white h-[18em] w-[16em]">
              <div>
                <img
                  src={chart4}
                  className="animate-pulse h-[70%] self-center"
                  alt="3D icon of computer"
                />
              </div>
              <div className="bg-red-500 flex justify-center flex-col h-[30%] px-4">
                <h4 className="text-[1em]">Gestion Completa</h4>
                <p>Aqui un breve resumen de algo importante</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        name="precios"
        className="h-[100vh] justify-center items-center flex"
      >
        <div className="w-[90%] h-[60%] flex">
          <div className=" text-white w-[50%] flex flex-col justify-center items-center">
            <h1 className="text-[2em] font-bold">Precios</h1>
            <p className="px-8">
              Nuestro CRM es un programa que ayuda a las empresas a gestionar
              mejor las relaciones con sus clientes. Al utilizarlo, las empresas
              pueden proporcionar un servicio más personalizado y eficiente, lo
              que puede aumentar la satisfacción y retención del cliente.
              Además, ayuda a las empresas a tomar decisiones más informadas
              sobre cómo mejorar sus productos y servicios.
            </p>
          </div>
          <div className=" w-[50%] flex items-center">
            <img
              // src={}
              className="animate-pulse w-full"
              alt="3D icon of computer"
            />
          </div>
        </div>
      </section>

      <section
        name="soporte"
        className="h-[100vh] justify-center items-center flex"
      >
        <div className="w-[90%] h-[60%] flex">
          <div className=" text-white w-[50%] flex flex-col justify-center items-center">
            <h1 className="text-[2em] font-bold">Central de ayuda</h1>
            <p className="px-8">
              Nuestro CRM es un programa que ayuda a las empresas a gestionar
              mejor las relaciones con sus clientes. Al utilizarlo, las empresas
              pueden proporcionar un servicio más personalizado y eficiente, lo
              que puede aumentar la satisfacción y retención del cliente.
              Además, ayuda a las empresas a tomar decisiones más informadas
              sobre cómo mejorar sus productos y servicios.
            </p>
          </div>
          <div className=" w-[50%] flex items-center">
            <img
              // src={imgDetail}
              className="animate-pulse w-full"
              alt="3D icon of computer"
            />
          </div>
        </div>
      </section>

      <section
        name="sobre nosotros"
        className="h-[100vh] justify-center items-center flex"
      >
        <div className="w-[90%] h-[60%] flex">
          <div className=" text-white w-[50%] flex flex-col justify-center items-center">
            <h1 className="text-[2em] font-bold">Sobre nosotros</h1>
            <p className="px-8">
              Nuestro CRM es un programa que ayuda a las empresas a gestionar
              mejor las relaciones con sus clientes. Al utilizarlo, las empresas
              pueden proporcionar un servicio más personalizado y eficiente, lo
              que puede aumentar la satisfacción y retención del cliente.
              Además, ayuda a las empresas a tomar decisiones más informadas
              sobre cómo mejorar sus productos y servicios.
            </p>
          </div>
          <div className=" w-[50%] flex items-center">
            <img
              // src={imgDetail}
              className="animate-pulse w-full"
              alt="3D icon of computer"
            />
          </div>
        </div>
      </section>

      <section
        name="integrantes"
        className="h-[100vh] justify-center items-center flex"
      >
        <div className="w-[90%] h-[60%] flex">
          <div className=" text-white w-[50%] flex flex-col justify-center items-center">
            <h1 className="text-[2em] font-bold">Integrantes</h1>
            <p className="px-8">
              Nuestro CRM es un programa que ayuda a las empresas a gestionar
              mejor las relaciones con sus clientes. Al utilizarlo, las empresas
              pueden proporcionar un servicio más personalizado y eficiente, lo
              que puede aumentar la satisfacción y retención del cliente.
              Además, ayuda a las empresas a tomar decisiones más informadas
              sobre cómo mejorar sus productos y servicios.
            </p>
          </div>
          <div className=" w-[50%] flex items-center">
            <img
              // src={imgDetail}
              className="animate-pulse w-full"
              alt="3D icon of computer"
            />
          </div>
        </div>
      </section>

      <img
        src={spotlight1}
        alt="lights glows"
        className="absolute top-0 left-0 opacity-80 z-[1] animate-pulse"
      />
    </main>
  );
};

export default Home;
