import React from "react";
import { Bar } from "react-chartjs-2";
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

const InventoryChart = ({ lowest_stock }) => {
  console.log("lowest -->", lowest_stock);
  const products = lowest_stock?.map((item) => ({
    name: item.name,
    quantity: item.quantity,
  }));
  // Ordena la matriz de productos por la propiedad "stock"
  //un comentario
  const sortedProducts = products?.sort((a, b) => a.quantity - b.quantity);

  // Crea los datos para el gráfico de barras
  const data = {
    labels: products?.map((p) => p.name),
    datasets: [
      {
        label: "Productos con menor stock",
        data: sortedProducts?.map((p) => p.quantity),
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
    <div className=" rounded-lg shadow-md w-full h-full flex justify-center">
      <Bar data={data} options={options} />
    </div>
  );
};

export default InventoryChart;
