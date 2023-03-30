import React from 'react'
import { RiArrowLeftLine, RiMailLine, RiLock2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

 const LoginPage = () => {
  return (
    <section className='flex flex-col items-start justify-center min-h-screen px-20 gap-y-4'>
      <div className='block lg:hidden absolute top-4 left-4'>
      <Link to='/' className='flex gap-x-1 items-center font-medium group hover:text-white/90 transition-colors'>
              <RiArrowLeftLine className='text-2xl group-hover:-translate-x-1 transition-transform'/>
              Volver atras 
          </Link>
      </div>
     <h2 className='text-xl text-white font-bold tracking-widest hover:text-light transition-colors cursor-pointer z-10'>LOGO</h2>
      <h3 className='text-2xl font-medium text-light'>Hey, Hola de nuevo ✋</h3>
      <p className='text-gray-400 '>Ingrese la información que ingresó al registrarse</p>
     <form className='flex flex-col w-full gap-y-4 mb-4'>
        <div className='relative flex flex-col gap-y-1 mb-2'>
            <label className='font-medium text-gray-200'>Email</label>
            <input type='text' className='bg-base-light/60 py-2 pl-10 pr-4 w-full rounded-md outline-none shadow-md'/>
            <RiMailLine className='absolute top-1/2 translate-y-1 left-2 text-2xl text-secondary '/>
        </div>
        <div className='relative flex flex-col gap-y-1'>
            <label className='font-medium text-gray-200'>Contraseña</label>
            <input type='password' className='bg-base-light/60 py-2 pl-10 pr-4  w-full rounded-md outline-none shadow-md'/>
            <RiLock2Line className='absolute top-1/2 translate-y-1 left-2 text-2xl text-secondary '/>
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