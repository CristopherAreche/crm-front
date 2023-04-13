import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { RiMailLine, RiMapPinLine, RiPhoneLine, RiUser3Line } from "react-icons/ri"
import { useDispatch, useSelector } from 'react-redux'
import { putSeller } from '../../services/sellersServices'


const FormEditPerfilSeller = ({onClose}) => {
  const { register, handleSubmit, formState: { errors },reset, } = useForm()

  const { seller } = useSelector(state => state.sellers)  
  const dispatch = useDispatch()
  const onSubmit = handleSubmit((data) => {
    dispatch(putSeller(data))
    onClose()
  })

  useEffect(() => {
    if (seller) reset({
        name: seller.name,
        phone: seller.phone,
        email: seller.email,
        address: seller.address,
        id: seller.id,
    })
  }, [reset, seller])


  return (
    <div className='fixed inset-0  bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <form 
            onSubmit={onSubmit}
             className='w-[90vw] lg:w-96  bg-base-light/60 py-6 px-8 rounded-md flex flex-col items-start gap-y-4 h-auto overflow-y-auto'>
            <h2 className='text-xl font-bold text-light'>EDITAR PERFIL</h2>
            <div className='flex flex-col gap-y-2 w-full'>
                <label className="text-sm font-medium text-light">Nombre completo</label>
                <div className='relative'>
                    <input
                        {...register('name', { required: true })} 
                        type='text' className="bg-base-light/70 py-1 rounded-md outline-none pl-8 pr-4 w-full"/>
                    <RiUser3Line className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary "/>
                </div>
                {errors.name && (
                    <span className='text-sm font-medium text-red-400'>Este campo es requerido!</span>
                )}
            </div>
            <div className='flex flex-col gap-y-2 w-full'>
                <label className="text-sm font-medium text-light">Telefono</label>
                <div className='relative'>
                    <input
                        {...register('phone', { required: true })} 
                        type='text' className="bg-base-light/70 py-1 rounded-md outline-none pl-8 pr-4 w-full"/>
                    <RiPhoneLine className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary "/> 
                </div>
                {errors.phone && (
                    <span className='text-sm font-medium text-red-400'>Este campo es requerido!</span>
                 )}
            </div>
            <div className='flex flex-col gap-y-2 w-full'>
                <label className="text-sm font-medium text-light">Correo electronico</label>
                <div className='relative'>
                    <input
                        {...register('email', { required: true })} 
                        type='text' className="bg-base-light/70 py-1 rounded-md outline-none pl-8 pr-4 w-full"/>
                    <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary "/> 
                </div>
                {errors.email && (
                    <span className='text-sm font-medium text-red-400'>Este campo es requerido!</span>
                )}
            </div>
            <div className='flex flex-col gap-y-2 w-full'>
                <label className="text-sm font-medium text-light">Direccion</label>
                <div className='relative'>
                    <input
                        {...register('address', { required: true })} 
                        type='text' className="bg-base-light/70 py-1 rounded-md outline-none pl-8 pr-4 w-full"/>
                    <RiMapPinLine className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary "/> 
                </div>
                {errors.address && (
                    <span className='text-sm font-medium text-red-400'>Este campo es requerido!</span>
                 )}
            </div>
            <section className='flex justify-between items-center w-full'>
                <button type="button"
                className="p-2 rounded-md font-medium text-base bg-gray-300 shadow-md shadow-gray-300/20 hover:bg-gray-300/80 transition-all" onClick={onClose}>Cerrar</button>
                <button  className="p-2 bg-emerald-400 shadow-md shadow-emerald-400/20 rounded-md hover:bg-emerald-400/80 transition-all"
                type="submit">Actualizar</button>
            </section>
        </form>
    </div>
  )
}

export default FormEditPerfilSeller