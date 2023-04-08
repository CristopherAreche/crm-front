import React, { useState } from 'react'
import { RiEdit2Line } from 'react-icons/ri'
import PersonalInformationView from '../shared/PersonalInformationView'
import CompanyInformationView from './CompanyInformationView'
import HeaderPerfil from '../shared/HeaderPerfil'
import PrincipalInformation from '../shared/PrincipalInformation'

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
    <section className='py-6 px-12 z-[2]'>
      <HeaderPerfil data={bossPerfil}/>
      <section className='grid grid-cols-1 lg:grid-cols-6 '>
        {/* Section Principal Information */}
        <section className=' col-span-2 flex flex-col gap-y-6 items-start mb-6 lg:mb-0'>
          <PrincipalInformation data={bossPerfil}/>
          <div className='flex lg:flex-col justify-between w-full lg:gap-y-2 items-start'>
            <button className={`text-xl hover:text-secondary transition-colors  ${view === 'personal' ? 'text-secondary font-medium' : 'text-secondary/70'}`} onClick={() => setView('personal')}>Informacion Personal</button>
            <button className={`text-xl hover:text-secondary transition-colors  ${view === 'company' ? 'text-secondary font-medium' : 'text-secondary/70'}`} onClick={() => setView('company')}>Informacion de Empresa</button>
          </div>
          <button className='bg-secondary p-3 shadow-secondary/25 hover:bg-secondary/70 transition-all rounded-full box-content shadow-md'><RiEdit2Line className='text-xl text-base-light'/></button>
        </section>
        {/* Contenido Dinamico */}
        {view === 'personal'  
        ? <PersonalInformationView data={bossPerfil}/>
        : <CompanyInformationView data={bossPerfil}/>
        }
      </section>

    </section>
  )
}

export default MainPerfilBoss