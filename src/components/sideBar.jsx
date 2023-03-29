import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="w-48 bg-gradient-to-br  from-gray-600 to-gray-800 min-h-full h-screen flex flex-col items-center mt-16 pt-5 pb-2 space-y-7">
      <div className="bg-white/10 text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
        <Link to="/salesman">Resumen</Link>
      </div>
      <div className="bg-white/10 text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
        <Link to="/detail">Clientes</Link>
      </div>
      <div className="bg-white/10 text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex absolute bottom-3 left-0  space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
        <Link to="/">Salir</Link>
      </div>
    </div>
  );
}

export default SideBar;
