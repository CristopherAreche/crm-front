import React from "react";

const FilterTop = () => {
  return (
    <div className="text-white text-bold flex justify-evenly p-[0.6em] w-[80%] bg-[#24314c] rounded-full">
      <button className="h-[2em] rounded-full bg-[#2c3860] w-[8em]">
        A - Z
      </button>
      <button className="h-[2em] rounded-full bg-[#2c3860] w-[8em]">
        Z - A
      </button>
      <button className="h-[2em] rounded-full bg-[#2c3860] w-[8em]">ENC</button>
      <button className="h-[2em] rounded-full bg-[#2c3860] w-[8em]">ENI</button>
      <button className="h-[2em] rounded-full bg-[#2c3860] w-[8em]">VIP</button>
    </div>
  );
};

export default FilterTop;
