import tasksImage from '../assets/tasksImage.png'
import productImage from '../assets/productImage.png'
import {RiTimeLine, RiArrowDropRightLine, RiArrowDropLeftLine, RiRefundLine} from 'react-icons/ri'
import { useAuth0 } from "@auth0/auth0-react";

const itemsLastesProducst = [
  {
    source : 'https://img.freepik.com/foto-gratis/fundacion-publicitaria-surtido-envases_23-2149511273.jpg?w=740&t=st=1680644972~exp=1680645572~hmac=6370e6c4ae1a15f9f845d3b07c3d98f6900f71b8f1bdfdfbb9d38ad3fcebe407',
    product : 'Perfumes piel utimate',
    stock : '4',
    lastest : '1'
  },
  {
    source : 'https://img.freepik.com/foto-gratis/dispositivo-digital-inalambrico-auriculares-rosa_53876-96804.jpg?w=740&t=st=1680645047~exp=1680645647~hmac=325e19460bfd4bd3ad4e2d792125b391fee5a4599ad435d5329c3f0a35993fcf',
    product : 'Auriculares rojo prime',
    stock : '9',
    lastest : '3'
  },


]

const itemsResume = [
  {
    title : 'Clientes' ,
    quanqity : 26,
  },
  {
    title : 'Productos' ,
    quanqity : 37,
  },
  {
    title : 'Vips' ,
    quanqity : 9
  },
  {
    title : 'Habi' ,
    quanqity : 23,
  },
  {
    title : 'Desha' ,
    quanqity : 3,
  }
]


const VendedorResumen = () => {
  const {user} = useAuth0();
  return (
    <section className="py-6 lg:pr-4 ">
        {/* Seccion Top */}
        <section className=" flex flex-col gap-y-4  lg:items-start mb-12">
             <div className='flex flex-col lg:flex-row lg:justify-between items-center w-full gap-y-4'>
              <h2 className="text-4xl font-bold tracking-wider text-light/90 text-center lg:text-start">Buenos dias, <span className='bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text'>{user?.name} </span>
              </h2>
              <div className='flex gap-x-4'>
                {
                  itemsResume.map(item => (
                    <div key={item.title} className='flex flex-col gap-y-2 items-center'>
                      <p className={`bg-base-light/40 py-2 px-3 text-sm font-medium rounded-full`}>{item.quanqity}</p>
                      <p className='text-sm  font-medium text-light/80'>{item.title}</p>
                    </div>
                  ))
                }
              </div>
             </div> 
              <p className='text-light/90 text-center lg:text-start'>Aqui podras ver, seguir tus actividades y encontrar tu proceso.</p>
            {/* Section Resume */}
            <section className=' flex flex-wrap gap-3 lg:justify-start lg:flex-nowrap  justify-center lg:gap-4 '>
             <div className="bg-base-light/30 px-4 rounded-md flex flex-col items-center justify-center gap-y-4 ">
                <RiRefundLine className='text-4xl text-light'/>
                <p className='text-light font-bold text-4xl'>$32,435</p>
                <p className='text-sm text-light/70'>Balance en total</p>
              </div>
              <div className="bg-base-light/30 px-4 rounded-md flex flex-col items-center justify-center gap-y-4">
                <RiRefundLine className='text-4xl text-light'/>
                <p className='text-light font-bold text-4xl'>$32,435</p>
                <p className='text-sm text-light/70'>Balance en total</p>
              </div>
              <div className="bg-base-light/30 px-4 rounded-md pb-2 text-center">
                <img src={tasksImage} className='lg:h-40 lg:w-40 h-20 w-20' alt='lol'/>
                <p className='text-light font-medium text-sm'>Progreso semanal</p>
                <p className='text-sm text-light/70'>4/5 tareas completadas</p>
              </div>
              <div className="bg-base-light/30 px-4 rounded-md pb-2 text-center">
                <img src={tasksImage} className='lg:h-40 lg:w-40 h-20 w-20' alt='lol'/>
                <p className='text-light font-medium text-sm'>Progreso semanal</p>
                <p className='text-sm text-light/70'>4/5 tareas completadas</p>
              </div>
              <div className="hidden lg:block bg-base-light/30 px-4 rounded-md pb-2 text-center">
                <img src={productImage} className='h-40 w-40' alt='lol'/>
                <p className='text-light font-medium text-sm text-center w-30'>En Promocion</p>
                <p className='text-sm text-light/70'>5 productos</p>
              </div>
            </section>
       
        </section>

        {/* Seccion Bottom */}
        <section className='grid lg:grid-cols-2 gap-8 lg:gap-x-12'>
          {/* Section Products Promotional */}
          <section className=' flex flex-col gap-y-2  items-center'>
            <section className='flex justify-between w-full'>
              <RiArrowDropLeftLine className='text-3xl text-secondary hover:bg-base-light/50 transiti rounded-full'/>
              <h5 className='font-medium text-light/90'>Productos en promocion</h5>
              <RiArrowDropRightLine className='text-3xl text-secondary hover:bg-base-light/50 transiti  rounded-full'/>
            </section>
            {/* Section Cards */}
            <div className='flex justify-evenly lg:justify-between w-full '>
              <img src='https://img.freepik.com/foto-gratis/zapatos-bebe_1203-7009.jpg?w=360&t=st=1680650793~exp=1680651393~hmac=ac695445036e91238ccb67c2d1ed5e5100576e9d319ad37e1f3f24391e29f9a7' className='lg:w-32 lg:h-44 h-32 object-cover rounded-md' alt='product'/>
              <img src='https://img.freepik.com/foto-gratis/hermosa-foto-elegante-silla-gris-aislado-sobre-fondo-blanco_181624-25232.jpg?w=360&t=st=1680650835~exp=1680651435~hmac=2e154930289b3314b0b314e28ffb44108368cc377349e1b3521637ee9b676e06' className='lg:w-32 lg:h-44 h-32 object-cover rounded-md' alt='product'/>
              <img src='https://img.freepik.com/psd-premium/mano-sujetando-percha-camiseta-maqueta-bolsillo_23-2149405779.jpg?w=360' className='lg:w-32 lg:h-44 h-32 object-cover rounded-md' alt='product'/>
            </div>
          
          </section>
           {/* Section Lastest Products */}
           <section className='px-6'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='text-light/95 font-medium'>Sus ultimos productos</h3>
              <p className='text-xs font-medium text-light/80'>Ver todos</p>
            </div>
            {/* Lastest Products Cards */}
            <section className='flex flex-col gap-y-5'>
              {
                itemsLastesProducst.map(item => (
                  <article key={item.product} className='flex items-center justify-between bg-base-light/30 pr-2 shadow-md rounded-md'>
                    <div className='flex items-center gap-x-2'>
                      <img src={item.source} className='w-16 h-16 object-cover rounded-tl-md rounded-bl-md' alt='product'/>
                      <div>
                        <p className='text-sm font-medium text-light/90'>{item.product}</p>
                        <p className='text-xs text-light/80'>{item.stock} en stock</p>
                      </div>

                    </div>
                    <p className='flex gap-x-1 items-center text-sm font-medium text-secondary'><RiTimeLine/> {item.lastest}h</p>
                  </article>
                ))
              }
            </section>
          </section>
        </section>
    </section>
  );
};

export default VendedorResumen;
