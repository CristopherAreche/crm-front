import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { RiLoader4Fill } from "react-icons/ri";

Chart.register(Tooltip, Legend, ArcElement);

const StockChart = () => {
  const { status, products } = useSelector((state) => state.products);
  const fiveMostStock = [...products]
    .sort((a, b) => b.quantity - a.quantity)
    .slice(0, 5);

  const fiveMostStockName = () => {
    const namesProduct = fiveMostStock.map((product) => product.name);
    return namesProduct;
  };
  const fiveMostStockQuantity = () => {
    const quantityProduct = fiveMostStock.map((product) => product.quantity);
    return quantityProduct;
  };
  const data = {
    labels: fiveMostStockName(),
    datasets: [
      {
        label: "Productos con mas Stock",
        data: fiveMostStockQuantity(),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    width: 100,
    height: 100,
    align: "start",
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  if (status === "loading") {
    return (
      <div className="flex justify-center w-full">
        <RiLoader4Fill className="animate-spin text-4xl text-secondary mt-8" />
      </div>
    );
  }
  return (
    <div className="w-full">
      <Doughnut data={data} options={options} />
    </div>
  );
};
export default StockChart;
