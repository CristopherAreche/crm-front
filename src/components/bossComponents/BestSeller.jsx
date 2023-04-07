import React from "react";

const data = [
  { name: "Cliente 1", sales: 100 },
  { name: "Cliente 2", sales: 200 },
  { name: "Cliente 3", sales: 300 },
  { name: "Cliente 4", sales: 400 },
  { name: "Cliente 5", sales: 500 },
  { name: "Cliente 6", sales: 600 },
  { name: "Cliente 7", sales: 700 },
  { name: "Cliente 8", sales: 800 },
  { name: "Cliente 9", sales: 900 },
  { name: "Cliente 10", sales: 1000 },
];

const sortedData = data.sort((a, b) => b.sales - a.sales);

const BestSeller = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-white">
          <thead className="bg-base">
            <tr>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Ventas</th>
            </tr>
          </thead>
          <tbody className="bg-base/60">
            {sortedData.map((item, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="px-4 py-2 text-center">{item.name}</td>
                <td className="px-4 py-2 text-center">{item.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BestSeller;
