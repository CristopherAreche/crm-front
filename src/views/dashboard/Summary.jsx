import spotlight1 from "../../assets/svg/Spotlight1.svg";
import spotlight2 from "../../assets/svg/Spotlight2.svg";
import SideBar from "../../components/sidebars/SideBar";
import MainSeller from "../../components/MainSeller";
import StockChart from "../../components/charts/StockChart";
import SalesChart from "../../components/charts/SalesChart";
import PromoProductTable from "../../components/PromoProductTable";
import { useSelector } from "react-redux";

const Summary = () => {
  const role = useSelector((state) => state.clients.clientRole);

  return (
    <main className="bg-base h-screen text-white">
      <SideBar />
      {role !== "admin" ? (
        <>
          {" "}
          <section className=" lg:pl-72 h-[100vh] overflow-y-auto flex flex-col z-[2] w-[100vw] lg:w-auto">
            {/* Voy a reintegrar todas las estadisticas pronto!! */}
            {/* <StockChart />
              <SalesChart />
              <PromoProductTable />
              Calendario */}
            <MainSeller />
          </section>
        </>
      ) : (
        <>
          <section className="lg:pl-72 h-[100vh] overflow-y-auto flex flex-col z-[2] w-[100vw] lg:w-auto">
            <div className=" h-[20em] w-[30em] bg-green-200 flex justify-center items-center text-black">
              Grafico de Ventas totales
            </div>
            <div className="h-[20em] w-[30em] bg-green-200 flex justify-center items-center text-black">
              Grafico de inventario actual -- 10 productos con menos stock
            </div>
            <div className=" h-[20em] w-[30em] bg-green-200 flex justify-center items-center text-black">
              Grafico comparativo del mes anterio con el actual
            </div>
            <div className="bg-green-200 flex justify-center items-center h-[20em] w-[30em] rounded text-black">
              Mejor vendedor por monto generado
            </div>
          </section>
        </>
      )}
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

export default Summary;
