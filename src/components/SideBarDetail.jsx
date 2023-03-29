import { Link } from "react-router-dom";

function SideBarDetail() {
  return (
    <div className="w-52 rounded-xl bg-gradient-to-br  from-gray-600 to-gray-800 min-h-full h-screen flex flex-col items-center mt-16 pt-5 pb-2 space-y-7">
      <div className="bg-white/10 text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex-col items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
        <button> Registrar llamada</button>
      </div>
      <div className="bg-white/10 text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex-col items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
        <button>Enviar corrreo</button>
      </div>

      <div className="bg-white/10 text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex-col items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
        <button>Agendar tarea</button>
      </div>

      <div className="bg-white/10 py-4 text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex-col items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-base">
        <ul className="py-2.5">Nombre: Gaspar </ul>
        <ul className="py-2.5">Correo: gaspar@gmail </ul>
        <ul className="py-2.5">Telefono: 22222222</ul>
        <ul className="py-2.5">Total Comprado: $50</ul>
        <ul className="py-2.5">Preferencia:(categoria)</ul>
        <ul className="py-2.5">VIP: Sí</ul>
      </div>

      <div className="bg-white/10 text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex absolute bottom-3 left-0  space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
        <Link to="/clients">Volver</Link>
      </div>
    </div>
  );
}

export default SideBarDetail;
