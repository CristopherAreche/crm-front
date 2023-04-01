import { RiSearchLine } from "react-icons/ri";
import { useState } from "react";
import { getClients, getClientName } from "../services/clientsServices";
import { useDispatch } from "react-redux";
const SearchBar = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    if (event.target.value === "") {
      dispatch(getClients());
    }
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    dispatch(getClientName(search));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getClientName(search));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (search.length !== 0) {
        handleSearch();
      } else dispatch(getClients());
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="Buscar..."
        className="py-2 pl-10 pr-6 rounded-full w-80 bg-base-light/40 outline-none "
        type="text"
        value={search}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onKeyPress={handleKeyPress}
      />
      <RiSearchLine className="absolute top-1/2 -translate-y-1/2 left-4 text-xl text-light/70" />
    </div>
  );
};

export default SearchBar;
