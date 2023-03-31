import {RiUserSettingsLine} from "react-icons/ri";
import SearchBar from "./SearchBar";
const Header = ({ imageSrc, mainText }) => {
  return (
    <div className="text-white w-full py-4  flex flex-col lg:flex-row items-center  lg:justify-between gap-y-2">
      <h2 className=" text-3xl  text-light font-bold">CLIENTES</h2>
      <SearchBar />
      <button className="text-xl box-content text-light hover:bg-gray-200/20 p-2 transition-all rounded-full"><RiUserSettingsLine /></button>
    </div>
  );
};

export default Header;
