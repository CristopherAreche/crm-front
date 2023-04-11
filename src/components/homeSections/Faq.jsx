import { useState } from "react";
import { Link } from "react-router-dom";
import Faq from "../shared/Faq";

const faqs = [
  {
    question: "¿Qué es el software de CRM?",
    answer:
      "El CRM es un software de gestión de la relación con los clientes (o Customer Relationship Management). Es una poderosa herramienta que ayuda a las empresas a organizar y gestionar la relación con sus clientes desde una plataforma centralizada y fácil de usar. Al hacer seguimiento de vendedores y crear una base de datos completa con la actividad de sus clientes, las empresas pueden entender dónde se encuentran en el proceso de compra de cada cliente.",
    dropKey: "first_faq",
  },
  {
    question: "¿Cuánto cuesta el sistema CRM?",
    answer:
      "Puedes usar el CRM sin costo. Incluye hasta un millón de contactos, sin límite de usuarios o de datos de clientes. Si buscas características de CRM más avanzadas, puedes encontrarlas en nuestros productos prémium. Aprende más sobre las características y recibe más información sobre el precio aquí.",
    dropKey: "second_faq",
  },
  {
    question: "¿El sistema CRM es adecuado para mi empresa?",
    answer:
      "Ya sea que tengas una pyme o una gran empresa, la plataforma CRM responde a tus necesidades. Puedes utilizar el software gratis o solicitar una demostración aprender más sobre las características prémium para grandes empresas como flujos de trabajo (workflows) o funcionalidades para automatización de marketing.",
    dropKey: "third_faq",
  },
  {
    question: "¿El sistema CRM es accesible para todos los dispositivos?",
    answer:
      "¡Sí! Nuestro sistema CRM está en todos los dispositivos web del mercado para que puedas aprovechar esta herramienta al máximo. Esta es una ventaja especial cuando se compara con otros ejemplos de software CRM.",
    dropKey: "four_faq",
  },
];

const FAQ = () => {
  const [dropState, setDropState] = useState([
    { id: "first_faq", isOpen: false },
    { id: "second_faq", isOpen: false },
    { id: "third_faq", isOpen: false },
    { id: "four_faq", isOpen: false },
  ]);

  const handleToggleDrop = (id) => {
    setDropState(
      dropState.map((faq) => {
        if (faq.id === id) {
          return { ...faq, isOpen: !faq.isOpen };
        } else {
          return faq;
        }
      })
    );
  };

  return (
    <>
      <section className=" justify-center items-center flex flex-col gap-y-6 lg:gap-y-10 pb-12">
        <h3 className="w-full text-3xl lg:text-5xl lg:w-[40rem]  text-center font-extrabold text-white">
          El mejor software de{" "}
          <span className="bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text">
            CRM
          </span>{" "}
          para toda tu empresa
        </h3>
        <p className="text-lg text-gray-200/90 text-center lg:text-start">
          ¿Qué estas esperando? usa este CRM, ideal para todos los equipos en tu
          empresa.
        </p>
        <Link
          to="/authentication/register"
          className="bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-xl text-white font-medium text-lg lg:text-2xl hover:scale-[1.03] transition-all flex gap-x-1 items-center"
        >
          Empezar Ahora
        </Link>
      </section>

      <section
        name="faq"
        className="h-[100vh] pt-16 flex-col gap-y-4  items-center flex "
      >
        <main className="pt-28 flex flex-col gap-y-6">
          <h3 className="text-4xl  text-center font-extrabold text-white">
            Preguntas frecuentes
          </h3>
          {faqs.map((f) => (
            <Faq
              key={f.dropKey}
              question={f.question}
              answer={f.answer}
              onDrop={() => handleToggleDrop(f.dropKey)}
              isDrop={dropState.find((faq) => faq.id === f.dropKey)}
            />
          ))}
        </main>
      </section>
    </>
  );
};

export default FAQ;
