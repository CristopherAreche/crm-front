import React from 'react'

const Header = ({ imageSrc, mainText}) =>{
    return (
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src={imageSrc} alt="logo" className="h-8 mr-2" />
            <h1 className="text-lg font-bold">{mainText}</h1>
          </div>
          <p className="text-sm">Perfil</p>
        </div>
      </header>
    );
  };
  

export default Header