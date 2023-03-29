import React from "react";
import { Link } from "react-router-dom";
const Header = ({ imageSrc, mainText }) => {
  return (
    <div className="flex justify-center col-span-6 bg-gradient-to-br from-gray-600 to-gray-800">
      <div className=" container mx-auto flex justify-between items-center">
        <img
          src="https://images-ext-1.discordapp.net/external/hkOouBr-w6nt1hkKmjFnwR8PIJQ4kd_l0zzYq6TAqKc/https/img.freepik.com/iconos-gratis/lanzamiento_318-795706.jpg?width=1024&height=1024"
          alt="logo"
          className="h-10"
        />
        <h1 className="flex text-lg items-center text-white font-bold">
          {mainText}
        </h1>
        <Link to="#">
          <p className="text-white underline decoration-solid text-sm">
            Perfil
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
