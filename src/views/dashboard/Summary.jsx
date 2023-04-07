import spotlight1 from "../../assets/svg/Spotlight1.svg";
import spotlight2 from "../../assets/svg/Spotlight2.svg";
import SideBar from "../../components/sidebars/SideBar";
import MainSeller from "../../components/MainSeller";
import StockChart from "../../components/charts/StockChart";
import SalesChart from "../../components/charts/SalesChart";
import PromoProductTable from "../../components/PromoProductTable";
import { useSelector } from "react-redux";
import TotalSalesChart from "../../components/charts/TotalSalesChart";
import InventoryChart from "../../components/charts/InventoryChart";
import MonthlyCompareChart from "../../components/charts/MonthlyCompareChart";
import BestSeller from "../../components/bossComponents/BestSeller";

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
          <section className="py-[3em] lg:col-start-3 col-end-10 h-[100vh] overflow-y-auto z-40 flex flex-wrap   w-[100vw] lg:w-auto justify-evenly">
            <div className=" h-[20em] w-[30em] flex justify-center items-center text-black">
              <TotalSalesChart />
            </div>
            <div className="h-[20em] w-[30em] flex justify-center items-center text-black">
              <InventoryChart />
            </div>
            <div className=" h-[20em] w-[30em] flex justify-center items-center text-black">
              <MonthlyCompareChart />
            </div>
            <div className=" flex justify-center items-center h-[20em] w-[30em] rounded text-black">
              <BestSeller />
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
