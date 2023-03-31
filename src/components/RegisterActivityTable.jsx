
const RegisterActivityTable = () => {
  return (
    <section className="w-auto overflow-x-auto lg:min-w-full   overflow-hidden mb-4 text-white">
      <table className="min-w-full text-center text-sm font-regular shadow-md rounded-sm   border-separate ">
        <thead
          className=" font-medium text-white  dark:bg-base-light/30 rounded-md">
          <tr>
            <th scope="col" className=" px-6 py-4">#</th>
            <th scope="col" className=" px-6 py-4">Descripcion</th>
            <th scope="col" className=" px-6 py-4">Fecha</th>
          </tr>
        </thead>
        <tbody className=" dark:border-light dark:bg-base-light/60">
          <tr className="border-b dark:border-neutral-500">
            <td className="whitespace-nowrap  px-6 py-4 font-medium">1</td>
            <td className="whitespace-nowrap  px-6 py-4  font-medium">Gaspar</td>
            <td className="whitespace-nowrap  px-6 py-4">100</td>
          </tr>
          <tr className="border-b dark:border-neutral-500">
            <td className="whitespace-nowrap  px-6 py-4 font-medium">2</td>
            <td className="whitespace-nowrap  px-6 py-4 font-medium">Cristopher</td>
            <td className="whitespace-nowrap  px-6 py-4">100</td>
         
          </tr>
          <tr className="border-b dark:border-neutral-500">
            <td className="whitespace-nowrap  px-6 py-4 font-medium">3</td>
            <td className="whitespace-nowrap  px-6 py-4 font-medium">Macarena</td>
            <td className="whitespace-nowrap  px-6 py-4">100</td>
    
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default RegisterActivityTable;
