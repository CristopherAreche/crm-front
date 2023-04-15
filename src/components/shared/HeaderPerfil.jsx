import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { putBoss } from '../../app/features/bossSlice'
import { toggleStatusSeller } from '../../services/sellersServices'
import swal from 'sweetalert'

const HeaderPerfil = () => {

  const userId= useSelector((state) => state.auth.User.id);
  const userName= useSelector((state) => state.auth.User.name);
  const role = useSelector((state) => state.auth.userRole);
  const enable = useSelector((state) => state.auth.User.enable);
  const dispatch = useDispatch()

  const onToggleEnable = () => {
    swal({
      title: `${enable ? 'Estas seguro que quieres darte de baja?' : 'Estas seguro que quiere habilitar tu perfil?'}`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((accept) => {
      if (accept) {
        if(role !== 'admin') dispatch(toggleStatusSeller({enable : !enable, id: userId}))
        else dispatch(putBoss({enable : !enable, Id: userId}))
      }
      else swal("La modificacion no se concreto");
    })

  }

  return (
    <header className='flex justify-between mb-6 border-b border-light/50 pb-6'>
        <h3 className='text-2xl font-medium text-light'>Perfil de {userName || userName}</h3>
        <button 
        onClick={onToggleEnable}
        className={`${enable ? 'text-red-400 border-red-500 ' : 'text-emerald-400 border-emerald-500 '} text-sm  border p-1 rounded-md hover:scale-[1.03] transition-all`}>{enable ? 'Dar de baja' : 'Habilitar'}</button>
    </header>
  )
}

export default HeaderPerfil