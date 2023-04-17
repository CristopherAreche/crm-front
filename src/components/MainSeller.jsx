import { RiLoader4Fill, RiStarFill, RiStarLine } from "react-icons/ri";
// import { useAuth0 } from "@auth0/auth0-react";
import SalesChart from "./charts/SalesChart";
import StockChart from "./charts/StockChart";
import ToDoList from "./ToDoList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SummarySection from "./SummarySection";
import ProductsCards from "./ProductsCards";
import { getAllProducts } from "../services/productsServices";
import Cookies from 'universal-cookie';
import { jwtVerify } from "jose";
import { useNavigate } from "react-router-dom";
import { persistenceLogin } from "../app/features/authSlice";

const MainSeller = () => {
  // const { User } = useAuth0();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const statusProducts = useSelector((state) => state.products.status);
  const {User, status} = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const cookies = new Cookies();
  const myToken = cookies.get('myToken');
  

  const persitenceAuth = async (token) => {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode("secret")
    );
    return payload
  }

  useEffect(() => {
    if (myToken === undefined) {
      navigate('/authentication')
    } else {
      persitenceAuth(myToken).then(res => dispatch(persistenceLogin(res)))
    }
  }, [dispatch, myToken, navigate]);


  useEffect(() => {
    if (statusProducts === "idle" && User?.bossId) {
      dispatch(getAllProducts(User.bossId));
    }
  }, [dispatch, statusProducts, User?.bossId]);
  

  const todayFormated = () => {
    const dateToday = new Date();

    const nameMounth = [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sep",
      "oct",
      "nov",
      "dic",
    ];

    const day = dateToday.getDate();
    const mounth = nameMounth[dateToday.getMonth()];
    const year = dateToday.getFullYear();

    return `Hoy, ${day} ${mounth} ${year}`;
  };



  return (
    <section className="py-6 px-12 z-[2]  grid gird-cols-1 lg:grid-cols-6">
      {/* Left Section */}
      <section className="col-span-4 flex flex-col gap-y-4 items-start ">
        {/* Present Section */}
        <section className="flex flex-col gap-y-3.5">
          <h2 className="text-3xl font-medium text-light">
            Buenos dias,{" "}
            <span className="bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text font-bold">
              {User?.name}
            </span>
          </h2>
          <p className="text-light/80 text-sm">{todayFormated()}</p>
          <p className="text-sm text-light/90">
            Aqui podras seguir tus movimientos, y gestionar tu procesos
          </p>
        </section>
        {/* Section Resume */}
        <SummarySection data={User} products={products} />

        {/* Section Estadistics Sales */}
        <section className="flex flex-col items-start gap-y-2 pr-0 lg:pr-12 w-full pt-0  ">
          <div className="flex items-center justify-between w-full">
            <h5 className="text-light font-medium">Ganancias</h5>
            <p className="text-xs font-medium text-light/70 hover:underline hover:text-light/90 transition-all cursor-pointer">
              Comparar
            </p>
          </div>
          <SalesChart />
        </section>
        {/* Tasks Section */}
        <section className="pr-0 lg:pr-12">
          <ToDoList />
        </section>
      </section>
      {/* Right Section */}
      <section className="col-span-2 flex flex-col gap-y-6">
        {/* Section Lastest Products */}
        <section className="py-2 ">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-light/95 font-medium">Sus ultimos productos</h3>
            <p className="text-xs font-medium text-light/80">Ver todos</p>
          </div>
          {/* Lastest Products Cards */}
          <section className="flex flex-col gap-y-5">
            {statusProducts === "loading" ? (
              <div className="flex justify-center w-full">
                <RiLoader4Fill className="animate-spin text-4xl text-secondary mt-8" />
              </div>
            ) : (
              <>
                {products?.slice(0, 3).map((item) => (
                  <ProductsCards key={item.id} item={item} />
                ))}
              </>
            )}
          </section>
        </section>
        {/* Section Graphic Stock */}
        <section className="flex flex-col items-center gap-y-4 bg-base-light/30 py-4 rounded-md shadow-md">
          <h5 className="text-light font-medium">5 Productos con mas Stock</h5>
          <StockChart />
        </section>

        <section className="">
           {
            !User.avgFeedback && status !== 'loading'
            ?
            <section className="bg-gradient-to-r from-primary to-secondary relative w-full h-52 flex justify-center items-center cursor-pointer group rounded-md">
             <div className="absolute top-0 left-0 bg-black/30 w-full h-full  opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-in-out rounded-md shadow-md flex flex-col gap-y-4 items-start justify-center px-6">
            <div className="flex items-start flex-col  w-full  ">
             <h5 className='text-lg text-orange-300 font-medium'>Usted no tiene feedbacks</h5>
             <p className="text-light font-medium">Comienze a obtenerlos y obten grandes recompensas!</p>
             <div className="flex gap-x-2 items-center text-yellow-300">
              <RiStarFill/>
              <RiStarFill/>
              <RiStarFill/>
              <RiStarFill/>
              <RiStarFill/>
             </div>
            </div>
            </div>
          <img
            src='https://img.freepik.com/free-vector/organic-flat-feedback-concept_23-2148957030.jpg?w=740&t=st=1681751480~exp=1681752080~hmac=400658311d24c14e51ef7ece4af074b5151795cbf81211cb28676f3dc4aa71ff'
            alt="not feedback vector"
            className="w-44 h-44 group-hover:w-36 group-hover:h-36 transition-all duration-200 ease-in-out "
          />
        </section>
            :
           <>
             {[...new Array(5)].map((star, index) => {
              return index < User.avgFeedback ? (
                <RiStarFill key={index} />
              ) : (
                <RiStarLine key={index} />
              );
            })}
           </>

           }
        </section>
        {/* Upgrade Plan Section */}
        {/* <section className="bg-gradient-to-r from-primary to-secondary relative w-full h-52 flex justify-center items-center cursor-pointer group rounded-md">
          <div className="absolute top-0 left-0 bg-black/30 w-full h-full  opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-in-out rounded-md shadow-md flex flex-col gap-y-4 items-start justify-center px-6">
            <div className="flex justify-between  w-full items-center ">
              <h5 className="text-xl font-medium ">
                Pasa al plan{" "}
                <span className="text-orange-400">Professional</span>
              </h5>
              <p className="font-medium text-white text-lg">
                <span className="font-medium bg-orange-400 p-1 rounded-md shadow-md text-xl">
                  50%
                </span>{" "}
                de descuento
              </p>
            </div>
            <div className="flex flex-col gap-y-2 text-sm font-bold">
              <p className="flex gap-x-2 items-center">
                <RiCheckboxCircleLine className="text-lg text-orange-400" />
                CRM x5
              </p>
              <p className="flex gap-x-2 items-center">
                <RiCheckboxCircleLine className="text-lg text-orange-400" />
                Automatizacion x5
              </p>
              <p className="flex gap-x-2 items-center">
                <RiCheckboxCircleLine className="text-lg text-orange-400" />
                Stock x5
              </p>
            </div>
          </div>
          <img
            src={productImage}
            alt="product 3d icon"
            className="w-44 h-44 group-hover:w-36 group-hover:h-36 transition-all duration-200 ease-in-out "
          />
        </section> */}
      </section>
    </section>
  );
};

export default MainSeller;
