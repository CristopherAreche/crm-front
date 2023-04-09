import { Link } from "react-router-dom";
import {RiStopMiniFill} from 'react-icons/ri'


const SectionPrice  = () => {
    return (
        <section
        name="precios"
        className="h-full lg:h-[100vh] lg:pt-16 flex-col gap-y-4 justify-center items-center flex "
      >
          <h3 className="text-5xl w-[40rem]  text-center font-extrabold text-white">Precios</h3>

    {/* Seccion Cards   */}
       <section className="grid grid-cols-1 lg:grid-cols-3  gap-y-4 lg:gap-x-12 text-base-light">

        {/* Card Free */}
        <article className='bg-green-200 flex flex-col items-center gap-y-4 rounded-md overflow-hidden shadow-md'>
          <header className='bg-green-300 py-4 flex flex-col items-center gap-y-2 w-full'>
            <h5 className='text-base-light font-medium text-xl'>Free</h5>
            <p className='text-base-light/70 font-medium text-sm w-40 text-center '>Conjunto de herramientas básicas para toda tu empresa</p>
          </header>
          <main className='flex flex-col gap-y-2 items-center border-b-2 border-green-400/20 pb-4'>
            <p className='text-lg font-medium'>Usuarios limitados</p>
            <p className='text-xl font-medium text-green-500'>100% Gratis</p>
            <p className='text-green-500/80 underline decoration-dashed text-sm font-medium'>stock limitado</p>
            <Link to='/auth/register' className='bg-green-400 py-2 px-3 rounded-md shadow-md shadow-green-500/20 hover:scale-[1.03] transition-transform cursor pointer text-white font-medium'>Registrarse</Link>
          
          </main>
          <footer className='flex flex-col gap-y-2 items-start px-4 pb-4'>
            <div className='flex items-center justify-between w-full'>
              <h5 className='font-medium '>Colaboración</h5>
              <div className='border border-green-400 p-0.3 rounded-md'>
                <RiStopMiniFill className='text-green-400'/>
              </div>
            </div>
            <p className='text-sm font-medium text-base-light/90'>Calendario</p>
            <p className='text-sm font-medium text-base-light/90'>Espacio de trabajo de la empresa</p>
            <div className='flex items-center justify-between w-full'>
              <h5 className='font-medium '>Tareas y proyectos</h5>
              <div className='border border-green-400 p-0.3 rounded-md'>
                <RiStopMiniFill className='text-green-400'/>
              </div>
            </div>
            <p  className='text-sm font-medium text-base-light/90'>CRM</p>
          </footer>
        </article>

        {/* Card Standard */}
        <article className='bg-blue-200 flex flex-col items-center gap-y-4 rounded-md overflow-hidden shadow-md'>
          <header className='bg-blue-300 py-4 flex flex-col items-center gap-y-2 w-full'>
            <h5 className='text-base-light font-medium text-xl'>Standard</h5>
            <p className='text-base-light/70 font-medium text-sm w-40 text-center '>Ideal para pequeños equipos de ventas</p>
          </header>
          <main className='flex flex-col gap-y-2 items-center border-b-2 border-blue-400/20 pb-4'>
            <p className='text-lg font-medium'>5 usuarios</p>
            <p className='text-xl font-medium text-blue-500'>USD 49/mes</p>
            <p className='text-blue-500/80 underline decoration-dashed text-sm font-medium'>para todos los usuarios</p>
            <Link to='/auth/register' className='bg-blue-400 py-2 px-3 rounded-md shadow-md shadow-blue-500/20 hover:scale-[1.03] transition-transform cursor pointer text-white font-medium'>Comprar</Link>
          
          </main>
          <footer className='flex flex-col gap-y-2 items-start px-4 pb-4'>
            <div className='flex items-center justify-between w-full'>
              <h5 className='font-medium '>Colaboración</h5>
              <div className='border border-blue-400 p-0.3 rounded-md flex gap-x-1'>
                <RiStopMiniFill className='text-blue-400'/>
                <RiStopMiniFill className='text-blue-400'/>
              </div>
            </div>
            <p className='text-sm font-medium text-base-light/90'>Calendario</p>
            <p className='text-sm font-medium text-base-light/90'>Espacio de trabajo de la empresa</p>
            <div className='flex items-center justify-between w-full'>
              <h5 className='font-medium '>Tareas y proyectos</h5>
              <div className='border border-blue-400 p-0.3 rounded-md flex gap-x-1'>
                <RiStopMiniFill className='text-blue-400'/>
                <RiStopMiniFill className='text-blue-400'/>
              </div>
            </div>
            <p  className='text-sm font-medium text-base-light/90'>CRM</p>
          </footer>
        </article>

        {/* Card Proffesional */}
        <article className='bg-blue-200 flex flex-col items-center gap-y-4 rounded-md overflow-hidden shadow-md'>
          <header className='bg-blue-300 py-4 flex flex-col items-center gap-y-2 w-full'>
            <h5 className='text-base-light font-medium text-xl'>Proffesional</h5>
            <p className='text-base-light/70 font-medium text-sm w-40 text-center '>Cubre todas las necesidades del equipo</p>
          </header>
          <main className='flex flex-col gap-y-2 items-center border-b-2 border-blue-400/20 pb-4'>
            <p className='text-lg font-medium'>50 usuarios</p>
            <p className='text-xl font-medium text-blue-500'>usd 99/mes</p>
            <p className='text-blue-500/80 underline decoration-dashed text-sm font-medium'>para todos los usuarios</p>
            <Link to='/auth/register' className='bg-blue-400 py-2 px-3 rounded-md shadow-md shadow-blue-500/20 hover:scale-[1.03] transition-transform cursor pointer text-white font-medium'>Comprar</Link>
          
          </main>
          <footer className='flex flex-col gap-y-2 items-start px-4 pb-4'>
            <div className='flex items-center justify-between w-full'>
              <h5 className='font-medium '>Colaboración</h5>
              <div className='border border-blue-400 p-0.3 rounded-md flex gap-x-1'>
                <RiStopMiniFill className='text-blue-400'/>
                <RiStopMiniFill className='text-blue-400'/>
                <RiStopMiniFill className='text-blue-400'/>
              </div>
            </div>
            <p className='text-sm font-medium text-base-light/90'>Calendario</p>
            <p className='text-sm font-medium text-base-light/90'>Espacio de trabajo de la empresa</p>
            <div className='flex items-center justify-between w-full'>
              <h5 className='font-medium '>Tareas y proyectos</h5>
              <div className='border border-blue-400 p-0.3 rounded-md flex gap-x-1'>
                <RiStopMiniFill className='text-blue-400'/>
                <RiStopMiniFill className='text-blue-400'/>
                <RiStopMiniFill className='text-blue-400'/>
              </div>
            </div>
           <div className='grid grid-cols-3 gap-1'>
            <p  className='text-sm font-medium text-base-light/90'>CRM <span className='bg-blue-500 px-2 rounded-md text-light'>x5</span></p>
            <p  className='text-sm font-medium text-base-light/90'>Stock <span className='bg-blue-500 px-2 rounded-md text-light'>x5</span></p>
            <p  className='text-sm font-medium text-base-light/90'>Automatizacion </p>
           </div> 
          </footer>
        </article>
       </section>
      </section>
    )
} 

export default SectionPrice