import { Link } from "react-router-dom";

function SideBar({
  clients,
  routeClients,
  salesMans,
  routeSalesMans,
  inventario,
  routeInventario,
}) {
  return (
    <div className="px-4 py-[10em] space-y-7 col-span-2 row-start-2 row-end-7 flex flex-col bg-gradient-to-br from-gray-800 via-slate-800 to-gray-900">
      <div className="text-center bg-gray-400 group-hover:bg-white/10 group-active:scale-95 self-stretch p-2 rounded space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
        <Link to="/">Resumen</Link>
      </div>
      <div
        className={`pl-2 bg-gray-400 text-black justify-center group-hover:bg-white/10 w-full group-active:scale-95 self-stretch rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}
      >
        <Link to={routeClients}>{clients}</Link>
      </div>
      <div className="text-center bg-gray-400 text-black group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
        <Link to={routeSalesMans}>{salesMans}</Link>
      </div>

      <div className="text-center bg-gray-400 text-black group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
        <Link to={routeInventario}>{inventario}</Link>
      </div>

      <div className=" text-center bg-red-500 text-white group-hover:bg-white/10 group-active:scale-95 p-2 rounded bottom-5  space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
        <Link to="/">Salir</Link>
      </div>
    </div>
  );
}

export default SideBar;
