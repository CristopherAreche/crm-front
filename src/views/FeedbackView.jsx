import StartFeedback from "../components/StartFeedback";
import { Link } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";
import { useParams } from "react-router-dom";

import LightsSvg from "../components/LightsSvg";
const FeedbackView = () => {
  const { salesmanId } = useParams();
  return (
    <main className="bg-base text-white h-screen flex justify-center pt-12">
      <div className="absolute top-4 left-4 z-40">
        <Link
          to="/"
          className="flex gap-x-1  text-light items-center font-medium group hover:text-white/90 transition-colors"
        >
          <RiArrowLeftLine className="text-2xl group-hover:-translate-x-1 transition-transform" />
          Volver atras
        </Link>
      </div>
      <section className="z-20 flex flex-col   items-center">
        <header className="flex flex-col gap-y-1">
          <h2 className="text-6xl font-extrabold text-white">
            Danos tu{" "}
            <span className="bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text">
              feedback
            </span>
          </h2>
          <p className="text-lg font-medium text-light/80">
            Como calificarias la atención del vendedor?
          </p>
        </header>
        <section className="mt-4 mb-2">
          <img
            src="https://img.freepik.com/fotos-premium/guapo-hipster-barbudo-cruzando-brazos-mientras-mira-confiado-camara-joven-feliz-expresion-fondo-color-tono-suave-personas-normales-concepto-maqueta-personas_146482-5063.jpg"
            alt="foto vendedor"
            className="w-40 h-40 object-cover rounded-full"
          />
        </section>
        <StartFeedback salesmanId={salesmanId} />
        <LightsSvg />
      </section>
    </main>
  );
};

export default FeedbackView;
