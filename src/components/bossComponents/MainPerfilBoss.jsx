import React, { useState } from 'react'
import { RiCopyrightLine, RiEdit2Line, RiGlobalLine, RiHonourLine, RiMailLine, RiMapPinLine, RiPhoneLine, RiStarSmileLine, RiUser3Line, RiUser5Line } from 'react-icons/ri'

export const PersonalInformationView = ({bossPerfil}) => {
  return (
    <section className='col-span-4 flex flex-col gap-y-6'>
    <header className='flex flex-col gap-y-4'>
      <h4 className='text-light font-medium text-4xl'>Informacion Personal</h4>
      <p className='text-light/80 text-sm'>Gestiona tu información personal general, incluye numero de telefono y email para que puedas ser contactado</p>
    </header>
    <main className='grid grid-cols-2 gap-4'>
      <article className='bg-base-light/30 py-4 px-4 shadow-md rounded-md'>
        <header className='flex items-center justify-between mb-2'>
          <p className='text-light text-lg font-medium'>Nombre completo</p>
          <RiUser3Line className='text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full'/>
        </header>
        <p className='text-light/80 '>{bossPerfil.name}</p>
      </article>
      <article className='bg-base-light/30 py-4 px-4 shadow-md rounded-md'>
        <header className='flex items-center justify-between mb-2'>
          <p className='text-light text-lg font-medium'>Nombre de usuario</p>
          <RiUser5Line className='text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full'/>
        </header>
        <p className='text-light/80 '>{bossPerfil.username}</p>
      </article>
      <article className='bg-base-light/30 py-4 px-4 shadow-md rounded-md'>
        <header className='flex items-center justify-between mb-2'>
          <p className='text-light text-lg font-medium'>Direccion</p>
          <RiMapPinLine className='text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full'/>
        </header>
        <p className='text-light/80 '>{bossPerfil.address}</p>
      </article>
      <article className='bg-base-light/30 py-4 px-4 shadow-md rounded-md'>
        <header className='flex items-center justify-between mb-2'>
          <p className='text-light text-lg font-medium'>Telefono</p>
          <RiPhoneLine className='text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full'/>
        </header>
        <p className='text-light/80 '>{bossPerfil.phone}</p>
      </article> 
      <article className='bg-base-light/30 py-4 px-4 shadow-md rounded-md'>
        <header className='flex items-center justify-between mb-2'>
          <p className='text-light text-lg font-medium'>Correo electronico</p>
          <RiMailLine className='text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full'/>
        </header>
        <p className='text-light/80 '>{bossPerfil.email}</p>
      </article> 
    </main>
  </section>
  )
}

export const CompanyInformationView = ({bossPerfil}) => {
  return (
    <section className='col-span-4 flex flex-col gap-y-6'>
    <header className='flex flex-col gap-y-4'>
      <h4 className='text-light font-medium text-4xl'>Informacion de la Compania</h4>
      <p className='text-light/80 text-sm'>Gestiona tu información de compania general, incluye numero de telefono y email para que puedas ser contactado</p>
    </header>
    <main className='grid grid-cols-2 gap-4'>
      <article className='bg-base-light/30 py-4 px-4 shadow-md rounded-md'>
        <header className='flex items-center justify-between mb-2'>
          <p className='text-light text-lg font-medium'>Nombre</p>
          <RiGlobalLine className='text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full'/>
        </header>
        <p className='text-light/80 '>{bossPerfil.company}</p>
      </article>
      <article className='bg-base-light/30 py-4 px-4 shadow-md rounded-md'>
        <header className='flex items-center justify-between mb-2'>
          <p className='text-light text-lg font-medium'>Descripcion</p>
          <RiHonourLine className='text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full'/>
        </header>
        <p className='text-light/80 '>{bossPerfil.company_description}</p>
      </article>
      <article className='bg-base-light/30 py-4 px-4 shadow-md rounded-md'>
        <header className='flex items-center justify-between mb-2'>
          <p className='text-light text-lg font-medium'>Regristro Comercial</p>
          <RiCopyrightLine className='text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full'/>
        </header>
        <p className='text-light/80 '>{bossPerfil.commercial_register}</p>
      </article>
      <article className='bg-base-light/30 py-4 px-4 shadow-md rounded-md'>
        <header className='flex items-center justify-between mb-2'>
          <p className='text-light text-lg font-medium'>Logo</p>
          <RiStarSmileLine className='text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full'/>
        </header>
        <p className='text-light/80 '>{bossPerfil.logo}</p>
      </article> 
      <article className='bg-base-light/30 py-4 px-4 shadow-md rounded-md'>
        <header className='flex items-center justify-between mb-2'>
          <p className='text-light text-lg font-medium'>Telefono</p>
          <RiPhoneLine className='text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full'/>
        </header>
        <p className='text-light/80 '>{bossPerfil.phone}</p>
      </article> 
      <article className='bg-base-light/30 py-4 px-4 shadow-md rounded-md'>
        <header className='flex items-center justify-between mb-2'>
          <p className='text-light text-lg font-medium'>Correo electronico</p>
          <RiMailLine className='text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full'/>
        </header>
        <p className='text-light/80 '>{bossPerfil.email}</p>
      </article> 
    </main>
  </section>
  )
}


const MainPerfilBoss = () => {


  const [view, setView] = useState('personal')

  const bossPerfil = {
    "id": "00d4cf20-b761-40cc-baf2-7c40aa53caf9",
    "name": "Robert Pickman",
    "username": "Rob",
    "company": "Great Company City",
    "company_description": "The first company of the citynetwork",
    "commercial_register": "RobJobMarket",
    "address": "Av Manco Capac, Calle 13, Colombia",
    "email": "robpick@gmail.com",
    "password": "12345",
    "phone": "982654357",
    "logo": "GreatCity.org",
    "enable": true
  }

  return (
    <section className='py-6 px-12 z-[2] '>
      <div className='flex justify-between mb-6 border-b border-light/50 pb-6'>
        <h3 className='text-2xl font-medium text-light'>Perfil de {bossPerfil.username}</h3>
        <button className='text-red-400  text-sm  border p-1 rounded-md border-red-500 hover:scale-[1.03] transition-all'>{bossPerfil.enable ? 'Dar de baja' : 'Habilitar'}</button>
      </div>
      <section className='grid grid-cols-1 lg:grid-cols-6 '>
        {/* Section Principal Information */}
        <section className=' col-span-2 flex flex-col gap-y-6 items-start mb-6 lg:mb-0'>
          <div className='flex flex-row lg:flex-col gap-x-4 lg:gap-y-2 items-center lg:items-start'>
            <img src='https://cdn-icons-png.flaticon.com/512/219/219983.png' alt='placeholde' className='h-32 w-32'/>
            <h4 className='text-2xl font-medium text-light'>{bossPerfil.name}</h4>
            <p className='text-light/80'>{bossPerfil.email}</p>
          </div>
          <div className='flex lg:flex-col justify-between w-full lg:gap-y-2 items-start'>
            <button className={`text-xl hover:text-secondary transition-colors  ${view === 'personal' ? 'text-secondary font-medium' : 'text-secondary/70'}`} onClick={() => setView('personal')}>Informacion Personal</button>
            <button className={`text-xl hover:text-secondary transition-colors  ${view === 'company' ? 'text-secondary font-medium' : 'text-secondary/70'}`} onClick={() => setView('company')}>Informacion de Empresa</button>
          </div>
          <button className='bg-secondary p-3 shadow-secondary/25 hover:bg-secondary/70 transition-all rounded-full box-content shadow-md'><RiEdit2Line className='text-xl text-base-light'/></button>
        </section>
        {/* Contenido Dinamico */}
        {view === 'personal'  
        ? <PersonalInformationView bossPerfil={bossPerfil}/>
        : <CompanyInformationView bossPerfil={bossPerfil}/>
        }
      </section>

    </section>
  )
}

export default MainPerfilBoss