import React from "react";
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

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip
);

const SalesChart = () => {
  const totalVentas = datosVentas.reduce((total, item) => total + item.ventas, 0);
  const data = {
    labels: datosVentas.map((item) => item.mes),
    datasets: [
      {
        label: "Ventas Mensuales",
        data: datosVentas.map((item) => (item.ventas / totalVentas) * 100),
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    width: 400,
    height: 600,
    align: 'center',
    plugins: {
      legend: {
        display: false
      }
    },
    color: 'white'

  };

  return (
    <div className="w-full h-full rounded-md bg-base-light/30 shadow-md pt-2">
      <Line data={data} options={options} />
    </div>
  );
};

export default SalesChart;
