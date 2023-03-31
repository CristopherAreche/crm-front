import {RiSearchLine} from "react-icons/ri";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        placeholder="Buscar..."
        className="py-2 pl-10 pr-6 rounded-full w-80 bg-base-light/40 outline-none "
      />
      <RiSearchLine className="absolute top-1/2 -translate-y-1/2 left-4 text-xl text-light/70"/>
    </div>
  );
};

export default SearchBar;
