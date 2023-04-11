import { Link } from "react-router-dom";
import imgLanding from "../assets/png images/imgLanding.png";
import spotlight1 from "../assets/svg/Spotlight1.svg";
import spotlight2 from "../assets/svg/Spotlight2.svg";
import { Link as LinkRoll } from "react-scroll";
import { RiArrowDropLeftLine, RiArrowDropRightLine, RiFacebookFill, RiInstagramLine, RiLinkedinFill, RiTwitterLine, RiYoutubeLine } from "react-icons/ri";

import diff1 from "../assets/differential1.png";
import diff2 from "../assets/differential2.png";
import diff3 from "../assets/differential3.png";
import HomeHeader from "../components/HomeHeader";
import SectionFaq from "../components/SectionFaq";
import SectionPrice from "../components/SectionPrice";
import FuncionalitiesSection from "../components/FuncionalitiesSection";
const Home = () => {
  return (
    <main className="bg-base overflow-hidden px-10 lg:px-0">
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
              bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-xl text-white font-medium text-lg lg:text-2xl hover:scale-[1.03] transition-all flex gap-x-1 items-center"
            >
              Empezar Ahora
            </Link>
            <LinkRoll
              to="detalles"
              smooth={true}
              duration={500}
              className="border-2 border-secondary rounded-xl p-2 px-4 text-lg lg:text-2xl hover:scale-[1.03] hover:text-white transition-all text-light font-medium flex items-center gap-x-1 cursor-pointer"
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

      <section
        name="detalles"
        className="h-screen justify-center items-center flex flex-col gap-y-8 relative z-40 w-full"
      >
        <h3 className="text-4xl text-start lg:text-6xl  lg:text-center font-extrabold text-white">
          ¿Que te ofrece{" "}
          <span className="bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text">
            nuestra CRM
          </span>
          ?
        </h3>
        <section className="w-full flex flex-col lg:flex-row  justify-center items-center gap-y-4 lg:gap-x-24">
          <article>
            <img
              src={diff1}
              className="lg:w-72 lg:h-72 w-20 h-20"
              alt="task 3d"
            />
            <h3 className="text-xl font-medium text-light">
              Gestión completa de vendedores
            </h3>
            <p className="text-light/80 w-full lg:w-64">
              Registra vendedores y observa estadisticas mensuales sus ventas.
            </p>
          </article>
          <article>
            <img
              src={diff2}
              className="lg:w-72 lg:h-72 w-20 h-20"
              alt="task 3d"
            />
            <h3 className="text-xl font-medium text-light">
              Gestión sobre inventario
            </h3>
            <p className="text-light/80 w-full lg:w-64">
              Agrega, edita y controla el stock de tu negocio.
            </p>
          </article>
          <article>
            <img
              src={diff3}
              className="lg:w-72 lg:h-72 w-20 h-20"
              alt="task 3d"
            />
            <h3 className="text-xl font-medium text-light">
              Gestión completa de clientes
            </h3>
            <p className="text-light/80 w-full lg:w-64">
              Lleva un registro de clientes y sus compras.
            </p>
          </article>
        </section>
        <img
          src={spotlight2}
          alt="lights glows"
          className="absolute -bottom-44 -right-96 opacity-50 z-[-1] animate-pulse"
        />
      </section>

      <FuncionalitiesSection />

      <SectionPrice />

      <section
        name="sobre nosotros"
        className="h-[100vh]  flex-col justify-start items-start pt-24 flex gap-y-12"
      >

        <div className='flex justify-evenly w-full items-end px-12'>
          <h3 className="text-2xl w-[34rem] text-start lg:text-5xl   font-extrabold text-white">Mejoramos la relación entre <span className="bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text">empresas y clientes</span></h3>
          <p className='text-gray-300  w-[32rem]'>Nuestro equipo está formado por programadores experimentados y apasionados, que trabajan en estrecha colaboración con nuestros clientes para garantizar que nuestras soluciones satisfagan sus necesidades y objetivos comerciales. </p>
        
        </div>      
        <img src='https://img.freepik.com/foto-gratis/grupo-personas-trabajando-plan-negocios-oficina_1303-16071.jpg?w=740&t=st=1681152322~exp=1681152922~hmac=f3fc6d2b455f0e7ef49df9cebc1c95674bc8e63cb06f96b129c5cc4f54bbdb23' alt='personas viendo una computadora' className='w-full h-96 object-cover'/>
       
      </section>

      <section className="h-[100vh] justify-center items-center flex flex-col gap-y-16">
        <h3 className="text-4xl lg:text-6xl  text-center font-extrabold text-white">
          Descubre por qué mas de <span className="text-secondary">1.000</span>{" "}
          clientes elijen{" "}
          <span className="bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text">
            nuestra CRM
          </span>
        </h3>
        <section className="flex items-center justify-center gap-x-4 lg:gap-x-12">
          <RiArrowDropLeftLine className="text-4xl text-light bg-base-light/20 p-2 box-content rounded-full cursor-pointer hover:-translate-x-2 transition-transform " />

          <article className="bg-gray-100 flex items-center flex-col rounded-xl relative w-64 h-auto lg:h-56 lg:w-[48rem] border-t-[10px] border-secondary">
            <img
              src="https://img.freepik.com/foto-gratis/hombre-sonriente-relajante-al-aire-libre_23-2148739334.jpg?w=360&t=st=1681006454~exp=1681007054~hmac=34948ef6a07c938956058f17df2814b7d7b80f65f29b624a16a6177fdc3f88fd"
              alt="persona sonriendo"
              className="w-28 h-28 lg:w-32 lg:h-32 object-cover rounded-full shadow-md absolute -top-12"
            />
            <p className=" pt-16 pb-2 lg:pb-0 lg:pt-24 w-48 trauncate lg:w-[32rem] text-center text-xl font-bold text-base-light">
              "Este es la mejor CRM del mundo”
            </p>
          </article>
          <RiArrowDropRightLine className="text-4xl text-light bg-base-light/20 p-2 box-content rounded-full cursor-pointer hover:translate-x-2 transition-transform " />
        </section>
      </section>

      <section className=" justify-center items-center flex flex-col gap-y-6 lg:gap-y-10 pb-12">
        <h3 className="w-full text-3xl lg:text-5xl lg:w-[40rem]  text-center font-extrabold text-white">
          El mejor software de{" "}
          <span className="bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text">
            CRM
          </span>{" "}
          para toda tu empresa
        </h3>
        <p className="text-lg text-gray-200/90 text-center lg:text-start">
          ¿Qué estas esperando? usa este CRM, ideal para todos los equipos en tu
          empresa.
        </p>
        <Link
          to="/authentication/register"
          className="bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-xl text-white font-medium text-lg lg:text-2xl hover:scale-[1.03] transition-all flex gap-x-1 items-center"
        >
          Empezar Ahora
        </Link>
      </section>
      <section className="flex flex-col gap-y-12">
        <SectionFaq />
        <footer className="bg-base-light/40 justify-center items-center flex flex-col gap-y-6 lg:gap-y-4 py-4">
          <div className='flex gap-x-12 items-center'>
            <RiFacebookFill className="text-3xl text-light"/>
            <RiInstagramLine className="text-3xl text-light"/>
            <RiYoutubeLine className="text-3xl text-light"/>
            <RiTwitterLine className="text-3xl text-light"/>
            <RiLinkedinFill className="text-3xl text-light"/>
          </div>
         <div className="flex flex-col items-center gap-y-2">
          <h3 className="text-lg font-bold text-white tracking-wider">LOGO</h3>
          <p className="text-light/80  text-sm font-medium">Copyright © 2023, Inc.</p>
          <div className="flex items-center gap-x-12 text-light/90 underline font-medium pb-4 ">
            <p>Aspecos legales</p>
            <p>Politica de privacidad</p>
            <p>Seguridad</p>
          </div>
         </div>
        </footer>

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
