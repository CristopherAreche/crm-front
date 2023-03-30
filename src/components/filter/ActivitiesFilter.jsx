function ActivitiesFilter() {
  return (
    <div className="bg-cyan-950 font normal text-white dark:bg-green-900 w-fit h-8 py-px pl-2 flex justify-around ">
      <label className=" items-center">
        Tipo de actividad:
        <select className=" bg-cyan-950 pl-2 text-white dark:bg-green-900">
          <option value="All">All...</option>
          <option value="Correo">Correo</option>
          <option value="Llamada">Llamada</option>
        </select>
      </label>
    </div>
  );
}

export default ActivitiesFilter;
