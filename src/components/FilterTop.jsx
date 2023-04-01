import { RiArrowDropRightLine } from "react-icons/ri";

const FilterTop = () => {
  return (
    <section className="text-white text-bold flex justify-evenly w-full  lg:items-center py-2 border-b-2 border-light/10  flex-row flex-wrap lg:flex-nowrap lg:pt-6 ">
      <div className="flex gap-x-2 items-center">
        <p className="text-gray-300 text-sm font-medium">Alfabeticamente:</p>
        <button className="rounded-xl  text-sm font-medium flex items-center hover:text-gray-400 group">
          A-Z <RiArrowDropRightLine className="text-3xl text-secondary group-hover:rotate-90 transition-all"/>
        </button>
      </div>
      <div className="flex gap-x-2 items-center">
        <p className="text-gray-300 text-sm font-medium">Total:</p>
        <button className="rounded-xl  text-sm font-medium flex items-center hover:text-gray-400 group">
          Max <RiArrowDropRightLine className="text-3xl text-secondary group-hover:rotate-90 transition-all"/>
        </button>
      </div>
      <div className="flex gap-x-2 items-center">
        <p className="text-gray-300 text-sm font-medium">VIP:</p>
        <button className="rounded-xl  text-sm font-medium flex items-center hover:text-gray-400 group">
          Todos <RiArrowDropRightLine className="text-3xl text-secondary group-hover:rotate-90 transition-all"/>
        </button>
      </div>
      <div className="flex gap-x-2 items-center">
        <p className="text-gray-300 text-sm font-medium">Estado:</p>
        <button className="rounded-xl  text-sm font-medium flex items-center hover:text-gray-400 group">
          Todos <RiArrowDropRightLine className="text-3xl text-secondary group-hover:rotate-90 transition-all"/>
        </button>
      </div>
    </section>
  );
};

export default FilterTop;
