import { useState, useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const MonthlyCompareChart = () => {
  const chartRef = useRef(null);
  const [chart, setChart] = useState(null);
  useEffect(() => {
    if (chart) {
      chart.destroy(); // destruimos el objeto Chart existente si ya existe
    }

    const ctx = chartRef.current.getContext("2d");
    const newChart = new Chart(ctx, {
      type: "bar",
      id: 1,
      data: {
        labels: ["Mes anterior", "Mes actual"],
        datasets: [
          {
            label: "Ventas",
            data: [300, 500],
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

    setChart(newChart); // actualizamos el estado del objeto Chart
  }, []);

  return (
    <div className="w-full h-full flex justify-center">
      <canvas ref={chartRef} id="myChart" width="400" height="400"></canvas>
    </div>
  );
};

export default MonthlyCompareChart;
