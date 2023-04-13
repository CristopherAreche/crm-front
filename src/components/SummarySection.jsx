import React from 'react'
import { useEffect } from 'react';
import { RiGroupLine, RiLoader4Fill, RiSecurePaymentLine, RiShoppingBagLine } from 'react-icons/ri'
import { getClients } from '../services/clientsServices';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../services/productsServices';

const SummarySection = ({data, sellerId}) => {

  const dispatch = useDispatch()
  const {status , clients} = useSelector(state => state.clients)
  const {products} = useSelector(state => state.products)
  const statusProducts = useSelector(state => state.products.status)
  const cantDes = clients.reduce((total, client) => !client.enable ? total + 1 : total, 0);
  const productsDes = products.reduce((total, product) => !product.enable ? total + 1 : total, 0);
   
  useEffect(() => {
    if(status === 'idle') dispatch(getClients(sellerId))
  }, [status, dispatch, sellerId]);  

  useEffect(() => {
    if (statusProducts === 'idle') dispatch(getAllProducts())
  }, [dispatch, statusProducts]);

  const onQuantity = (key) => clients.reduce((total, client) => client[key] ? total + 1 : total, 0);
  const onQuantityProducts = (key) => products.reduce((total, client) => client[key] ? total + 1 : total, 0);
  const onQuantityCategories = () => {
    const onlyCat = products.map(product => product.category)
    const categories = [...new Set(onlyCat)]
    return categories.length
  }
  if (statusProducts === "loading" || status === "loading") {
    return (
      <div className="flex justify-center w-full">
        <RiLoader4Fill className="animate-spin text-4xl text-secondary mt-8" />
      </div>
    )
  }

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
            <h3 className="text-light text-3xl font-bold tracking-wide">{products?.length}</h3>
            <p className="text-sm font-medium text-light/80 flex gap-x-1 items-center w-28">
              Productos disponibles <RiShoppingBagLine className="text-4xl" />
            </p>
            <footer className="flex gap-x-2 items-center">
              <p className="flex gap-x-1 items-center text-sm ">
                {onQuantityProducts('enable')}
                <span className="text-xs font-medium text-emerald-200">
                  Hab
                </span>
              </p>
              <p className="flex gap-x-1 items-center text-sm ">
                {productsDes}
                <span className="text-xs font-medium text-red-200">Des</span>
              </p>
              <p className="flex gap-x-1 items-center text-sm ">
                {onQuantityCategories()}
                <span className="text-xs font-medium text-yellow-200">Cat</span>
              </p>
            </footer>
          </article>
    </section>
  )
}

export default SummarySection