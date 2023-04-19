import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = ({ data, onSearch, onReset }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    if (event.target.value === "") {
      onReset();
    }
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(
      data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (searchTerm.length !== 0) {
        handleSearch();
      } else onReset();
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="Buscar..."
        className="py-2 pl-10 z-0 pr-6 rounded-full w-80 bg-base-light/40 outline-none"
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <RiSearchLine className="absolute top-1/2 -translate-y-1/2 left-4 text-xl text-light/60" />
    </div>
  );
};

export default SearchBar;
