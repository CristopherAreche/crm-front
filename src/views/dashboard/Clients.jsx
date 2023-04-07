import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import BottomsActions from "../../components/bossComponents/BottomsActions";
import ClientList from "../../components/bossComponents/ClientsList";
import { resetClients, searchClients } from "../../app/features/clientSlice";
import FilterTop from "../../components/FilterTop";

const Clients = () => {

  const clients = useSelector((state) => state.clients.clients);
  const dispatch = useDispatch()

  return (
    <main className="lg:pl-72 h-[100vh] overflow-y-auto flex flex-col z-[2] w-[100vw] lg:w-auto">
      <section className="py-6 px-12 z-[2]">
      <Header
          mainText={"CLIENTES"}
          data={clients}
          onSearch={(filteredClients) =>
          dispatch(searchClients(filteredClients))
        }
          onReset={() => dispatch(resetClients())}
          />
        <FilterTop />  
        <ClientList/>
        <BottomsActions/>
      </section>
    </main>
  );
};

export default Clients;
