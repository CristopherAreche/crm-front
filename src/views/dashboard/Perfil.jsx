
import LightsSvg from "../../components/LightsSvg";
import MainPerfilSeller from "../../components/MainPerfilSeller";
import MainPerfilBoss from "../../components/bossComponents/MainPerfilBoss";
import SideBar from "../../components/sidebars/SideBar";
import { useSelector } from "react-redux";

const Perfil = () => {
  const role = useSelector((state) => state.auth.User.role);

  return (
    <main className="bg-base h-screen text-white">
      <SideBar />
      {role !== "admin" ? (
        <section className=" lg:pl-72 h-[100vh] overflow-y-auto flex flex-col z-20 w-[100vw] lg:w-auto">
          <MainPerfilSeller />
        </section>
      ) : (
        <section className=" lg:pl-72 h-[100vh] overflow-y-auto flex flex-col z-20 w-[100vw] lg:w-auto">
          <MainPerfilBoss/>
        </section>
      )}
      {/* Luces */}
      <LightsSvg />
    </main>
  );
};

export default Perfil;
