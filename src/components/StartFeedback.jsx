import { FaStar } from 'react-icons/fa'
import { useState } from 'react'

const ModalSuccessFeedback = () => {
  return (
      <h2>modalSuccessFeedback</h2>
  )
}

const StartFeedback = () => {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  return (
    <>
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
      <form className='flex flex-col items-start gap-y-1 w-full'>
        <label for="message" class="block mb-2 text-sm font-medium text-gray-300">¿Quieres compartir más sobre el vendedor?</label>
        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm focus:border outline-none focus:border-secondary bg-base-light/60 rounded-lg resize-none text-white mb-2" placeholder="Escribe una opinión mas detallada sobre el vendedor..."></textarea>
        <button className='iphone12:text-center
          bg-gradient-to-r from-primary to-secondary px-2 py-1 rounded-xl text-white font-medium text-lg  hover:scale-[1.03] transition-all '>Publicar feedback</button>
      </form>   
    </>
  )
}

export default StartFeedback