
import { RiCloseLine, RiUserLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';

const NavModal = ({isOpen, onOpen}) => {



  return (
    <section className={`${isOpen ? 'left-0' : '-left-full'} bg-base-light/90 fixed h-screen w-full top-0 text-center pt-20 z-10 transition-all duration-200`}>
        <button onClick={() => onOpen(false)} className='absolute top-4 right-4  text-4xl lg:hidden hover:bg-base/40 rounded-full py-1 px-2 box-content z-50 transition-all'>
            <RiCloseLine className='text-4xl text-light '/>
        </button>    
        <h2 className="text-xl text-white  font-bold tracking-widest hover:text-light transition-colors cursor-pointer z-10 mb-6">
        LOGO
        </h2>
        <ul className="flex flex-col gap-y-4 z-10 mb-4">
            <li className="font-medium text-xl 
            py-4 hover:bg-base/40 text-light/80 hover:text-white transition-all cursor-pointer">
                Precios
            </li>
            <li className="font-medium text-xl 
            py-4 hover:bg-base/40 text-light/80 hover:text-white transition-all cursor-pointer">
                Soporte
            </li>
            <li className="font-medium text-xl
            py-4 hover:bg-base/40 text-light/80 hover:text-white transition-all cursor-pointer">
                Central de ayuda
            </li>
            <li className="font-medium text-xl 
            py-4 hover:bg-base/40 text-light/80 hover:text-white transition-all cursor-pointer">
                Sobre nosotros
            </li>
        </ul>
        <div className='flex gap-x-8 w-full justify-center items-center'>
            <Link to="/auth/register" className="bg-gradient-to-r from-primary to-secondary px-2 py-1 rounded-md text-white font-medium text-xl hover:scale-[1.03] transition-all">
                Empezar Ahora
            </Link>
            <Link
                to="/auth"
                className=" flex gap-x-1 items-center text-white text-xl font-medium hover:text-light transition-colors border border-secondary px-2 py-1 rounded-md"
            >
                <RiUserLine className="text-2xl" /> LOG IN
            </Link>
        </div>
    </section>
  )
}

export default NavModal