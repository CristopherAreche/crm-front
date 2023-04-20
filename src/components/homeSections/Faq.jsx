import { useState } from "react";
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
      "Puedes usar el CRM sin costo por 7 días sin limitación en las funcionalidades.  Sin límite de usuarios o de datos de clientes. \nTermindado el período de prueba puedes acceder al servicio, por $99 USD mensuales",
    dropKey: "second_faq",
  },
  {
    question: "¿El sistema CRM es adecuado para mi empresa?",
    answer:
      "Ya sea que tengas una pyme o una gran empresa, la plataforma CRM responde a tus necesidades. No importa el tamaño de tu empresa cumplimos con funcionalidades para automatización de marketing y dinamico flujo de trabajo.",
    dropKey: "third_faq",
  },
  {
    question: "¿El sistema CRM es accesible para todos los dispositivos moviles?",
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
    <section name="faq" className=" flex-col gap-y-4  items-center flex ">
      <main className=" pt-16 flex flex-col gap-y-6">
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
  );
};

export default FAQ;
