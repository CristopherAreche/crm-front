function ActivitiesFilter() {
  return (
    <div className=" flex justify-center items-center col-start-8 col-end-10 row-start-5">
      <button className="h-10 w-full group  relative flex justify-center items-center  border focus:outline-none shadow text-white rounded focus:ring ring-gray-200 bg-cyan-950">
        <p className="px-8">Filter</p>
        <span className=" p-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </span>
        <div className="text-black hidden group-focus:block absolute top-full min-w-full w-max bg-white shadow-md mt-1 rounded transition">
          <ul className="text-left border rounded">
            <li className="px-4 py-1 hover:bg-gray-100 border-b"> Llamadas</li>
            <li className="px-4 py-1 hover:bg-gray-100 border-b"> Correos</li>
          </ul>
        </div>
      </button>
    </div>
  );
}

export default ActivitiesFilter;
