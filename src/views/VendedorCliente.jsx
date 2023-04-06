import ClientList from "../components/ClientList";
import FilterBottom from "../components/FilterBottom";
import FilterTop from "../components/FilterTop";
import Header from "../components/Header";
import { resetClients, searchClients } from "../app/features/clientSlice";
import { useSelector, useDispatch } from "react-redux";

//HEADER ES UN COMPONENTE REUTILIZABLE POR ESO HAY QUE PASARLE POR PROPS ESAS PROPIEDADES
const VendedorCliente = () => {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients.clients);

  return (
    <section className="py-6 px-12 z-[2] ">
      <Header
        mainText={"CLIENTES"}
        data={clients}
        onSearch={(filteredClients) => dispatch(searchClients(filteredClients))}
        onReset={() => dispatch(resetClients())}
      />
      <FilterTop />
      <ClientList />
      <FilterBottom />
    </section>
  );
};

export default VendedorCliente;
