import React from 'react'
import { RiTimeLine } from 'react-icons/ri'

const ProductsCards = ({item}) => {
  return (
    <article className="flex items-center justify-between bg-base-light/30 pr-2 shadow-md rounded-md">
        <div className="flex items-center gap-x-2">
            <img
                src={item.image ? item.image : 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-6_large.png?format=jpg&quality=90&v=1530129477'}
                className="w-14 h-14 object-cover rounded-tl-md rounded-bl-md"
                alt="product"/>
            <div>
                <p className="text-sm font-medium text-light/90">{item.name}</p>
                <p className="text-xs text-light/80">{item.category} - ${item.sale_price}</p>
            </div>
        </div>
        <p className="flex gap-x-1 items-center text-sm font-medium text-secondary">
            <RiTimeLine /> {item.lastest}h
        </p>
    </article>
  )
}

export default ProductsCards