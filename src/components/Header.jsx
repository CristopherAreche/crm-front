import React from "react";
import SearchBar from "./SearchBar";
const Header = ({ imageSrc, mainText }) => {
  return (
    <div className="text-white w-[100%] p-8  flex items-center justify-between ">
      <h2 className=" text-[2em] font-bold">CLIENTES</h2>
      <SearchBar />
      <button className=" text-[1.5em] mr-6">Perfil</button>
    </div>
  );
};

export default Header;
