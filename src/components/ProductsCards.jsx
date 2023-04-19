import React from "react";
import { useSelector } from "react-redux";

const ProductsCards = ({ item }) => {
  const { clientDetail } = useSelector((state) => state.clients);
  return (
    <article className="flex items-center justify-between bg-base-light/30 pr-2 shadow-md rounded-md">
      <div className="flex items-center gap-x-2">
        <img
          src={
            item.image
              ? item.image
              : "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-6_large.png?format=jpg&quality=90&v=1530129477"
          }
          className="w-14 h-14 object-cover rounded-tl-md rounded-bl-md"
          alt="product"
        />
        <div>
          <p className="text-sm font-medium text-light/90">{item.name}</p>
          {!clientDetail.vip ? (
            <p className="text-xs text-light/80">
              {item.category}
              <span className="text-green-300 font-medium">
                - ${item.sale_price}
              </span>
              <span className="text-white mx-10 font-medium">
                Stock: {item.quantity}
              </span>
            </p>
          ) : (
            <p className="flex gap-x-1">
              {item.category} -{" "}
              <span className="line-through text-gray-500">
                $ {item.sale_price}
              </span>
              <span className="bg-yellow-400  text-base-light px-1 rounded-md text-medium">
                % {item.discount}
              </span>{" "}
              <span className="text-green-300 font-medium">
                $ {item.withDiscount}
              </span>
              <span className="font-medium">Stock: {item.quantity}</span>
            </p>
          )}
        </div>
      </div>
      <p
        className={`flex gap-x-1 items-center text-sm font-medium  ${
          !item.enable ? "text-red-400" : "text-secondary"
        }`}
      >
        {item.enable ? "Habilitado" : "Deshabilitado"}
      </p>
    </article>
  );
};

export default ProductsCards;
