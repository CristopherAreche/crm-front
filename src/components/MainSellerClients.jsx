import { useDispatch, useSelector } from "react-redux";
import { searchClients, resetClients  } from "../app/features/clientSlice";
import ClientList from "./ClientList"
import FilterBottom from "./FilterBottom"
import FilterTop from "./FilterTop"
import Header from "./Header"

const MainSellerClients = () => {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients.clients);
  return (
      <section className='py-6 px-12 z-[2] flex-col'>
        <Header
          mainText={"CLIENTES"}
          data={clients}
          onSearch={(filteredClients) =>
          dispatch(searchClients(filteredClients))
        }
          onReset={() => dispatch(resetClients())}
          />
        <FilterTop />
        <ClientList />
        <FilterBottom />
      </section>
    )
}

export default MainSellerClients