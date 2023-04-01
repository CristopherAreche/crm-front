import React from "react";

const FilterTop = () => {
  return (
    <section className="text-white text-bold flex justify-evenly w-full bg-base-light/40 items-center py-2 shadow-md">
      <button className="rounded-xl py-1 px-3 bg-[rgb(44,56,96)] text-sm font-medium">
        A - Z
      </button>
      <button className="rounded-xl py-1 px-3 bg-[#2c3860] text-sm font-medium">
        Z - A
      </button>
      <button className="rounded-xl py-1 px-3 bg-[#2c3860] text-sm font-medium">ENC</button>
      <button className="rounded-xl py-1 px-3 bg-[#2c3860] text-sm font-medium">ENI</button>
      <button className="rounded-xl py-1 px-3 bg-[#2c3860] text-sm font-medium">VIP</button>
    </section>
  );
};

export default FilterTop;
