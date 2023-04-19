import {RiTrophyLine} from "react-icons/ri";

const BestSeller = ({ best_salesman }) => {
  const bs = best_salesman?.image;
  // if(Object.keys(best_salesman).length === 0) {
  //   return (
  //     <div className="flex flex-col bg-base-light/30 rounded-md pt-4 w-full items-center gap-y-2 shadow-box">
  //       <h2 className="text-light font-bold text-xl text-center">
  //       MEJOR VENDEDOR DEL MES
  //       </h2>
  //       <p className="font-medium text-sm text-light/80">No cuentas con Vendedor del mes</p>
  //       <img src='https://img.freepik.com/vector-gratis/asociacion-rentable-cowork-socios-comerciales_335657-3010.jpg?w=740&t=st=1681866623~exp=1681867223~hmac=1763aed42d8ddd80972487efd4b4bc14ec05ba67252382960fc67d4214205400' alt='not sllers' className="rounded-br-md rounded-bl-md w-full h-48 opacity-60 object-cover"/>
  //     </div>
  //   );
  // }
  return (
    <div className="flex flex-col bg-base-light/30 px-2 rounded-md py-4 w-full items-center gap-y-2 shadow-box">
      <h2 className="text-light font-bold text-xl text-center">
        MEJOR VENDEDOR DEL MES
      </h2>
      <div className="relative">
          <img
            src={
            !bs ? `https://cdn-icons-png.flaticon.com/512/219/219983.png` : bs
                }
            alt="placeholder"
            className="w-28 h-28 rounded-full object-cover "
          />
          <RiTrophyLine className="text-2xl bg-yellow-500 absolute bottom-0 right-0 text-white p-1 box-content rounded-full"/>
      </div>
      <h5 className="font-medium text-light text-lg">{best_salesman?.name || 'Anonymous'} </h5>
      <p className="text-sm font-bold text-light/80">Total de ventas: ${best_salesman?.total_monthly_sales || '0'}</p>
    </div>
  );
};

export default BestSeller;
