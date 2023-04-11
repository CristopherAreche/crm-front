import SideBar from "../../components/sidebars/SideBar";
import { useSelector, useDispatch } from "react-redux";
import BossFilterTop from "../../components/bossComponents/BossFilterTop";
import SellersList from "../../components/bossComponents/SellersList";
import BossFilterBottom from "../../components/bossComponents/BossFilterBottom";
import { resetSellers, searchSellers } from "../../app/features/sellerSlice";
import Header from "../../components/Header";
import spotlight1 from "../../assets/svg/Spotlight1.svg";
import spotlight2 from "../../assets/svg/Spotlight2.svg";

const Sellers = () => {
  const dispatch = useDispatch();
  const sellers = useSelector((state) => state.sellers.sellers);
  return (
    <main className="bg-base h-screen text-white">
      <SideBar />

      <main className="lg:pl-72 h-[100vh] overflow-y-auto flex flex-col z-[2] w-[100vw] lg:w-auto">
        <section className="py-6 px-12 z-[2] flex flex-col ">
          <Header
            mainText={"VENDEDORES"}
            data={sellers}
            onSearch={(filteredSellers) =>
              dispatch(searchSellers(filteredSellers))
            }
            onReset={() => dispatch(resetSellers())}
          />
          <BossFilterTop />
          <SellersList />
          <BossFilterBottom />
        </section>
      </main>

      {/* Luces */}
      <img
        src={spotlight1}
        className="absolute top-0 left-0 opacity-80 z-[1]"
        alt="light glow"
      />
      <img
        src={spotlight2}
        className="absolute bottom-0 right-0 opacity-80 z-[1]"
        alt="light glow"
      />
    </main>
  );
};

export default Sellers;
