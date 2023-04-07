import React from "react";
import { Line } from "react-chartjs-2";

const TotalSalesChart = () => {
  const salesData = [100, 50, 250, 350, 70, 160, 400, 600, 500, 300, 470, 700];
  const chartData = {
    labels: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    datasets: [
      {
        label: "Ventas totales",
        data: salesData,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="w-full h-96">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default TotalSalesChart;
