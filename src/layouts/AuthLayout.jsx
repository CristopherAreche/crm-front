import { Link, Outlet, useLocation } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";

const AuthLayout = () => {
  const { pathname } = useLocation();

  return (
    <main className="min-h-screen bg-base text-white flex ">
      <section className="hidden lg:block bg-gradient-to-r from-primary to-secondary flex-1 rounded-tr-md rounded-br-md">
        <div className="absolute top-4 left-4">
          <Link
            to="/"
            className="flex gap-x-1 items-center font-medium group hover:text-white/90 transition-colors"
          >
            <RiArrowLeftLine className="text-2xl group-hover:-translate-x-1 transition-transform" />
            Volver atras
          </Link>
        </div>
        <article className="flex flex-col  justify-center w-[28rem] 2xl:w-[32rem] mx-auto h-full">
          <div className="bg-base/40 rounded-md px-8 py-4 2xl:px-12 2xl:py-8">
            <h1 className="text-5xl 2xl:text-6xl font-bold mb-4 ">
              {pathname.includes("register")
                ? "Registrate y gestiona con nuestra"
                : "Descubre comó nuestra"}{" "}
              <span className="bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text">
                CRM
              </span>{" "}
              {pathname.includes("register") ? "" : "puede ayudar a tu negocio"}
            </h1>
            <p className="font-medium text-lg text-white/90">
              {pathname.includes("register")
                ? "Controla tu empresa desde cualquier lugar con nuestra plataforma de CRM"
                : "La productividad de tu equipo es importante para nosotros"}
            </p>
          </div>
        </article>
      </section>
      <main className="flex-1 z-20">
        <Outlet />
      </main>
      <div className="absolute top-0 right-0 z-[10] opacity-70">
        <svg
          width="783"
          height="388"
          viewBox="0 0 783 388"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_29_36)">
            <rect
              width="478"
              height="366"
              transform="matrix(-1 0 0 1 583 -178)"
              fill="#87D0D0"
              fillOpacity="0.27"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_29_36"
              x="-95"
              y="-378"
              width="878"
              height="766"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_29_36"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </main>
  );
};

export default AuthLayout;
