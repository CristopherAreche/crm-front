import React from 'react'
import { useEffect } from 'react';
import { RiGroupLine, RiSecurePaymentLine, RiShoppingBagLine } from 'react-icons/ri'
import { getClients } from '../services/clientsServices';
import { useDispatch, useSelector } from 'react-redux';

const SummarySection = ({data, sellerId}) => {


  const dispatch = useDispatch()
  const clients = useSelector(state => state.clients.clients)
  const cantDes = clients.reduce((total, client) => !client.enable ? total + 1 : total, 0);
   
  useEffect(() => {
    dispatch(getClients(sellerId))
  }, []);  

  const onQuantity = (key) => clients.reduce((total, client) => client[key] ? total + 1 : total, 0);
  
  return (
    <section className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <article className="bg-base-light/30 shadow-md rounded-md py-2 px-3 flex flex-col items-start gap-y-2">
            <RiSecurePaymentLine className="text-3xl text-light/80" />
            <h3 className="text-light text-3xl font-bold tracking-wide">
              ${data.total_monthly_sales}
            </h3>
            <p className="text-sm font-medium text-light/80">Balance actual</p>
          </article>
          <article className="bg-base-light/30 shadow-md rounded-md py-2 px-3 flex flex-col items-start gap-y-2">
            <h3 className="text-light text-3xl font-bold tracking-wide">{clients?.length}</h3>
            <p className="text-sm font-medium text-light/80 flex gap-x-1 items-center">
              Clientes <RiGroupLine />
            </p>
            <footer className="flex gap-x-2 items-center">
              <p className="flex gap-x-1 items-center text-sm ">
                {onQuantity('enable')}
                <span className="text-xs font-medium text-emerald-200">
                  Hab
                </span>
              </p>
              <p className="flex gap-x-1 items-center text-sm ">
                {cantDes}
                <span className="text-xs font-medium text-red-200">Des</span>
              </p>
              <p className="flex gap-x-1 items-center text-sm ">
                {onQuantity('vip')}
                <span className="text-xs font-medium text-yellow-200">
                  Vips
                </span>
              </p>
            </footer>
          </article>
          <article className="bg-base-light/30 shadow-md rounded-md py-2 px-3 flex flex-col items-start gap-y-2">
            <h3 className="text-light text-3xl font-bold tracking-wide">17</h3>
            <p className="text-sm font-medium text-light/80 flex gap-x-1 items-center w-28">
              Productos disponibles <RiShoppingBagLine className="text-4xl" />
            </p>
            <footer className="flex gap-x-2 items-center">
              <p className="flex gap-x-1 items-center text-sm ">
                15
                <span className="text-xs font-medium text-emerald-200">
                  Hab
                </span>
              </p>
              <p className="flex gap-x-1 items-center text-sm ">
                2<span className="text-xs font-medium text-red-200">Des</span>
              </p>
              <p className="flex gap-x-1 items-center text-sm ">
                4
                <span className="text-xs font-medium text-yellow-200">Cat</span>
              </p>
            </footer>
          </article>
        </section>
  )
}

export default SummarySection