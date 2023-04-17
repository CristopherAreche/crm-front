import { Line } from "react-chartjs-2";
import { datosVentas } from "../../utils/fake_api";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoss } from "../../app/features/bossSlice";
import { RiLoader4Fill } from "react-icons/ri";

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip
);

const SalesChart = () => {
  const dispatch = useDispatch();
  const { status, bossDashboard, loading } = useSelector((state) => state.boss);
  const annualSales = bossDashboard?.annual_sales;
  const user = useSelector((state) => state.auth.User);
  //const totalVentas = datosVentas.reduce((total, item) => total + item.ventas, 0)

  useEffect(() => {
    if (status === "idle") dispatch(getBoss(user.bossId));
  }, [dispatch, status, user]);

  if (!!loading) {
    return (
      <div className="flex justify-center w-full">
        <RiLoader4Fill className="animate-spin text-4xl text-secondary mt-8" />
      </div>
    );
  }

  const annualSalesData = (key) => annualSales?.map((sale) => sale[key]);

  const data = {
    labels: annualSalesData("month"),
    datasets: [
      {
        label: "Ventas Mensuales",
        data: annualSalesData("value"),
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    width: 400,
    height: 600,
    align: "center",
    plugins: {
      legend: {
        display: false,
      },
    },
    color: "white",
  };

  // if(!annualSales.length && status !== 'loading') {
  //   return(<div className="w-full h-full rounded-md bg-base-light/30 shadow-md pt-2">
  //     <h2 className="text-lg font-medium text-light px-2">Cuando usted comienze sus ventas apareceran su grafica</h2>
  //     <img src='https://static.vecteezy.com/system/resources/previews/001/187/079/non_2x/chart-png.png' alt='graphic vector' className='w-40 h-40 mx-auto '/>
  //   </div>)
  // }

  return (
    <div className="w-full h-full rounded-md bg-base-light/30 shadow-md pt-2">
      <Line data={data} options={options} />
    </div>
  );
};

export default SalesChart;
