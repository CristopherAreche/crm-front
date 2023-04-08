import React from "react";
import { Bar } from "react-chartjs-2";

const MayorStockChart = () => {
  const products = [
    { name: "Producto A", stock: 100 },
    { name: "Producto B", stock: 80 },
    { name: "Producto C", stock: 70 },
    { name: "Producto D", stock: 60 },
    { name: "Producto E", stock: 55 },
    { name: "Producto F", stock: 50 },
    { name: "Producto G", stock: 88 },
    { name: "Producto H", stock: 93 },
    { name: "Producto I", stock: 45 },
    { name: "Producto G", stock: 60 },
  ];
  // Ordena la matriz de productos por la propiedad "stock"
  const sortedProducts = products.sort((a, b) => b.stock - a.stock);

  // Toma los primeros 10 elementos de la matriz de productos ordenada
  const HighStockProducts = sortedProducts.slice(0, 10);

  // Crea los datos para el gráfico de barras
  const data = {
    labels: HighStockProducts.map((p) => p.name),
    datasets: [
      {
        label: "Top 10 productos con mayor stock",
        data: HighStockProducts.map((p) => p.stock),
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
    <div className="bg-base/40 rounded-lg shadow-md p-6 w-full h-full justify-center flex">
      <Bar data={data} options={options} />
    </div>
  );
};

export default MayorStockChart;
