import { Link, Outlet } from 'react-router-dom'
import spotlight1 from '../assets/svg/Spotlight1.svg'


 const AuthLayout = () => {
  return (
    <main className='min-h-screen bg-base text-white flex '>
      <section className='hidden lg:block bg-gradient-to-r from-primary to-secondary flex-1 rounded-tr-md rounded-br-md'>
      <div className='absolute top-4 left-4'>
        <Link to='/' className='flex gap-x-2 font-medium'> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L6.39411 15.3941C5.20606 14.2061 4.61204 13.612 4.38947 12.9271C4.1937 12.3245 4.1937 11.6755 4.38947 11.0729C4.61204 10.388 5.20606 9.79394 6.39411 8.60589L9 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.5 12H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Volver atras 
        </Link>
       
      </div>
       <article className='flex flex-col  justify-center w-[28rem] mx-auto h-full'>
        <div className='bg-base/40 rounded-md px-8 py-4'>
            <h1 className='text-5xl font-bold mb-4'>Descubre cómo nuestra <span className='bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text'>CRM</span> puede ayudar a tu negocio.</h1>
            <p className='font-medium text-white/90'>Aumenta la productividad de tu equipo con nuestra CRM</p>
        </div>
       </article>
      </section>
      <section className='flex-1 z-[2]'>
         <Outlet />
      </section>  
      <img src={spotlight1} className='absolute top-0 right-0 opacity-80 z-[1]' alt='light glow'/>
    </main>
  )
}

export default AuthLayout
