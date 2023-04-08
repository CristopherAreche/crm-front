import React from 'react'

const HeaderPerfil = ({data}) => {
  return (
    <header className='flex justify-between mb-6 border-b border-light/50 pb-6'>
        <h3 className='text-2xl font-medium text-light'>Perfil de {data.username || data.name}</h3>
        <button className={`${data.enable ? 'text-red-400 border-red-500 ' : 'text-emerald-400 border-emerald-500 '} text-sm  border p-1 rounded-md hover:scale-[1.03] transition-all`}>{data.enable ? 'Dar de baja' : 'Habilitar'}</button>
    </header>
  )
}

export default HeaderPerfil