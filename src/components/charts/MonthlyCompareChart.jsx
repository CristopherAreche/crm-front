import { useState, useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const MonthlyCompareChart = ({ annual_sales }) => {
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

  const mesActual = new Date().getMonth();
  const mesAnterior = new Date().getMonth() - 1;
  const valorMesActual = annual_sales?.find((item) => {
    const mes = months.findIndex((m) => m === item.month.split("/")[0]);
    return mes === mesActual;
  })?.value;
  const valorMesAnterior = annual_sales?.find((item) => {
    const mes = months.findIndex((m) => m === item.month.split("/")[0]);
    return mes === mesAnterior;
  })?.value;

  const chartRef = useRef(null);
  const [chart, setChart] = useState(null);
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const newChart = new Chart(ctx, {
      type: "bar",
      id: 1,
      data: {
        labels: ["Mes anterior", "Mes actual"],
        datasets: [
          {
            label: "Ventas",
            data: [valorMesAnterior, valorMesActual],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
            ],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
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
      },
    });

    setChart(newChart);
    return () => {
      newChart.destroy();
    }; // actualizamos el estado del objeto Chart
  }, [annual_sales]);

  return (
    <div className="">
      <canvas ref={chartRef} id="myChart"></canvas>
    </div>
  );
};

export default MonthlyCompareChart;
