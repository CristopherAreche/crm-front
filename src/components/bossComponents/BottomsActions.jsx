import React, { useState } from 'react'
import { RiVipCrown2Line, RiFileListLine } from 'react-icons/ri'
import ModalHistory from './ModalHistory'
import { toggleVipClient } from '../../services/clientsServices'
import { useDispatch, useSelector } from 'react-redux'

const BottomsActions = () => {

   const [isShow, setIsShow] = useState(false)
   const clientSelected = useSelector((state) => state.clients.clientSelected)
   const dispatch = useDispatch()
   const onPromoteVip  = () => dispatch(toggleVipClient({clientSelected, vip : true}))
   const OnUnsubscribeVip  = () => dispatch(toggleVipClient({clientSelected, vip : false}))

  return (
    <section className=" text-white text-bold flex justify-evenly w-full  items-center rounded-md flex-wrap gap-4 pt-8">  
      <button
        className=" rounded-xl py-2 px-3 shadow-orange-400/20 hover:scale-[1.03] hover:bg-orange-400/60 transition-all shadow-md bg-orange-400 "
        onClick={onPromoteVip}
      >
        <RiVipCrown2Line className="text-2xl" />
      </button> 
      <button
        className=" rounded-xl py-2 px-3 shadow-gray-400/20 hover:scale-[1.03] hover:bg-gray-400/60 transition-all shadow-md bg-gray-400 "
      onClick={OnUnsubscribeVip}
      >
        <RiVipCrown2Line className="text-2xl" />
      </button> 
      <button
        className=" rounded-xl py-2 px-3 shadow-sky-400/20 hover:scale-[1.03] hover:bg-sky-400/60 transition-all shadow-md bg-sky-400"
        onClick={() => setIsShow(true)}
      >
        <RiFileListLine className="text-2xl" />
      </button>
     {isShow && <ModalHistory onClose={() => setIsShow(false)}/>}
    </section>
  )
}

export default BottomsActions