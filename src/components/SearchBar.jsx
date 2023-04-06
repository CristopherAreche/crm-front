// import { useState } from "react";
// import { resetClients, searchClients } from "../app/features/clientSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { RiSearchLine } from "react-icons/ri";

// //componente reutilizable, data =useSelector, onSerch =
// const SearchBar = ({clients, sellers}) => {
//   const dispatch = useDispatch();
//   const [searchTerm, setSearchTerm] = useState("");

//   const clients = useSelector((state) => state.clients.clients);

//   const handleChange = (event) => {
//     if (event.target.value === "") {
//       dispatch(resetClients());
//     }
//     setSearchTerm(event.target.value);
//   };

//   const handleSearch = () => {
//     dispatch(
//       searchClients(
//         clients.filter((client) =>
//           client.name.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//       )
//     );
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       if (searchTerm.length !== 0) {
//         handleSearch();
//       } else dispatch(resetClients());
//     }
//   };

//   return (
//     <div className="relative">
//       <input
//         placeholder="Buscar..."
//         className="py-2 pl-10 pr-6 rounded-full w-80 bg-base-light/40 outline-none"
//         type="text"
//         value={searchTerm}
//         onChange={handleChange}
//         onKeyPress={handleKeyPress}
//       />
//       <RiSearchLine className="absolute top-1/2 -translate-y-1/2 left-4 text-xl text-light/60" />
//     </div>
//   );
// };

// export default SearchBar;

import { useState } from "react";

import { RiSearchLine } from "react-icons/ri";

//Componente reutilizable ej de lo que esta esperando por props
//const clients = useSelector((state) => state.clients.clients);

//data = {clients}
//onSearch={(filteredClients) => dispatch(searchClients(filteredClients))}
//onReset={() => dispatch(resetClients())}
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
        className="py-2 pl-10 pr-6 rounded-full w-80 bg-base-light/40 outline-none"
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
