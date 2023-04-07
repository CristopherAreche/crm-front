import React from 'react'
import { RiUserFollowLine, RiUserUnfollowLine, RiVipCrown2Line, RiFileListLine } from 'react-icons/ri'

const BottomsActions = () => {
  return (
    <section className=" text-white text-bold flex justify-evenly w-full  items-center rounded-md flex-wrap gap-4 pt-8">  
      <button
        className=" rounded-xl py-2 px-3 shadow-orange-400/20 hover:scale-[1.03] hover:bg-orange-400/60 transition-all shadow-md bg-orange-400 "
      >
        <RiVipCrown2Line className="text-2xl" />
      </button> 
      <button
        className=" rounded-xl py-2 px-3 shadow-sky-400/20 hover:scale-[1.03] hover:bg-sky-400/60 transition-all shadow-md bg-sky-400 "
      >
        <RiFileListLine className="text-2xl" />
      </button> 
      <button
        className=" rounded-xl py-2 px-3 shadow-gray-500/20 hover:scale-[1.03] hover:bg-gray-500/60 transition-all shadow-md bg-gray-500 "
      >
        <RiUserUnfollowLine className="text-2xl" />
      </button>
      <button
        className=" rounded-xl py-2 px-3 shadow-green-400/20 hover:scale-[1.03] hover:bg-green-400/60 transition-all shadow-md bg-green-400 "
      >
        <RiUserFollowLine className="text-2xl" />
      </button>
    </section>
  )
}

export default BottomsActions