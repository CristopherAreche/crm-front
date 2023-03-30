import React from "react";

const SearchBar = () => {
  return (
    <div className=" row-start-3 col-start-5 col-end-9 flex items-center justify-center">
      <div className=" border-2 border-black flex w-96 rounded bg-white">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
          className="w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none"
        />
      </div>
      <button className="m-2 rounded bg-blue-500 px-4 py-2 text-white">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
