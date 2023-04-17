import { RiStarFill, RiStarLine, RiEdit2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import HeaderPerfil from "./shared/HeaderPerfil";
import PrincipalInformation from "./shared/PrincipalInformation";
import PersonalInformationView from "./shared/PersonalInformationView";
import FormEditPerfilSeller from "./forms/FormEditPerfiSeller";
import { useState } from "react";
import { getSeller } from "../services/sellersServices";

const MainPerfilSeller = () => {
  const user = useSelector((state) => state.auth.User);
  // const user = useSelector((state) => state.sellers.seller);

  // const dispatch = useDispatch();

  // dispatch(getSeller({ bossId, id }));

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-6 px-12 z-[2] min-h-screen">
      <section className="grid grid-cols-1 lg:grid-cols-8 ">
        <section className=" col-span-2 flex flex-col gap-y-6 items-center lg:items-start mb-6 lg:mb-0">
          <PrincipalInformation data={user} />
          <p className="flex gap-x-2 items-center text-yellow-400 mb-4">
            {[...new Array(5)].map((star, index) => {
              return index < user.avgFeedback ? (
                <RiStarFill key={index} />
              ) : (
                <RiStarLine key={index} />
              );
            })}
          </p>
          <button
            className="bg-secondary p-3 shadow-secondary/25 hover:bg-secondary/70 transition-all rounded-full box-content shadow-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            <RiEdit2Line className="text-xl text-base-light" />
          </button>
        </section>
        <PersonalInformationView data={user} type="seller" />
      </section>
      {isOpen && <FormEditPerfilSeller onClose={() => setIsOpen(false)} />}
    </section>
  );
};

export default MainPerfilSeller;
