import { Link } from "react-router-dom";
import imgLanding from "../assets/imgLanding.png";
import imgDetail from "../assets/Detail.png";
import spotlight1 from "../assets/svg/Spotlight1.svg";
import spotlight2 from "../assets/svg/Spotlight2.svg";
import { Link as LinkRoll } from "react-scroll";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

import diff1 from '../assets/differential1.png'
import diff2 from '../assets/differential2.png'
import diff3 from '../assets/differential3.png'
import HomeHeader from "../components/HomeHeader";
import SectionFaq from "../components/SectionFaq";
import SectionPrice from '../components/SectionPrice'
import FuncionalitiesSection from '../components/FuncionalitiesSection'
const Home = () => {
  return (
    <main className="bg-base overflow-hidden px-10 lg:px-0">
      <HomeHeader />
      <section
        name="inicio"
        className=" mt-[6em] flex flex-col lg:flex-row items-start lg:items-center justify-center h-[100vh] pt-12  lg:pt-0"
      >
        {/* Hero Info */}
        <section className="text-white flex flex-col gap-y-8 items-start  lg:w-[36rem] lg:h-[30rem] ">
          {/* Info Principal */}
          <div>
            <h1 className="text-white  text-5xl lg:text-5xl 2xl:text-6xl font-extrabold uppercase  lg:w-[32rem] mb-3">
              Optimiza tu empresa con <span className="bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text">
                 NUESTRA CRM
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
            <LinkRoll to="detalles" smooth={true} duration={500} className="border-2 border-secondary rounded-xl p-2 px-4 text-lg lg:text-2xl hover:scale-[1.03] hover:text-white transition-all text-light font-medium flex items-center gap-x-1 cursor-pointer">
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
        
        <h3 className="text-4xl text-start lg:text-6xl  lg:text-center font-extrabold text-white">¿Que te ofrece <span className="bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text">nuestra CRM</span>?</h3>
        <section className="w-full flex flex-col lg:flex-row  justify-center items-center gap-y-4 lg:gap-x-24">
          <article>
            <img src={diff1} className="lg:w-72 lg:h-72 w-20 h-20" alt="task 3d"/>
            <h3 className="text-xl font-medium text-light">Gestion Completa</h3>
            <p className="text-light/80 w-full lg:w-64">Voluptate duis et laborum fugiat commodo dolor cupidatat duis anim aute.</p>
          </article>
          <article>
            <img src={diff2} className="lg:w-72 lg:h-72 w-20 h-20" alt="task 3d"/>
            <h3 className="text-xl font-medium text-light">Gestion Completa</h3>
            <p className="text-light/80 w-full lg:w-64">Voluptate duis et laborum fugiat commodo dolor cupidatat duis anim aute.</p>
          </article>
          <article>
            <img src={diff3} className="lg:w-72 lg:h-72 w-20 h-20" alt="task 3d"/>
            <h3 className="text-xl font-medium text-light">Gestion Completa</h3>
            <p className="text-light/80 w-full lg:w-64">Voluptate duis et laborum fugiat commodo dolor cupidatat duis anim aute.</p>
          </article>
        </section>
        <img
        src={spotlight2}
        alt="lights glows"
        className="absolute -bottom-44 -right-96 opacity-50 z-[-1] animate-pulse"
      />
      </section>

      <FuncionalitiesSection />

      <SectionPrice/>

      <section
        name="sobre nosotros"
        className="h-[100vh]  flex-col lg:flex-row justify-center items-center flex"
      >

        <div className=" text-white w-full lg:w-[50%] flex flex-col justify-center items-start lg:items-center">
            <h1 className="text-[2em] font-bold">Sobre nosotros</h1>
            <p className=" px-0 lg:px-8">
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
              src={imgDetail}
              className="animate-pulse w-full"
              alt="3D icon of computer"
            />
        </div>
      </section>



      <section className="h-[100vh] justify-center items-center flex flex-col gap-y-16">
        <h3 className="text-4xl lg:text-6xl  text-center font-extrabold text-white">Descubre por qué mas de <span className="text-secondary">1.000</span> clientes elijen <span className="bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text">nuestra CRM</span></h3>
       <section className="flex items-center justify-center gap-x-4 lg:gap-x-12">
        <RiArrowDropLeftLine className="text-4xl text-light bg-base-light/20 p-2 box-content rounded-full cursor-pointer hover:-translate-x-2 transition-transform "/>

        <article className="bg-gray-100 flex items-center flex-col rounded-xl relative w-64 h-auto lg:h-56 lg:w-[48rem] border-t-[10px] border-secondary">

            <img src="https://img.freepik.com/foto-gratis/hombre-sonriente-relajante-al-aire-libre_23-2148739334.jpg?w=360&t=st=1681006454~exp=1681007054~hmac=34948ef6a07c938956058f17df2814b7d7b80f65f29b624a16a6177fdc3f88fd" alt="persona sonriendo" className="w-28 h-28 lg:w-32 lg:h-32 object-cover rounded-full shadow-md absolute -top-12"/>
            <p className=" pt-16 pb-2 lg:pb-0 lg:pt-24 w-48 trauncate lg:w-[32rem] text-center text-xl font-bold text-base-light">
              “Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.”
            </p>
        </article>
        <RiArrowDropRightLine className="text-4xl text-light bg-base-light/20 p-2 box-content rounded-full cursor-pointer hover:translate-x-2 transition-transform "/>
       </section>
      </section>

      <section className=" justify-center items-center flex flex-col gap-y-6 lg:gap-y-10 pb-12">
        <h3 className="w-full text-3xl lg:text-5xl lg:w-[40rem]  text-center font-extrabold text-white">El mejor software de <span className="bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text">CRM</span> para toda tu empresa</h3>
        <p className="text-lg text-gray-200/90 text-center lg:text-start">¿Qué estas esperando? usa este CRM gratuito, ideal para todos los equipos en tu empresa.</p>
        <Link
              to="/authentication/register"
              className="bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-xl text-white font-medium text-lg lg:text-2xl hover:scale-[1.03] transition-all flex gap-x-1 items-center"
            >
              Empezar Ahora
            </Link>
      </section>
      <SectionFaq />

      <img
        src={spotlight1}
        alt="lights glows"
        className="absolute top-0 left-0 opacity-80 z-[1] animate-pulse"
      />
      
    </main>
  );
};

export default Home;
