import React from 'react'

const PrincipalInformation = ({data}) => {
  return (
    <section className='flex flex-row lg:flex-col gap-x-4 lg:gap-y-2 items-center lg:items-start'>
        <img src='https://cdn-icons-png.flaticon.com/512/219/219983.png' alt='placeholde' className='h-32 w-32'/>
        <h4 className='text-2xl font-medium text-light'>{data.name}</h4>
        <p className='text-light/80'>{data.email}</p>
    </section>
  )
}

export default PrincipalInformation