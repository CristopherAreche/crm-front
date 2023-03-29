import { Link } from "react-router-dom";

function SideBarRight({
  clients,
  routeClients,
  salesMans,
  routeSalesMans,
  inventario,
  routeInventario,
}) {
  return (
    <div className="relative px-4 py-[10em] space-y-7 flex flex-col col-start-6 col-end-7 row-start-2 row-end-7 bg-gradient-to-br from-gray-600 to-gray-800">
      <div className="text-center bg-gray-400 text-black group-hover:bg-white/10 group-active:scale-95 self-stretch p-2 rounded space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
        <Link to="/vendedor_detalles_cliente">Detalles</Link>
      </div>

      <div className=" text-center bg-gray-400 text-black group-hover:bg-white/10 w-full group-active:scale-95 self-stretch p-2 rounded items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
        <Link to={routeClients}>Agregar</Link>
      </div>
      <div className="text-center bg-gray-400 text-black group-hover:bg-white/10 w-full group-active:scale-95 self-stretch p-2 rounded items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
        <Link to={routeSalesMans}>Editar</Link>
      </div>

      <div className="text-center bg-gray-400 text-black group-hover:bg-white/10 w-full group-active:scale-95 self-stretch p-2 rounded items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
        <Link to={inventario}>Deshabilitar</Link>
      </div>

      <div className=" text-center bg-red-500 text-white group-hover:bg-white/10 group-active:scale-95 p-2 rounded bottom-5  space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
        <Link to="/">Eliminar</Link>
      </div>
    </div>
  );
}

export default SideBarRight;
