function ActivitiesFilter() {
  return (
    <div className="bg-gray-600 w-1/4 h-8 p-px">
      <label className=" text-lg font-semibold items-cente">
        Tipo de actividad:
        <select className="">
          <option value="All">All...</option>

          <option value="Correo">Correo</option>
          <option value="Llamada">Llamada</option>
        </select>
      </label>
    </div>
  );
}

export default ActivitiesFilter;
