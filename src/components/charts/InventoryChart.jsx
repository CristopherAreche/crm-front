import React from "react";
import  {Bar}  from "react-chartjs-2";
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

const InventoryChart = () => {
  const products = [
    { name: "Producto A", stock: 20 },
    { name: "Producto B", stock: 5 },
    { name: "Producto C", stock: 30 },
    { name: "Producto D", stock: 20 },
    { name: "Producto E", stock: 50 },
    { name: "Producto F", stock: 46 },
    { name: "Producto G", stock: 12 },
    { name: "Producto H", stock: 45 },
    { name: "Producto I", stock: 24 },
    { name: "Producto G", stock: 60 },
  ];
  // Ordena la matriz de productos por la propiedad "stock"
  const sortedProducts = products.sort((a, b) => a.stock - b.stock);

  // Toma los primeros 10 elementos de la matriz de productos ordenada
  const lowStockProducts = sortedProducts.slice(0, 10);

  // Crea los datos para el gráfico de barras
  const data = {
    labels: lowStockProducts.map((p) => p.name),
    datasets: [
      {
        label: "Top 10 productos con menor stock",
        data: lowStockProducts.map((p) => p.stock),
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
    <div className="bg-base/40 rounded-lg shadow-md p-6 w-full h-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default InventoryChart;
