import { useDispatch, useSelector } from "react-redux";
import TotalSalesChart from "../charts/TotalSalesChart";
import InventoryChart from "../charts/InventoryChart";
import MonthlyCompareChart from "../charts/MonthlyCompareChart";
import BestSeller from "./BestSeller";
import { useEffect } from "react";
import { getBoss } from "../../app/features/bossSlice";
import { RiAlignVertically, RiNumbersLine } from "react-icons/ri";

const MainBoss = () => {
  const dashboard = useSelector((state) => state.boss.bossDashboard);
  const User = useSelector((state) => state.auth.User);
  const dispatch = useDispatch();

  useEffect(() => {
    if (User?.id) dispatch(getBoss(User.id));
  }, [User.id, dispatch]);

  const todayFormated = () => {
    const dateToday = new Date();

    const nameMounth = [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sep",
      "oct",
      "nov",
      "dic",
    ];

    const day = dateToday.getDate();
    const mounth = nameMounth[dateToday.getMonth()];
    const year = dateToday.getFullYear();

    return `Hoy, ${day} ${mounth} ${year}`;
  };

  return (
    <section className="py-6 px-12 z-20 grid gird-cols-1 lg:grid-cols-6 ">
      <section className="col-span-4 flex flex-col gap-y-6 lg:pr-6 pr-0 mb-4 lg:mb-0">
        <section className="flex flex-col gap-y-3.5">
          <h2 className="text-3xl font-medium text-light">
            Buenos dias,{" "}
            <span className="bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text font-bold">
              {User?.name}
            </span>
          </h2>
          <p className="text-light/80 text-sm">{todayFormated()}</p>
          <p className="text-sm text-light/90">Tu resumen del dia de hoy</p>
        </section>
        <section className="bg-base-light/30 px-2 py-4 rounded-md">
          <h5 className="text-light font-medium text-xl flex gap-x-2 items-center">
            Total Vendido <RiNumbersLine />
          </h5>
          <TotalSalesChart annual_sales={dashboard?.annual_sales} />
        </section>
        <section className="bg-base-light/30 px-2 py-4 rounded-md">
          <h5 className="text-light text-xl font-medium flex gap-x-2 items-center">
            Mensual vendido <RiAlignVertically />
          </h5>
          <MonthlyCompareChart annual_sales={dashboard?.annual_sales} />
        </section>
      </section>
      <section className="col-span-2 w-full flex flex-col gap-y-6 ">
        <BestSeller best_salesman={dashboard?.best_salesman} />
        <section className="flex flex-col items-center gap-y-4 bg-base-light/30 py-4 rounded-md shadow-md">
          <h5 className="text-light font-medium">
            10 Productos con menos Stock
          </h5>
          <InventoryChart />
        </section>
        {/* Upgrade Plan Section */}
        {/* <section className="bg-gradient-to-r from-primary to-secondary relative w-full h-52 flex justify-center items-center cursor-pointer group rounded-md">
                <div className="absolute top-0 left-0 bg-black/30 w-full h-full  opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-in-out rounded-md shadow-md flex flex-col gap-y-4 items-start justify-center px-6">
                  <div className="flex justify-between  w-full items-center ">
                    <h5 className="text-xl font-medium ">
                      Pasa al plan{" "}
                      <span className="text-orange-400">Professional</span>
                    </h5>
                    <p className="font-medium text-white text-lg">
                      <span className="font-medium bg-orange-400 p-1 rounded-md shadow-md text-xl">
                        50%
                      </span>{" "}
                      de descuento
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-2 text-sm font-bold">
                    <p className="flex gap-x-2 items-center">
                      <RiCheckboxCircleLine className="text-lg text-orange-400" />
                      CRM x5
                    </p>
                    <p className="flex gap-x-2 items-center">
                      <RiCheckboxCircleLine className="text-lg text-orange-400" />
                      Automatizacion x5
                    </p>
                    <p className="flex gap-x-2 items-center">
                      <RiCheckboxCircleLine className="text-lg text-orange-400" />
                      Stock x5
                    </p>
                  </div>
                </div>
                <img
                  src={productImage}
                  alt="product 3d icon"
                  className="w-44 h-44 group-hover:w-36 group-hover:h-36 transition-all duration-200 ease-in-out "
                />
              </section> */}
      </section>
    </section>
  );
};

export default MainBoss;
