import React from "react";
import { Link } from "react-router-dom";
const Header = ({ imageSrc, mainText }) => {
  return (
    <header className="col-span-6 bg-gradient-to-br from-gray-800 via-slate-900 to-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <img
          src="https://images-ext-1.discordapp.net/external/hkOouBr-w6nt1hkKmjFnwR8PIJQ4kd_l0zzYq6TAqKc/https/img.freepik.com/iconos-gratis/lanzamiento_318-795706.jpg?width=1024&height=1024"
          alt="logo"
          className="h-10"
        />
        <h1 className="flex text-lg items-center text-white font-bold">
          {mainText}
        </h1>
        <Link to="#">
          <p className=" underline decoration-solid">Perfil</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;



