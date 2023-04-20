import HomeHeader from "../components/homeSections/HomeHeader";
import Faq from "../components/homeSections/Faq";
import Price from "../components/homeSections/Price";
import Funcionalities from "../components/homeSections/Funcionalities";
import AboutUs from "../components/homeSections/AboutUs";
import Hero from "../components/homeSections/Hero";
import Detail from "../components/homeSections/Detail";
import Testimonials from "../components/homeSections/Testimonials";
import LightsSvg from "../components/LightsSvg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main className="bg-base overflow-hidden px-10 lg:px-0">
      <HomeHeader />
      <Hero />
      <Detail />
      <Funcionalities />
      <Price />
      <Testimonials />
      <section className=" justify-center items-center flex flex-col gap-y-6 lg:gap-y-10">
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
      <section className="flex flex-col gap-y-12 ">
        <Faq />
        <AboutUs />
      </section>
      <LightsSvg />
    </main>
  );
};

export default Home;
