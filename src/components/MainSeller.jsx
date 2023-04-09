import tasksImage from "../assets/png images/tasksImage.png";
import productImage from "../assets/png images/productImage.png";
import {
  RiTimeLine,
  RiArrowDropRightLine,
  RiArrowDropLeftLine,
  RiSecurePaymentLine,
  RiGroupLine,
  RiShoppingBagLine,
} from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";
import SalesChart from "./charts/SalesChart";
import StockChart from "./charts/StockChart";
import ToDoList from "./ToDoList";

const itemsLastesProducst = [
  {
    source:
      "https://img.freepik.com/fotos-premium/cinturon-seguridad-construccion-cadena-ganchos-mosqueton-metal-tablero-madera_275559-16027.jpg?w=740",
    name: "Arnes",
    sale_price: 40,
    category: "Utensillo",
    lastest: "1",
  },
  {
    source:
      "https://img.freepik.com/fotos-premium/botella-leche-chupete-sobre-mesa-madera-sobre-fondo-azul_392895-186990.jpg?w=360",
    name: "Biberon",
    sale_price: 100,
    category: "Utensillo",
    lastest: "3",
  },
  {
<<<<<<< HEAD
    source:
      "https://img.freepik.com/foto-gratis/cuchara-juguete-ninos-cubo-sobre-hierba_127675-2898.jpg?w=740&t=st=1680985860~exp=1680986460~hmac=14ecffa79b4cf1c4a9d4be3c72f605b901dbf146029eefe43e3900e8ac0dd969",
    product: "Arenero",
=======
    source : 'https://img.freepik.com/foto-gratis/cuchara-juguete-ninos-cubo-sobre-hierba_127675-2898.jpg?w=740&t=st=1680985860~exp=1680986460~hmac=14ecffa79b4cf1c4a9d4be3c72f605b901dbf146029eefe43e3900e8ac0dd969',
    name : 'Arenero',
>>>>>>> main
    sale_price: 200,
    category: "Utensillo",
    lastest: "6",
  },
];

const itemsResume = [
  {
    title: "Clientes",
    quanqity: 26,
  },
  {
    title: "Productos",
    quanqity: 37,
  },
  {
    title: "Vips",
    quanqity: 9,
  },
  {
    title: "Habi",
    quanqity: 23,
  },
  {
    title: "Desha",
    quanqity: 3,
  },
];

const seller = {
  id: "ae8b659a-1158-411e-a16c-06ca9c0accc5",
  name: "Barbara Clement",
  address: "Kulas Light Apt. 556, Gwenborough",
  email: "Sincere@april.biz",
  phone: "98265435787",
  enable: true,
  createdAt: "2023-04-07T09:05:53.674Z",
  updatedAt: "2023-04-07T09:05:53.674Z",
  bossId: "e2240175-ccee-4539-9a41-0e9b8d75303f",
  avgFeedback: 2.5,
  total_monthly_sales: 65390,
  role: "seller",
};

const MainSeller = () => {
  const { user } = useAuth0();
  return (
    <section className="py-6 px-12 z-[2]  grid gird-cols-1 lg:grid-cols-6">
      {/* Left Section */}
      <section className="col-span-4 flex flex-col gap-y-4 items-start ">
        {/* Present Section */}
        <section className="flex flex-col gap-y-3.5">
          <h2 className="text-3xl font-medium text-light">
            Buenos dias,{" "}
            <span className="bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text font-bold">
              {seller.name}
            </span>
          </h2>
          <p className="text-light/80 text-sm">Hoy, 8 abr 2023 </p>
          <p className="text-sm text-light/90">
            Aqui podras seguir tus movimientos, y gestionar tu procesos
          </p>
        </section>
        {/* Section Resume */}
        <section className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <article className="bg-base-light/30 shadow-md rounded-md py-2 px-3 flex flex-col items-start gap-y-2">
            <RiSecurePaymentLine className="text-3xl text-light/80" />
            <h3 className="text-light text-3xl font-bold tracking-wide">
              ${seller.total_monthly_sales}
            </h3>
            <p className="text-sm font-medium text-light/80">Balance actual</p>
          </article>
          <article className="bg-base-light/30 shadow-md rounded-md py-2 px-3 flex flex-col items-start gap-y-2">
            <h3 className="text-light text-3xl font-bold tracking-wide">12</h3>
            <p className="text-sm font-medium text-light/80 flex gap-x-1 items-center">
              Clientes <RiGroupLine />
            </p>
            <footer className="flex gap-x-2 items-center">
              <p className="flex gap-x-1 items-center text-sm ">
                9
                <span className="text-xs font-medium text-emerald-200">
                  Hab
                </span>
              </p>
              <p className="flex gap-x-1 items-center text-sm ">
                4
                <span className="text-xs font-medium text-yellow-200">
                  Vips
                </span>
              </p>
              <p className="flex gap-x-1 items-center text-sm ">
                2<span className="text-xs font-medium text-red-200">Des</span>
              </p>
            </footer>
          </article>
          <article className="bg-base-light/30 shadow-md rounded-md py-2 px-3 flex flex-col items-start gap-y-2">
            <h3 className="text-light text-3xl font-bold tracking-wide">17</h3>
            <p className="text-sm font-medium text-light/80 flex gap-x-1 items-center w-28">
              Productos disponibles <RiShoppingBagLine className="text-4xl" />
            </p>
            <footer className="flex gap-x-2 items-center">
              <p className="flex gap-x-1 items-center text-sm ">
                15
                <span className="text-xs font-medium text-emerald-200">
                  Hab
                </span>
              </p>
              <p className="flex gap-x-1 items-center text-sm ">
                2<span className="text-xs font-medium text-red-200">Des</span>
              </p>
              <p className="flex gap-x-1 items-center text-sm ">
                4
                <span className="text-xs font-medium text-yellow-200">Cat</span>
              </p>
            </footer>
          </article>
        </section>
        {/* Section Estadistics Sales */}
        <section className="flex flex-col items-start gap-y-2 pr-0 lg:pr-12 w-full pt-0 lg:pt-16 ">
          <div className="flex items-center justify-between w-full">
            <h5 className="text-light font-medium">Ganancias</h5>
            <p className="text-xs font-medium text-light/70 hover:underline hover:text-light/90 transition-all cursor-pointer">
              Comparar
            </p>
          </div>
          <SalesChart />
        </section>
        {/* Tasks Section */}
        <section className="">
          <ToDoList />
        </section>
      </section>
      {/* Right Section */}
      <section className="col-span-2 flex flex-col gap-y-12">
        {/* Section Lastest Products */}
<<<<<<< HEAD
        <section className="py-2 ">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-light/95 font-medium">Sus ultimos productos</h3>
            <p className="text-xs font-medium text-light/80">Ver todos</p>
          </div>
          {/* Lastest Products Cards */}
          <section className="flex flex-col gap-y-5">
            {itemsLastesProducst.map((item) => (
              <article
                key={item.product}
                className="flex items-center justify-between bg-base-light/30 pr-2 shadow-md rounded-md"
              >
                <div className="flex items-center gap-x-2">
                  <img
                    src={item.source}
                    className="w-14 h-14 object-cover rounded-tl-md rounded-bl-md"
                    alt="product"
                  />
                  <div>
                    <p className="text-sm font-medium text-light/90">
                      {item.name}
                    </p>
                    <p className="text-xs text-light/80">
                      {item.category} - {item.sale_price}
                    </p>
                  </div>
                </div>
                <p className="flex gap-x-1 items-center text-sm font-medium text-secondary">
                  <RiTimeLine /> {item.lastest}h
                </p>
              </article>
            ))}
=======
          <section className='py-2 '>
              <div className='flex justify-between items-center mb-4'>
                <h3 className='text-light/95 font-medium'>Sus ultimos productos</h3>
                <p className='text-xs font-medium text-light/80'>Ver todos</p>
              </div>
              {/* Lastest Products Cards */}
             <section className='flex flex-col gap-y-5'>
                {
                  itemsLastesProducst.map(item => (
                    <article key={item.product} className='flex items-center justify-between bg-base-light/30 pr-2 shadow-md rounded-md'>
                      <div className='flex items-center gap-x-2'>
                        <img src={item.source} className='w-14 h-14 object-cover rounded-tl-md rounded-bl-md' alt='product'/>
                        <div>
                          <p className='text-sm font-medium text-light/90'>{item.name}</p>
                          <p className='text-xs text-light/80'>{item.category} - ${item.sale_price}</p>
                        </div>

                      </div>
                      <p className='flex gap-x-1 items-center text-sm font-medium text-secondary'><RiTimeLine/> {item.lastest}h</p>
                    </article>
                  ))
                }
            </section>
>>>>>>> main
          </section>
        </section>
        {/* Section Graphic Stock */}
        <section className="flex flex-col items-center gap-y-4 bg-base-light/30 py-4 rounded-md shadow-md">
          <h5 className="text-light font-medium">5 Productos con mas Stock</h5>
          <StockChart />
        </section>
      </section>
    </section>
  );
};

export default MainSeller;
