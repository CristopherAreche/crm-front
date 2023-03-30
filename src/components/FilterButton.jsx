import React from "react";

const FilterButton = () => {
  return (
    <button className="group col-start-6 col-end-8 relative flex justify-center items-center bg-blue-500 border focus:outline-none shadow text-white rounded focus:ring ring-gray-200">
      <p className="px-4 w-full">Filter</p>
      <span className="border-l p-2">
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
          <li className="px-4 py-1 hover:bg-gray-100 border-b"> A - Z</li>
          <li className="px-4 py-1 hover:bg-gray-100 border-b"> Z - A</li>
        </ul>
      </div>
    </button>
  );
};

export default FilterButton;
