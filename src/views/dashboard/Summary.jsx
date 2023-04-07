import spotlight1 from "../../assets/svg/Spotlight1.svg";
import spotlight2 from "../../assets/svg/Spotlight2.svg";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/sidebars/SideBar";
import StockChart from "../../components/charts/StockChart";
import SalesChart from "../../components/charts/SalesChart";
import PromoProductTable from "../../components/PromoProductTable";
import { useSelector } from "react-redux";

const Summary = () => {
  const role = useSelector((state) => state.clients.clientRole);

  return (
    <main className="bg-base h-screen text-white grid grid-cols-10">
      <SideBar />
      {role !== "admin" ? (
        <>
          {" "}
          <main className=" py-[3em] col-span-8 h-[100vh] overflow-y-auto z-40 flex flex-wrap   w-[100vw] lg:w-auto justify-evenly">
            <Outlet />
            <div className=" h-[20em] w-[30em]">
              <StockChart />
            </div>
            <div className="h-[20em] w-[30em]">
              <SalesChart />
            </div>
            <div className=" h-[20em] w-[30em]">
              <PromoProductTable />
            </div>
            <div className="bg-base-light/80 h-[20em] w-[30em] rounded justify-center items-center flex">
              Calendario
            </div>
          </main>
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
        </>
      ) : (
        <>
          <main className=" py-[3em] lg:col-start-3 col-end-10 h-[100vh] overflow-y-auto z-40 flex flex-wrap   w-[100vw] lg:w-auto justify-evenly">
            <Outlet />
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
          </main>
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
        </>
      )}
    </main>
  );
};

export default Summary;
