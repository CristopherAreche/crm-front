import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { RiLoader4Fill } from "react-icons/ri";

Chart.register(Tooltip, Legend, ArcElement);

const InventoryChart = () => {

  // Ordena la matriz de productos por la propiedad "stock"
  const {loading, bossDashboard} = useSelector(state => state.boss)
  const products = bossDashboard?.lowest_stock?.map((item) => ({
    name: item.name,
    quantity: item.quantity,
  }));
  const sortedProducts = products?.sort((a, b) => a.quantity - b.quantity);

  // Crea los datos para el gráfico de barras
  const data = {
    labels: products?.map((p) => p.name),
    datasets: [
      {
        label: "Productos con mas Stock",
        data: sortedProducts?.map((p) => p.quantity),
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

  // Configuración de opciones para el gráfico de barras
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

  if (!!loading) {
    return (
      <div className="flex justify-center w-full">
        <RiLoader4Fill className="animate-spin text-4xl text-secondary mt-8" />
      </div>
    );
  }

  return (
    <div className="">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default InventoryChart;
