import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, Tooltip, Legend, BarElement);
const StockChart = () => {
  const data = {
    labels: [
      "Producto 1",
      "Producto 2",
      "Producto 3",
      "Producto 4",
      "Producto 5",
      "Producto 6",
      "Producto 7",
      "Producto 8",
      "Producto 9",
      "Producto 10",
    ],
    datasets: [
      {
        label: "Top 10 Productos en Stock",
        data: [20, 35, 15, 50, 45, 30, 25, 60, 10, 70],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      // yAxes: [
      //   {
      //     ticks: {
      //       beginAtZero: true,
      //     },
      //   },
      // ],
    },
  };

  return (
    <div className="w-[50%] text-white">
      <Bar data={data} />
    </div>
  );
};
export default StockChart;
