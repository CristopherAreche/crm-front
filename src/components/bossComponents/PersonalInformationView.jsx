import { RiMailLine, RiMapPinLine, RiPhoneLine, RiUser3Line, RiUser5Line } from "react-icons/ri"

const PersonalInformationView = ({bossPerfil}) => {
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

export default PersonalInformationView  