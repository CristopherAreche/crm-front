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

const TotalSalesChart = ({ annual_sales = [] }) => {
  ChartJS.defaults.font.size = 20;
  ChartJS.defaults.color = "white";
  ChartJS.defaults.backgroundColor = "blue";

  const data = [...annual_sales];

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  if (data.length !== 0) {
    for (let i = 0; i < data.length; i++) {
      const element = { ...data[i] };
      const [month, year] = element.month.split("/");
      element["date"] = new Date(
        `${year}-${months.findIndex((m) => m === month) + 1}-01`
      );
      data[i] = element;
    }

    data.sort((a, b) => a.date - b.date);

    data.forEach((item) => {
      const m = item.date.getMonth();
      const year = item.date.getFullYear();
      item.month = `${months[m]}/${year}`;
      delete item.date;
    });
  }

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
    plugins: {
      legend: {
        display: false,
      },
    },
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
    <div className="w-full ">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default TotalSalesChart;
