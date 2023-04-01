import React, { useState } from 'react'
import { RiAlignRight, RiUserLine, RiCloseLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import NavModal from '../NavModal';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
   <>
    <header className="flex py-4 lg:py-6 items-center justify-between ">
        <h2 className="text-xl text-white  font-bold tracking-widest hover:text-light transition-colors cursor-pointer z-10">
        LOGO
        </h2>
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden block z-[2]">
        <RiAlignRight className="text-4xl text-white hover:text-white/60 transition-colors cursor-pointer" />
        </button>
        <ul className="hidden lg:flex gap-x-6 z-10 ">
        <li className="font-medium text-light/80 hover:text-white transition-colors cursor-pointer">
            Precios
        </li>
        <li className="font-medium text-light/80 hover:text-white transition-colors cursor-pointer">
            Soporte
        </li>
        <li className="font-medium text-light/80 hover:text-white transition-colors cursor-pointer">
            Central de ayuda
        </li>
        <li className="font-medium text-light/80 hover:text-white transition-colors cursor-pointer">
            Sobre nosotros
        </li>
        </ul>
        <section className="hidden lg:flex gap-x-8 items-center z-[3]">
        <Link to="/auth/register">
            <button className="bg-gradient-to-r from-primary to-secondary px-2 py-1 rounded-md text-white font-medium text-lg hover:scale-[1.03] transition-all">
            Empezar Ahora
            </button>
        </Link>
        <Link
            to="/auth"
            className=" flex gap-x-1 items-center text-white font-medium hover:text-light transition-colors b"
        >
            <RiUserLine className="text-2xl" /> LOG IN
        </Link>
        </section>
    </header>
    <NavModal isOpen={isOpen} onOpen={setIsOpen}/>
   </> 
  )
}

export default Header