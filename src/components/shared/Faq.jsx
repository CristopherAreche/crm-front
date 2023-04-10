import { RiArrowDropRightLine } from 'react-icons/ri';


const Faq = ({question, answer, isDrop, onDrop}) => {

  return (
    <article className={`${isDrop.isOpen ? 'lg:h-48 h-auto' : 'h-14'} transition-all duration-200 bg-gray-200 border-secondary border-2 px-4 shadow-md rounded-md lg:w-[52rem] w-full  pb-2 cursor-pointer`} onClick={onDrop}>
      <div className="flex gap-x-2 items-center">
        <RiArrowDropRightLine className={`text-5xl text-secondary cursor-pointer ${isDrop.isOpen && 'rotate-90'} transition-all`} />
        <p className="text-base-light text-lg font-medium">{question}</p>
    
      </div>
        <p className={`text-base-light/80  px-10 block ${!isDrop.isOpen ? ' hidden' : 'block' } transition-opacity`}>
            {answer}
          </p>
    </article>
  )
}

export default Faq