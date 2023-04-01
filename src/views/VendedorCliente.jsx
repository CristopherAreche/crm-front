import SideBar from "../components/sideBar";
import Header from "../components/Header";
import ClientList from "../components/ClientList";
import FilterBottom from "../components/FilterBottom";
import FilterTop from "../components/FilterTop";
import spotlight1 from "../assets/svg/Spotlight1.svg";
import spotlight2 from "../assets/svg/Spotlight2.svg";

const VendedorCliente = () => {
  return (
    <main className="bg-base h-screen text-white grid grid-cols-8">
      <SideBar typeSidebar="seller-clients" />

      {/* View Clients */}
      <section className="col-span-6 h-[100vh] overflow-y-auto z-40 lg:px-6 flex flex-col  items-center w-[100vw] lg:w-auto">
        <Header />
        <FilterTop />
        <ClientList />
        <FilterBottom />
      </section>

      {/* Luces */}
      <img
        src={spotlight1}
        className="absolute top-0 left-0 opacity-80 z-[1]"
        alt="light glow"
      />
      <img
        src={spotlight2}
        className="absolute bottom-0 right-0 opacity-80 z-[1]"
        alt="light glow"
      />
    </main>
  );
};

export default VendedorCliente;
