import { FaStar } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from "react-router-dom";
import {RiArrowLeftLine} from 'react-icons/ri'
import spotlight from '../assets/svg/Spotlight1.svg'
import spotlight2 from '../assets/svg/Spotlight3.svg'


const ModalSuccessFeedback = () => {
    return (
        <h2>modalSuccessFeedback</h2>
    )
}

const StartFeedback = () => {

  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  return (
    <main className='bg-base text-white h-screen flex justify-center pt-12'>
        <div className="absolute top-4 left-4 z-40">
          <Link
            to="/"
            className="flex gap-x-1  text-light items-center font-medium group hover:text-white/90 transition-colors"
          >
            <RiArrowLeftLine className="text-2xl group-hover:-translate-x-1 transition-transform" />
            Volver atras
          </Link>
        </div>
        <section className='z-20 flex flex-col   items-center'>
            <header className='flex flex-col gap-y-1'>
                <h2 className='text-6xl font-extrabold text-white'>Danos tu <span className='bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text'>feedback</span></h2>
                <p className='text-lg font-medium text-light/80'>Como calificaria tu experiencia con el vendedor?</p>
            </header>
            <section className='mt-4 mb-2'>
                <img src='https://img.freepik.com/fotos-premium/guapo-hipster-barbudo-cruzando-brazos-mientras-mira-confiado-camara-joven-feliz-expresion-fondo-color-tono-suave-personas-normales-concepto-maqueta-personas_146482-5063.jpg' alt='foto vendedor' className='w-40 h-40 object-cover rounded-full'/>
            </section>
            <section className='flex gap-x-4 items-center mb-4'>
                {[...Array(5)].map((star, i) => {

                    const ratingValue = i + 1

                    return <label>
                        <input type='radio' name='rating' id={ratingValue} className='opacity-0 absolute' onClick={() => setRating(ratingValue)}
                    
                        />
                            <FaStar size={50} className={`${ratingValue <= (hover || rating) ? 'text-yellow-300' : 'text-gray-500'} cursor-pointer`}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}    
                            />
                    </label>   
                })
                }
            </section>
            <div className='flex flex-col items-start gap-y-1 w-full'>
                <label for="message" class="block mb-2 text-sm font-medium text-gray-300">¿Quieres compartir más sobre el vendedor?</label>
                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm focus:border outline-none focus:border-secondary bg-base-light/60 rounded-lg resize-none text-white mb-2" placeholder="Escribe una opinión mas detallada sobre el vendedor..."></textarea>
                <button className='iphone12:text-center
                bg-gradient-to-r from-primary to-secondary px-2 py-1 rounded-xl text-white font-medium text-lg  hover:scale-[1.03] transition-all '>Publicar feedback</button>
            </div>       
        </section>
        <img src={spotlight} alt='glows light' className='absolute top-0 left-0 z-[10] opacity-70'/>
        <img src={spotlight2} alt='glows light' className='absolute -bottom-0 right-0 z-[10] opacity-70'/>
        <ModalSuccessFeedback />
    </main>
  )
}

export default StartFeedback