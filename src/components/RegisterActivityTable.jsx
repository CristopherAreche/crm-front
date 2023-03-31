import React from "react";

const RegisterActivityTable = () => {
  return (
    <div className="bg-[#2a3652] flex flex-col w-[40em]">
      <table className="table-auto rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-[#151f3a]">#</th>
            <th className="px-4 py-2 bg-[#151f3a]">Descripción</th>
            <th className="px-4 py-2 bg-[#151f3a]">Fecha</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">...</td>
            <td className="border px-4 py-2">2022-03-15</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2</td>
            <td className="border px-4 py-2">...</td>
            <td className="border px-4 py-2">2022-03-18</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">3</td>
            <td className="border px-4 py-2">...</td>
            <td className="border px-4 py-2">2022-03-19</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">4</td>
            <td className="border px-4 py-2">...</td>
            <td className="border px-4 py-2">2022-03-19</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">5</td>
            <td className="border px-4 py-2">...</td>
            <td className="border px-4 py-2">2022-03-19</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RegisterActivityTable;
