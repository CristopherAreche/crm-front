import React from "react";

const FilterTop = () => {
  return (
    <section className="text-white text-bold flex justify-evenly w-full bg-base-light/40 items-center py-2 rounded-md">
      <button className="rounded-xl py-2 px-3 bg-[#2c3860]">
        A - Z
      </button>
      <button className="rounded-xl py-2 px-3 bg-[#2c3860]">
        Z - A
      </button>
      <button className="rounded-xl py-2 px-3 bg-[#2c3860]">ENC</button>
      <button className="rounded-xl py-2 px-3 bg-[#2c3860]">ENI</button>
      <button className="rounded-xl py-2 px-3 bg-[#2c3860]">VIP</button>
    </section>
  );
};

export default FilterTop;
