import {
  RiCopyrightLine,
  RiGlobalLine,
  RiHonourLine,
  RiMailLine,
  RiPhoneLine,
  RiStarSmileLine,
} from "react-icons/ri";

const CompanyInformationView = ({ data }) => {
  return (
    <section className="col-span-4 flex flex-col gap-y-6">
      <header className="flex flex-col gap-y-4">
        <h4 className="text-light font-medium text-2xl lg:text-4xl">
          Informacion de la Compañia
        </h4>
        <p className="text-light/80 text-sm">
          Gestiona tu información de compania general, incluye numero de
          telefono y email para que puedas ser contactado
        </p>
      </header>
      <main className="grid grid-cols-2 gap-4">
        <article className="bg-base-light/30 py-4 px-4 shadow-md rounded-md">
          <header className="flex items-center justify-between mb-2">
            <p className="text-light text-base lg:text-lg font-medium">Nombre</p>
            <RiGlobalLine className="text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full" />
          </header>
          <p className="text-light/80 ">{data.company}</p>
        </article>
        <article className="bg-base-light/30 py-4 px-4 shadow-md rounded-md">
          <header className="flex items-center justify-between mb-2">
            <p className="text-light text-base lg:text-lg font-medium">Descripcion</p>
            <RiHonourLine className="text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full" />
          </header>
          <p className="text-light/80 ">{data.company_description}</p>
        </article>
        <article className="bg-base-light/30 py-4 px-4 shadow-md rounded-md">
          <header className="flex items-center justify-between mb-2">
            <p className="text-light text-base lg:text-lg font-medium">
              Registro Comercial
            </p>
            <RiCopyrightLine className="text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full" />
          </header>
          <p className="text-light/80 ">{data.commercial_register}</p>
        </article>
        <article className="bg-base-light/30 py-4 px-4 shadow-md rounded-md">
          <header className="flex items-center justify-between mb-2">
            <p className="text-light text-lg font-medium">Telefono</p>
            <RiPhoneLine className="text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full" />
          </header>
          <p className="text-light/80 ">{data.phone}</p>
        </article>
        <article className="bg-base-light/30 py-4 px-4 shadow-md rounded-md">
          <header className="flex items-center justify-between mb-2">
            <p className="text-light text-base lg:text-lg font-medium">Correo electronico</p>
            <RiMailLine className="text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full" />
          </header>
          <p className="text-light/80 lg:w-auto w-28 truncate">{data.email}</p>
        </article>
      </main>
    </section>
  );
};

export default CompanyInformationView;
