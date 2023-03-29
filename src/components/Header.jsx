import React from 'react'
import {Link} from "react-router-dom"
const Header = ({ imageSrc, mainText}) =>{
    return (
      <header className="bg-gradient-to-br from-gray-600 to-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <img src={imageSrc} alt="logo" className="h-10 w-10 mr-2"/>
          <h1 className="flex text-lg font-semibold items-center ">{mainText}</h1>
          <Link to="#">
          <p className="underline decoration-solid text-sm">Perfil</p>
          </Link>
        </div>
      </header>
    );
  };

  
export default Header