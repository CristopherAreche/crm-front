import spotlight1 from "../../assets/svg/Spotlight1.svg";
import spotlight2 from "../../assets/svg/Spotlight2.svg";
import SideBar from "../../components/sidebars/SideBar";
import MainSeller from "../../components/MainSeller";
import StockChart from "../../components/charts/StockChart";
import SalesChart from "../../components/charts/SalesChart";
import PromoProductTable from "../../components/PromoProductTable";
import { useDispatch, useSelector } from "react-redux";
import TotalSalesChart from "../../components/charts/TotalSalesChart";
import InventoryChart from "../../components/charts/InventoryChart";
import MonthlyCompareChart from "../../components/charts/MonthlyCompareChart";
import BestSeller from "../../components/bossComponents/BestSeller";
import { useEffect } from "react";
import { getBoss } from "../../app/features/bossSlice";
import axios from "axios";

const Summary = () => {
  const dispatch = useDispatch();
  const boss = useSelector((state) => state.boss.boss);
  const role = useSelector((state) => state.clients.clientRole);

  useEffect(() => {
    dispatch(getBoss());
  }, [dispatch]);

  return (
    <main className="bg-base h-screen text-white">
      <SideBar />
      {role !== "admin" ? (
        <section className=" lg:pl-72 h-[100vh] overflow-y-auto flex flex-col z-[2] w-[100vw] lg:w-auto">
          <MainSeller />
        </section>
      ) : (
        <>
          <section className="bg-base lg:pl-72 overflow-y-auto h-auto flex lg:w-auto py-[3em]">
            <div className=" w-full flex-col flex justify-center items-center gap-4">
              <div className=" h-[20em] w-full flex justify-center items-center text-black">
                <TotalSalesChart annual_sales={boss?.annual_sales} />
              </div>
              <div className="my-[3em] h-[20em] w-full flex justify-center items-center text-black">
                <InventoryChart lowest_stock={boss?.lowest_stock} />
              </div>
              <div className="flex">
                <div className=" h-[20em] w-[30em] flex justify-center items-center text-black">
                  <MonthlyCompareChart annual_sales={boss?.annual_sales} />
                </div>
                <div className=" flex justify-center items-center h-[20em] w-[30em] rounded text-black">
                  <BestSeller best_salesman={boss?.best_salesman} />
                </div>
              </div>
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
