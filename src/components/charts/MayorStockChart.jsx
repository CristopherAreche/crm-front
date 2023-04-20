import React from "react";
import { Bar } from "react-chartjs-2";

const MayorStockChart = ({ products = [] }) => {
  const sortedProducts = [...products];
  sortedProducts.sort((a, b) => b.quantity - a.quantity);
  const HighStockProducts = sortedProducts.slice(0, 10);
  const data = {
    labels: HighStockProducts.map((p) => p.name),
    datasets: [
      {
        label: "Top 10 productos con mayor stock",
        data: HighStockProducts.map((p) => p.quantity),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Configuración de opciones para el gráfico de barras
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
    <div className="w-auto lg:w-[30rem] py-12">
      <Bar data={data} options={options} />
    </div>
  );
};

export default MayorStockChart;
