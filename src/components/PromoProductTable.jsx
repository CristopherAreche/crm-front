import React from "react";

const PromoProductTable = () => {
  return (
    <div className="flex flex-col h-[100%] w-full">
      <div className="flex justify-between items-center px-4 py-2">
        <h1 className="text-lg font-bold">Productos con promoción</h1>
      </div>
      <div className="flex flex-col max-h-96 overflow-y-auto ">
        <table className="table-auto  w-full">
          <thead>
            <tr className="bg-base-light">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Producto</th>
              <th className="px-4 py-2">Precio</th>
              <th className="px-4 py-2">Descuento</th>
              <th className="px-4 py-2">Precio con descuento</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(20)].map((_, index) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">Producto {index + 1}</td>
                <td className="border px-4 py-2">$100</td>
                <td className="border px-4 py-2">10%</td>
                <td className="border px-4 py-2">$90</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PromoProductTable;
