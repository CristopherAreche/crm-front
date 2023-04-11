import spotlight1 from "../assets/svg/Spotlight1.svg";
import HomeHeader from "../components/homeSections/HomeHeader";
import Faq from "../components/homeSections/Faq";
import Price from "../components/homeSections/Price";
import Funcionalities from "../components/homeSections/Funcionalities";
import AboutUs from "../components/homeSections/AboutUs";
import Hero from "../components/homeSections/Hero";
import Detail from "../components/homeSections/Detail";
import Testimonials from "../components/homeSections/Testimonials";
const Home = () => {
  return (
    <main className="bg-base overflow-hidden px-10 lg:px-0">
      <HomeHeader />
      <Hero />
      <Detail />
      <Funcionalities />
      <Price />
      <Testimonials />
      <AboutUs />
      <Faq />
      <img
        src={spotlight1}
        alt="lights glows"
        className="absolute top-0 left-0 opacity-80 z-[1] animate-pulse"
      />
    </main>
  );
};

export default Home;
