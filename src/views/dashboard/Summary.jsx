import spotlight1 from "../../assets/svg/Spotlight1.svg";
import spotlight2 from "../../assets/svg/Spotlight2.svg";
import SideBar from "../../components/sidebars/SideBar";
import MainSeller from "../../components/MainSeller";
import { useDispatch, useSelector } from "react-redux";
import TotalSalesChart from "../../components/charts/TotalSalesChart";
import InventoryChart from "../../components/charts/InventoryChart";
import MonthlyCompareChart from "../../components/charts/MonthlyCompareChart";
import BestSeller from "../../components/bossComponents/BestSeller";
import { useEffect } from "react";
import { RiLoader4Fill } from "react-icons/ri";
import { getBoss } from "../../app/features/bossSlice";

const Summary = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.User);
  const dashboard = useSelector((state) => state.boss.bossDashboard);

  const status = useSelector((state) => state.auth.status);
  console.log("dashboard jefe -->", dashboard);

  useEffect(() => {
    dispatch(getBoss(user.id));
  }, [user.id, dispatch]);
  

  if (status === "loading") {
    return (
      <div className="flex justify-center w-full">
        <RiLoader4Fill className="animate-spin text-4xl text-secondary mt-8" />
      </div>
    );
  }

  return (
    <main className="bg-base h-screen text-white">
      <SideBar />
      {user.role !== "admin" ? (
        <section className=" lg:pl-72 h-[100vh] overflow-y-auto flex flex-col z-[2] w-[100vw] lg:w-auto">
          <MainSeller />
        </section>
      ) : (
        <>
          <section className="bg-base lg:pl-72 overflow-y-auto h-auto flex lg:w-auto py-[3em]">
            <div className=" w-full flex-col flex justify-center items-center gap-4">
              <div className=" h-[20em] w-full flex justify-center items-center text-black">
                <TotalSalesChart annual_sales={dashboard?.annual_sales} />
              </div>
              <div className="my-[3em] h-[20em] w-full flex justify-center items-center text-black">
                <InventoryChart lowest_stock={dashboard?.lowest_stock} />
              </div>
              <div className="flex">
                <div className=" h-[20em] w-[30em] flex justify-center items-center text-black">
                  <MonthlyCompareChart annual_sales={dashboard?.annual_sales} />
                </div>
                <div className=" flex justify-center items-center h-[20em] w-[30em] rounded text-black">
                  <BestSeller best_salesman={dashboard?.best_salesman} />
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
