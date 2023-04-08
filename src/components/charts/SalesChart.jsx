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
  const data = {
    labels: datosVentas.map((item) => item.mes),
    datasets: [
      {
        label: "Ventas Mensuales",
        data: datosVentas.map((item) => item.ventas),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      // yAxes: [
      //   {
      //     id: "y",
      //     ticks: {
      //       beginAtZero: true,
      //     },
      //   },
      // ],
    },
  };

  return (
    <div className="w-[50%] text-white">
      <Line data={data} options={options} />
    </div>
  );
};

export default SalesChart;
