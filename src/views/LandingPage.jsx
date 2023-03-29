import imgLanding from '../assets/imgLanding.png'
import spotlight1 from '../assets/svg/Spotlight1.svg'
import spotlight2 from '../assets/svg/Spotlight2.svg'
const LandingPage = () => {
  return (
    <main className="bg-base h-screen overflow-hidden px-10 lg:px-20 ">
      {/* TODO : Componetizar Landing */}
      {/* Seccion Header */}
      <header className="flex py-4 lg:py-6 items-center justify-between ">
        <h2 className="text-xl text-white font-bold tracking-widest hover:text-light transition-colors cursor-pointer z-10">
          LOGO
        </h2>
        <div className="lg:hidden block z-[2]">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" hover:scale-105 cursor-pointer p-1 box-content transition-all"
          >
            <path
              d="M9 16.5H21"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 7.5H21"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 13.5H21"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 10.5H21"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <button className="text-white font-medium hover:text-light transition-colors">LOG IN</button>
        </div>
      </section>
    </header>
    {/* Seccion Hero */}
    <section className='flex flex-col lg:flex-row items-center justify-center h-screen pt-16  lg:pt-0'>
      {/* Hero Info */}
      <section className='text-white flex flex-col gap-y-10 items-start  w-full lg:w-auto lg:h-96 '>
      {/* Info Principal */}
       <div>
        <h1 className='text-light text-4xl font-extrabold uppercase w-96 lg:w-[32rem] mb-3'>Optimiza tu empresa con nuestra <span className='bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text'>CRM</span></h1>
          <p className='text-light opacity-90 text-lg font-medium w-72 lg:w-96'>
            Registrate y Gestiona tus clientes de manera más efectiva con nuestras herramientas.
          </p>
       </div>
      {/* Botones */}
       <div className='flex gap-x-4 z-[2]'>
        <button className='bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-xl text-white font-medium text-xl lg:text-2xl hover:scale-[1.03] transition-all '>Empezar Ahora</button>
          <button className='border-2 border-secondary rounded-xl p-1 px-4 text-xl lg:text-2xl hover:scale-[1.03] hover:text-white transition-all text-light font-medium '>Descubre mas</button>
       </div>
      </section>
      {/* Hero Image */}
      <img src={imgLanding} className='w-96 lg:w-[26rem]' alt='3D icon of computer'/>
    </section>

      {/* Luces */}
      <img
        src={spotlight1}
        alt="lights glows"
        className="absolute top-0 left-0 opacity-80 z-[1]"
      />
      <img
        src={spotlight2}
        alt="lights glows"
        className="absolute bottom-0 right-0 opacity-80"
      />
    </main>
  );
};

export default LandingPage;
