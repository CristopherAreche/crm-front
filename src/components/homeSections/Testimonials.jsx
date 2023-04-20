import React from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

const Testimonials = () => {
  return (
    <section className=" h-[100vh]  justify-center items-center flex flex-col gap-y-16">
      <h3 className="text-4xl mb-10 lg:text-6xl lg:w-[64rem]  text-center font-extrabold text-white">
        Descubre por qué <span className="text-secondary">nuestra CRM</span>{" "}
        puede ser tu mejor opcion{" "}
      </h3>
      <section className="flex items-center justify-center gap-x-4 lg:gap-x-12">

        <article className="bg-gray-100 flex items-center flex-col rounded-xl relative w-64 h-auto lg:h-56 lg:w-[48rem] border-t-[10px] border-secondary">
          <img
            src="https://img.freepik.com/foto-gratis/hombre-sonriente-relajante-al-aire-libre_23-2148739334.jpg?w=360&t=st=1681006454~exp=1681007054~hmac=34948ef6a07c938956058f17df2814b7d7b80f65f29b624a16a6177fdc3f88fd"
            alt="persona sonriendo"
            className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-full shadow-md absolute -top-12"
          />
          <p className=" pt-16 pb-2 lg:pb-0 lg:pt-24 w-48 trauncate lg:w-[32rem] text-center text-xl font-bold text-base-light">
            "Hace unos meses implementamos un CRM de ventas en nuestra empresa y ha sido una verdadera revolución en nuestra forma de gestionar clientes.”
          </p>
        </article>
        
      </section>
    </section>
  );
};

export default Testimonials;
