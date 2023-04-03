import { RiArrowDropRightLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { sortClients, sortVipClients, sortEnabledClients, sortPurchases, resetClients} from "../app/store/clientSlice";

const FilterTop = () => {
  
 const dispatch = useDispatch();
 
 const handleOrderChange = (e) => {
  const value = e.target.value;
  let order = ""
  if(value==="todos"){
    order = "todos"
  } else if (value === "asc") order = "asc"
  else order = "desc"
  dispatch(sortClients({ order }));
};

const handleVipOrderChange = (e) => {
  const value = e.target.value;
  let order = "";
  if (value === "todos") {
    order = "todos"
  } else if (value === "asc") {
    order = "asc";
  } else if (value === "desc") {
    order = "desc";
  }
  dispatch(sortVipClients({ order }));
};

const handleEnableOrderChange = (e) => {
  const value = e.target.value;
  let orderEn = "";
  if (value === "todos") {
    orderEn = "todos"
  } else if (value === "asc") {
    orderEn = "asc";
  } else if (value === "desc") {
    orderEn = "desc";
  }
  dispatch(sortEnabledClients({ orderEn }));
};

const handlePurchasesOrderChange = (e) => {
  const value = e.target.value;
  let orderP = "";
  if (value === "todos") {
    orderP = "todos"
  } else if (value === "asc") {
    orderP = "asc";
  } else if (value === "desc") {
    orderP = "desc";
  }
  dispatch(sortPurchases({ orderP }));
};


const handleClearFilters = () => {
  dispatch(resetClients())
  document.querySelectorAll('select').forEach(select => select.value = 'todos');
};


  return (
    <section className="text-white text-bold flex justify-evenly w-full  lg:items-center py-2 border-b-2 border-light/10  flex-row flex-wrap lg:flex-nowrap lg:pt-6 ">
      <div className="flex gap-x-2 items-center">
        <button className="bg-slate-700 rounded-lg mr-12 px-4" onClick={handleClearFilters}  >Limpiar Filtros</button>
        <p className="text-gray-300 text-sm font-medium">Alfabeticamente:</p>
        <select name="" id="" className= "bg-slate-700 rounded-lg " onChange={handleOrderChange}>
        <option value="todos">Todos</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
      <div className="flex gap-x-2 items-center">
        <p className="text-gray-300 text-sm font-medium">Total:</p>
        <select name="" id="" className= "bg-slate-700 rounded-lg " onChange={handlePurchasesOrderChange}>
        <option value="todos">Todos</option>
          <option value="desc">Max</option>
          <option value="asc">Min</option>
        </select>
      </div>
      <div className="flex gap-x-2 items-center">
        <p className="text-gray-300 text-sm font-medium">Estado:</p>
        <select name="" id="" className= "bg-slate-700 rounded-lg " onChange={handleEnableOrderChange}>
        <option value="todos">Todos</option>
          <option value="desc">Si</option>
          <option value="asc">No</option>
        </select>
      </div>
      <div className="flex gap-x-2 items-center">
        <p className="text-gray-300 text-sm font-medium">VIP:</p>
        <select name="" id="" className= "bg-slate-700 rounded-lg " onChange={handleVipOrderChange}>
        <option value="todos">Todos</option>
          <option value="desc">Si</option>
          <option value="asc">No</option>
        </select>
      </div>
    </section>
  );
};

export default FilterTop;
