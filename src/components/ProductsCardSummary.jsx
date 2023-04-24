import React from "react";

const ProductsCardSummary = ({ item }) => {
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
        <div className="flex flex-col">
          <p className="flex gap-x-1 font-medium text-sm text-gray-200">
            {item.name} -{" "}
            <span className="text-sm text-light">${item.sale_price}</span>
          </p>
          <p className="text-gray-300 font-medium text-xs">
            {item.quantity} - stock
          </p>
        </div>
      </div>
      <p
        className={`text-xs font-medium  ${
          !item.enable ? "text-red-400" : "text-emerald-300"
        }`}
      >
        {item.enable ? "Habilitado" : "Deshabilitado"}
      </p>
    </article>
  );
};

export default ProductsCardSummary;
