import React from "react";

const BestSeller = ({ best_salesman }) => {
  const bs = best_salesman?.image;
  return (
    <div className="flex flex-col h-full w-full">
      <h2 className="text-white font-bold text-[1.5em] justify-center flex">
        MEJOR VENDEDOR DEL MES
      </h2>

      <div className="py-6 w-full text-white flex justify-center flex-col">
        <div className="flex justify-center mb-3">
          <img
            src={
              !bs ? `https://cdn-icons-png.flaticon.com/512/219/219983.png` : bs
            }
            alt="placeholder"
            className="w-28 h-28 rounded-full "
          />
        </div>
        <div className="px-4 py-2 text-center text-[1.3em]">
          Nombre: {best_salesman?.name}
        </div>
        <div className="px-4 py-2 text-center text-[1.3em]">
          Total de Ventas: ${best_salesman?.total_monthly_sales}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
