import { Link } from 'react-router-dom';
import imgLanding from '../assets/imgLanding.png'
import spotlight1 from '../assets/svg/Spotlight1.svg'
import spotlight2 from '../assets/svg/Spotlight2.svg'
const LandingPage = () => {
  return <main className="bg-base h-screen overflow-hidden px-10 lg:px-20 ">
    {/* TODO : Componetizar Landing */}
    {/* Seccion Header */}
    <header className='flex py-4 lg:py-6 items-center justify-between '>
      <h2 className='text-xl text-white  font-bold tracking-widest hover:text-light transition-colors cursor-pointer z-10'>LOGO</h2>
      <div className='lg:hidden block z-[2]'>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=' hover:scale-105 cursor-pointer p-1 box-content transition-all' >
          <path d="M9 16.5H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 7.5H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 13.5H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 10.5H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <ul className='hidden lg:flex gap-x-6 z-10 '>
        <li className='font-medium text-light/80 hover:text-white transition-colors cursor-pointer'>Precios</li>
        <li className='font-medium text-light/80 hover:text-white transition-colors cursor-pointer'>Soporte</li>
        <li className='font-medium text-light/80 hover:text-white transition-colors cursor-pointer'>Central de ayuda</li>
        <li className='font-medium text-light/80 hover:text-white transition-colors cursor-pointer'>Sobre nosotros</li>
      </ul>
      <section className='hidden lg:flex gap-x-8 items-center z-[3]'>
        <button className='bg-gradient-to-r from-primary to-secondary px-2 py-1 rounded-md text-white font-medium text-lg hover:scale-[1.03] transition-all'>Empezar Ahora</button>
        <div className="flex gap-x-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="7" r="4" stroke="white" stroke-width="1.5"/>
            <path d="M12 14C9.17219 14 6.73601 15.6768 5.63151 18.0903C4.94205 19.5969 6.34315 21 8 21H16C17.6569 21 19.058 19.5969 18.3685 18.0903C17.264 15.6768 14.8278 14 12 14Z" stroke="white" stroke-width="1.5"/>
          </svg>
          <Link to='/auth' className="text-white font-medium hover:text-light transition-colors b">LOG IN</Link>
        </div>
      </section>
    </header>
    {/* Seccion Hero */}
    <section className='flex flex-col lg:flex-row items-start lg:items-center justify-center h-screen pt-12  lg:pt-0'>
      {/* Hero Info */}
      <section className='text-white flex flex-col gap-y-8 items-start  lg:w-[36rem] lg:h-[30rem] '>
      {/* Info Principal */}
       <div>
        <h1 className='text-light  text-4xl lg:text-5xl 2xl:text-6xl font-extrabold uppercase  lg:w-[32rem] mb-3'>Optimiza tu empresa con <span className='bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text'>nuestra CRM</span></h1>
          <p className='text-light opacity-95 text-lg font-medium w-72  lg:w-96 2xl:text-xl'>
            Registrate y Gestiona tus clientes de manera más efectiva con nuestras herramientas.
          </p>
       </div>
      {/* Botones */}
       <div className='flex gap-x-4 z-[2]'>
        <button className='bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-xl text-white font-medium text-lg lg:text-2xl hover:scale-[1.03] transition-all '>Empezar Ahora</button>
        <button className='border-2 border-secondary rounded-xl p-2 px-4 text-lg lg:text-2xl hover:scale-[1.03] hover:text-white transition-all text-light font-medium '>Descubre mas</button>
       </div>
      </section>
      {/* Hero Image */}
      <img src={imgLanding} className='w-96 lg:w-[30rem] 2xl:w-[40rem]' alt='3D icon of computer'/>
    </section>

    {/* Luces */}
    <img src={spotlight1} alt='lights glows' className='absolute top-0 left-0 opacity-80 z-[1]'/>
    <img src={spotlight2} alt='lights glows' className='absolute bottom-0 right-0 opacity-80'/>
  </main>; 
};

export default LandingPage;
