import React from 'react'
import { Link } from 'react-router-dom'

 const LoginPage = () => {
  return (
    <section className='flex flex-col items-start justify-center min-h-screen px-20 gap-y-4'>
      <div className='block lg:hidden absolute top-4 left-4'>
        <Link to='/' className='flex gap-x-2 font-medium'> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L6.39411 15.3941C5.20606 14.2061 4.61204 13.612 4.38947 12.9271C4.1937 12.3245 4.1937 11.6755 4.38947 11.0729C4.61204 10.388 5.20606 9.79394 6.39411 8.60589L9 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.5 12H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Volver atras 
        </Link>
       
      </div>
     <h2 className='text-xl text-white font-bold tracking-widest hover:text-light transition-colors cursor-pointer z-10'>LOGO</h2>
      <h3 className='text-2xl font-medium text-light'>Hey, Hola de nuevo ✋</h3>
      <p className='text-gray-400 '>Ingrese la información que ingresó al registrarse</p>
     <form className='flex flex-col w-full gap-y-4 mb-4'>
        <div className='flex flex-col gap-y-1 mb-2'>
            <label className='font-medium text-gray-200'>Email</label>
            <input type='text' className='bg-base-light/60 py-2 px-3 w-full rounded-md outline-none shadow-md'/>
        </div>
        <div className='flex flex-col gap-y-1'>
            <label className='font-medium text-gray-200'>Contraseña</label>
            <input type='password' className='bg-base-light/60 py-2 px-3 w-full rounded-md outline-none shadow-md'/>
        </div>
        <div className='text-end'>
            <p className='bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text hover:underline hover:text-light transition-all cursor-pointer'>Olvidaste tu contraseña?</p>
        </div>
        <button className='bg-gradient-to-r from-primary to-secondary py-2 px-4 rounded-md font-bold text-lg hover:scale-[1.02] transition-all'>Login</button>
     </form>
     <section className='flex gap-x-2 items-center justify-center w-full bg-white py-2 hover:scale-[1.03] transition-all cursor-pointer rounded-md'>
       <img src='https://img.freepik.com/iconos-gratis/buscar_318-265146.jpg' alt='logo google' className='w-8 h-8'/>
       <p className='text-base font-medium '>Ingresar con Google</p>
     </section>
    </section>
  )
}

export default LoginPage