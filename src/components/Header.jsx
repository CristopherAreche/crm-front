import React from "react";
import { Link } from "react-router-dom";
const Header = ({ imageSrc, mainText }) => {
  return (
    <header className="bg-gradient-to-br from-gray-600 to-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <img
          src="https://images-ext-1.discordapp.net/external/hkOouBr-w6nt1hkKmjFnwR8PIJQ4kd_l0zzYq6TAqKc/https/img.freepik.com/iconos-gratis/lanzamiento_318-795706.jpg?width=1024&height=1024"
          alt="logo"
          className="h-10 w-10 mr-2"
        />
        <h1 className="flex text-lg font-semibold items-center ">{mainText}</h1>
        <Link to="#">
          <p className="underline decoration-solid text-sm">Perfil</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
