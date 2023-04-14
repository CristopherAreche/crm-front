import SideBar from "../../components/sidebars/SideBar";
import spotlight1 from "../../assets/svg/Spotlight1.svg";
import spotlight2 from "../../assets/svg/Spotlight2.svg";
import Clients from "./Clients";
import { useSelector } from "react-redux";
import MainSellerClients from "../../components/MainSellerClients";

const AllClients = () => {
  const role = useSelector((state) => state.auth.userRole);

  return (
    <main className="bg-base h-screen text-white ">
      <SideBar />
      {role === "admin" ? (
        <Clients />
      ) : (
        <section className=" lg:pl-72 h-[100vh] overflow-y-auto flex flex-col z-[2] w-[100vw] lg:w-auto">
          <MainSellerClients />
        </section>
      )}
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

export default AllClients;
