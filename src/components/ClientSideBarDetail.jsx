import React from 'react'
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiTask } from 'react-icons/bi';

const ClientSideBarDetail = () => {
  return (
    <>
    <p className="text-light font-medium text-center">
      <span className='text-gray-400'>Email:</span> shanna@melissa.tv
    </p>
    <h4 className="text-light text-3xl text-center font-medium">
        Ervin Howell
    </h4>
    <div className="flex justify-center gap-x-4">
      <BiTask className="bg-light p-3 box-content text-xl rounded-full " />
      <AiOutlineMail className="bg-light text-xl rounded-full p-3 box-content " />
      <AiOutlinePhone className="bg-light text-xl rounded-full p-3 box-content" />
    </div>
    <div className=" flex flex-col gap-y-1 justify-center items-center">
      <p className="text-4xl text-secondary font-medium">$34,321</p>
      <p className='text-light text-lg '>Total pagado</p>
    </div>
    <div className="flex justify-center gap-x-4">
      <div className="bg-yellow-400 py-3 px-6 rounded-lg font-medium text-base-light shadow-md shadow-yellow-400/10">VIP</div>
      <div className="bg-green-400 py-3 px-6 rounded-lg font-medium text-base-light shadow-md shadow-green-400/10">Enable</div>
    </div>
</>
  )
}

export default ClientSideBarDetail