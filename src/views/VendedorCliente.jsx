import Header from "../components/Header";
import ClientList from "../components/ClientList";
import FilterBottom from "../components/FilterBottom";
import FilterTop from "../components/FilterTop";

const VendedorCliente = () => {
  return (
    <>
      <Header />
      <FilterTop />
      <ClientList />
      <FilterBottom />
    </>
  );
};

export default VendedorCliente;
