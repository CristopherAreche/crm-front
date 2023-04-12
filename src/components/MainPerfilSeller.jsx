import { RiStarFill, RiStarLine, RiEdit2Line } from "react-icons/ri";
import { useSelector } from 'react-redux'
import HeaderPerfil from "./shared/HeaderPerfil";
import PrincipalInformation from "./shared/PrincipalInformation";
import PersonalInformationView from "./shared/PersonalInformationView";

const MainPerfilSeller = () => {


  const {seller} = useSelector(state => state.sellers)

  return (
    <section className="py-6 px-12 z-[2] min-h-screen">
      <HeaderPerfil data={seller} />
      <section className="grid grid-cols-1 lg:grid-cols-8 ">
        <section className=" col-span-2 flex flex-col gap-y-6 items-center lg:items-start mb-6 lg:mb-0">
          <PrincipalInformation data={seller} />
          <p className="flex gap-x-2 items-center text-yellow-400 mb-4">
            {[...new Array(5)].map((star, index) => {
              return index < seller.avgFeedback ? (
                <RiStarFill key={index} />
              ) : (
                <RiStarLine key={index} />
              );
            })}
          </p>
          <button className="bg-secondary p-3 shadow-secondary/25 hover:bg-secondary/70 transition-all rounded-full box-content shadow-md">
            <RiEdit2Line className="text-xl text-base-light" />
          </button>
        </section>
        <PersonalInformationView data={seller} type='seller'/>
      </section>
    </section>
  );
};

export default MainPerfilSeller;
