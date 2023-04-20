import { useDispatch } from "react-redux";
import {
  sortSellers,
  sortPerformanceSellers,
  sortSales,
  sortEnabledSellers,
  resetSellers,
} from "../../app/features/sellerSlice";
import { RiArrowGoForwardFill } from "react-icons/ri";

const BossFilterTop = () => {
  const dispatch = useDispatch();

  const handleOrderChange = (e) => {
    const value = e.target.value;
    let order = "";
    if (value === "todos") {
      order = "todos";
    } else if (value === "asc") order = "asc";
    else order = "desc";
    dispatch(sortSellers({ order }));
  };

  const handlePerformanceOrderChange = (e) => {
    const value = e.target.value;
    let order = "";
    if (value === "todos") {
      order = "todos";
    } else if (value === "asc") {
      order = "asc";
    } else if (value === "desc") {
      order = "desc";
    }
    dispatch(sortPerformanceSellers({ order }));
  };

  const handleEnableOrderChange = (e) => {
    const value = e.target.value;
    let orderEn = "";
    if (value === "todos") {
      orderEn = "todos";
    } else if (value === "asc") {
      orderEn = "asc";
    } else if (value === "desc") {
      orderEn = "desc";
    }
    dispatch(sortEnabledSellers({ orderEn }));
  };

  const handleSalesOrderChange = (e) => {
    const value = e.target.value;
    let orderP = "";
    if (value === "todos") {
      orderP = "todos";
    } else if (value === "asc") {
      orderP = "asc";
    } else if (value === "desc") {
      orderP = "desc";
    }
    dispatch(sortSales({ orderP }));
  };

  const handleClearFilters = () => {
    dispatch(resetSellers());
    document
      .querySelectorAll("select")
      .forEach((select) => (select.value = "todos"));
  };

  return (
    <section className="text-white text-bold flex justify-evenly w-full  lg:items-center py-2 border-b-2 border-light/10  flex-row flex-wrap lg:flex-nowrap lg:pt-6 ">
      <div className="flex gap-x-2 items-center">
        <button
          className="bg-slate-600 rounded-full p-2 group relative mr-12"
          onClick={handleClearFilters}
        >
          <RiArrowGoForwardFill />
          <span className="absolute hidden group-hover:flex -left-3 -top-2 -translate-y-full w-auto px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
          Reiniciar Filtros
        </span>
        </button>
        <p className="text-gray-300 text-sm font-medium">Alfabéticamente:</p>
        <select
          name=""
          id=""
          className="bg-slate-700 rounded-lg "
          onChange={handleOrderChange}
        >
          <option value="todos">Todos</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
      <div className="flex gap-x-2 items-center">
        <p className="text-gray-300 text-sm font-medium">Total:</p>
        <select
          name=""
          id=""
          className="bg-slate-700 rounded-lg "
          onChange={handleSalesOrderChange}
        >
          <option value="todos">Todos</option>
          <option value="desc">Max</option>
          <option value="asc">Min</option>
        </select>
      </div>
      <div className="flex gap-x-2 items-center">
        <p className="text-gray-300 text-sm font-medium">Estado:</p>
        <select
          name=""
          id=""
          className="bg-slate-700 rounded-lg "
          onChange={handleEnableOrderChange}
        >
          <option value="todos">Todos</option>
          <option value="desc">Habilitado</option>
          <option value="asc">Deshabilitado</option>
        </select>
      </div>
      <div className="flex gap-x-2 items-center">
        <p className="text-gray-300 text-sm font-medium">Calificación:</p>
        <select
          name=""
          id=""
          className="bg-slate-700 rounded-lg "
          onChange={handlePerformanceOrderChange}
        >
          <option value="todos">Todos</option>
          <option value="desc">Max</option>
          <option value="asc">Min</option>
        </select>
      </div>
    </section>
  );
};

export default BossFilterTop;
