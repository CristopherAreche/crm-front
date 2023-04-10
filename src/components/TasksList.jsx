import {RiTimeLine, RiCheckboxCircleLine, RiDeleteBin6Line, RiCheckboxBlankLine, RiCheckboxLine} from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, toggleStateTask } from '../app/features/tasksSlice'


const TasksList  = () => {

    const tasks = useSelector((state) => state.tasks.tasks)
    const dispatch = useDispatch()

    const getData = (data) => {
        const fecha = new Date(data);
        const anio = fecha.getFullYear().toString();
        const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
        const dia = fecha.getDate().toString().padStart(2, "0");
        return `${dia}/${mes}/${anio}`
    }

    const onDelete = (id) => dispatch(deleteTask(id))
    const onToggle = (id) => dispatch(toggleStateTask(id))

    return (
        <section className='w-full lg:pr-12'>
            <header className='flex justify-between w-full bg-base-light/30 px-4 py-2 rounded-tr-md rounded-tl-md shadow-md'>
              <div className='flex flex-col gap-y-2'>
                <h3 className='text-light text-2xl font-bold'>Tus tareas</h3>
                <p className='text-lg text-light'>5 tareas, <span className='text-light/60 '>procede a resolverlas</span></p>
              </div>
              <div className='grid grid-cols-2 gap-y-1 gap-x-3 text-center'>
                <p className='text-3xl font-extrabold text-light'>2</p>
                <p className='text-3xl font-extrabold text-light'>3</p>
                <p className='text-light/60'>Hechas</p>
                <p className='text-light/60'>Pendientes</p>
                
              </div>
            </header>
            <section className='bg-base-light/30 grid grid-cols-1   px-4 gap-y-4'>
                <header className='grid grid-cols-5   text-light/80 font-medium text-sm py-2 border-b border-light/10 gap-x-6'>
                        <p>Descripcion</p>
                        <p>Estado</p>
                        <p>Vencimiento</p>
                </header>
                <section className='flex flex-col gap-y-2 items'>
                {
                    tasks.map(task => (
                        <article key={task.id} className='grid grid-cols-5  gap-x-6 text-sm border-b border-light/10 pb-2 w-full items-center '>
                            <h4 className='text-gray-200 font-medium w-20 truncate'>{task.description}</h4>
                            <p className={`${task.state === 'pendiente' ? 'text-blue-400'  : 'text-green-400'} capitalize flex gap-x-2 items-center`}>{task.state === 'pendiente' ? <RiTimeLine className='text-lg'/> : <RiCheckboxCircleLine className='text-lg'/>} {task.state}</p>
                            <p className='text-xs font-medium bg-base-light/40 p-1 rounded-full text-center text-gray-300'>{getData(task.due_date)}</p>
                            {task.state === 'pendiente' ? <RiCheckboxBlankLine className='text-xl cursor-pointer w-full text-center  text-blue-400' onClick={() => onToggle(task.id)}/> : <RiCheckboxLine className='text-xl cursor-pointer w-full text-center  text-green-400' onClick={() => onToggle(task.id)}/>}
                            <RiDeleteBin6Line className='text-start text-xl text-red-400 cursor-pointer' onClick={() => onDelete(task.id)}/>
                        </article>
                    ))
                }
                </section>
            
            </section>
        </section>
    )
}

export default TasksList