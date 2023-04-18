import SideBar from "../../components/sidebars/SideBar";
import Clients from "./Clients";
import { useSelector } from "react-redux";
import MainSellerClients from "../../components/MainSellerClients";
import LightsSvg from "../../components/LightsSvg";

const AllClients = () => {
  const role = useSelector((state) => state.auth.User.role);

  return (
    <main className="bg-base h-screen text-white ">
      <SideBar />
      {role === "admin" ? (
        <Clients />
      ) : (
        <section className=" lg:pl-72 h-[100vh] overflow-y-auto flex flex-col z-20 w-[100vw] lg:w-auto">
          <MainSellerClients />
        </section>
      )}
      {/* Luces */}
      <LightsSvg />
    </main>
  );
};

export default AllClients;
