import { useDispatch } from "react-redux";
import { activitiesFilter } from "../app/features/clientActivitiesSlice";

function ActivitiesFilter() {

  const dispatch = useDispatch()


  const handleChange = ({target : {value}}) => {
    dispatch(activitiesFilter(value))
  }



  return (
  <div className="flex flex-col lg:flex-row gap-6">
    <div className="flex flex-col lg:flex-row gap-x-2 items-center">
        <p className="text-gray-300 text-sm font-medium">Metodo:</p>
        <select
          name=""
          id=""
          className="bg-base-light/60 text-light px-2 rounded-md outline-none "
          onChange={(e) => handleChange(e)}
        >
          <option value="todos" className="text-zinc-900">Todos</option>
          <option value="correos" className="text-zinc-900">Correos</option>
          <option value="llamadas" className="text-zinc-900">Llamadas</option>
        </select>
      </div>
      <div className="flex flex-col lg:flex-row gap-x-2 items-center">
        <p className="text-gray-300 text-sm font-medium">Estado:</p>
        <select
          name=""
          id=""
          className="bg-base-light/60 text-light px-2 rounded-md outline-none "
          onChange={(e) => handleChange(e)}
        >
          <option value="todos" className="text-zinc-900">Todos</option>
          <option value="concretados" className="text-zinc-900">Concretados</option>
          <option value="pendientes" className="text-zinc-900">Pendientes</option>
        </select>
      </div>
  </div>
  );
}

export default ActivitiesFilter;
