import {
  Chart,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(Tooltip, Legend, ArcElement);

const StockChart = () => {
  const data = {
    labels: [
      "Producto 1",
      "Producto 2",
      "Producto 3",
      "Producto 4",
      "Producto 5",

    ],
    datasets: [{
      label: 'Productos con mas Stock',
      data: [300, 200, 100, 150, 250],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)'
      ],
      hoverOffset: 4
    }]
  };

  const options = {
    maintainAspectRatio: false,
    width: 100,
    height: 100,
    align: 'start',
    plugins: {
      legend: {
        display: false
      }
    }
  };
  return (
    <div className="">
          <Doughnut data={data} options={options} />
    </div>

  );
};
export default StockChart;
