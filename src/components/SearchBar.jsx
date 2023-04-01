import { RiSearchLine } from "react-icons/ri";
import { useState } from "react";
import { getClientName, getClients } from "../services/clientsServices";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
      if (search === "") {
        dispatch(getClients());
        return;
      }
      const clients = await dispatch(getClientName(search)).unwrap();
      if (clients.length === 0) {
        console.log(`No se encontraron clientes con el nombre "${search}".`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="relative">
      <input
        placeholder="Buscar..."
        className="py-2 pl-10 pr-6 rounded-full w-80 bg-base-light/40 outline-none"
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

