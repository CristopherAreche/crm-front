import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors
);

const TotalSalesChart = ({ annual_sales }) => {
  ChartJS.defaults.font.size = 20;
  ChartJS.defaults.color = "white";
  ChartJS.defaults.backgroundColor = "blue";

  const data = annual_sales;
  const chartData = {
    labels: data?.map((item) => item.month),
    datasets: [],
  };
  if (Array.isArray(data)) {
    chartData.datasets.push({
      label: "Ventas totales",
      data: data.map((item) => item.value),
      fill: false,
      borderColor: "rgba(75,192,192,1)",
    });
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
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
    <div className="w-full h-96">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default TotalSalesChart;
