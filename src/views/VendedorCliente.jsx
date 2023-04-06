import Header from "../components/Header";
import ClientList from "../components/ClientList";
import FilterBottom from "../components/FilterBottom";
import FilterTop from "../components/FilterTop";

const VendedorCliente = () => {
  return (
    <section className="py-6 px-12 z-[2] ">
      <Header />
      <FilterTop />
      <ClientList />
      <FilterBottom />
    </section>
  );
};

export default VendedorCliente;
