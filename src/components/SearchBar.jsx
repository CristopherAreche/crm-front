import { useState } from "react";
import { getClients} from "../services/clientsServices";
import { searchClients } from "../app/store/clientSlice";
import { useDispatch, useSelector} from "react-redux";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  
  const clients = useSelector((state) => state.clients.clients);

  const handleChange = (event) => {
    if(event.target.value===""){
      dispatch(getClients())
    }
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    dispatch(searchClients(clients.filter((client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase())
    )));
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if(searchTerm.length!==0){
        handleSearch();
      }
      else dispatch((getClients()));
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
    </div>
  );
};

export default SearchBar;

