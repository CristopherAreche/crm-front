import React from 'react'
import HeaderPerfil from './shared/HeaderPerfil'
import PrincipalInformation from './shared/PrincipalInformation'
import { RiStarFill, RiStarLine, RiEdit2Line } from 'react-icons/ri'
import PersonalInformationView from './shared/PersonalInformationView'

const MainPerfilSeller = () => {

  const salemanPerfil =  {
    "id": "ae8b659a-1158-411e-a16c-06ca9c0accc5",
    "name": "Barbara Clement",
    "address": "Kulas Light Apt. 556, Gwenborough",
    "email": "Sincere@april.biz",
    "phone": "98265435787",
    "enable": true,
    "createdAt": "2023-04-07T09:05:53.674Z",
    "updatedAt": "2023-04-07T09:05:53.674Z",
    "bossId": "e2240175-ccee-4539-9a41-0e9b8d75303f",
    "avgFeedback": 2.5,
    "total_monthly_sales": 65390
  }

  return (
    <section className='py-6 px-12 z-[2] min-h-screen'>
        <HeaderPerfil data={salemanPerfil}/>
        <section className='grid grid-cols-1 lg:grid-cols-6 '>
          <section className='flex flex-col items-start gap-y-2 col-span-2'> 
            <PrincipalInformation data={salemanPerfil}/>
            <p className='flex gap-x-2 items-center text-yellow-400 mb-4'>{[...new Array(5)].map((star, index) => {return index < salemanPerfil.avgFeedback ? <RiStarFill/> :  <RiStarLine/>}) }</p>
            <button className='bg-secondary p-3 shadow-secondary/25 hover:bg-secondary/70 transition-all rounded-full box-content shadow-md'><RiEdit2Line className='text-xl text-base-light'/></button>
          </section>
          <PersonalInformationView data={salemanPerfil}/>
        </section>
    </section>
  )
}

export default MainPerfilSeller