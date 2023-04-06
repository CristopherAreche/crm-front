import { Outlet } from "react-router-dom";

const Clients = () => {
  return (
    <main className=" px-6 w-full py-[1em] col-start-3 col-end-11 h-[100vh] overflow-y-auto z-40 flex flex-col gap-2 lg:w-auto justify-center items-center">
      <Outlet />
      <div className=" h-[5em] w-[50%] bg-green-200 flex justify-center items-center text-black">
        Vip% Descuento
      </div>
      <div className="h-[50em] w-full bg-green-300 flex justify-center items-center text-black">
        Lista de Clientes
      </div>
      <div className=" h-[5em] w-full bg-green-400 flex justify-center items-center text-black">
        Deshabilitar | Historial | Promover VIP
      </div>
    </main>
  );
};

export default Clients;
