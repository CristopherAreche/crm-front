
import SideBar from "../../components/sidebars/SideBar";
import MainSeller from "../../components/MainSeller";
import { useSelector } from "react-redux";
import { RiLoader4Fill } from "react-icons/ri";
import LightsSvg from "../../components/LightsSvg";
import MainBoss from "../../components/bossComponents/MainBoss";

const Summary = () => {
  const User = useSelector((state) => state.auth.User);
  const status = useSelector((state) => state.auth.status);



  if (status === "loading") {
    return (
      <div className="flex justify-center w-full">
        <RiLoader4Fill className="animate-spin text-4xl text-secondary mt-8" />
      </div>
    );
  }


  return (
    <main className="bg-base h-screen text-white ">
      <SideBar />
      {User.role !== "admin" ? (
        <section className=" lg:pl-72 h-[100vh] overflow-y-auto flex flex-col z-20 w-[100vw] lg:w-auto">
          <MainSeller />
        </section>
      ) : (
        <section className="lg:pl-72 h-[100vh] overflow-y-auto flex flex-col z-20 w-[100vw] lg:w-auto">
           <MainBoss />
        </section>
      )}
      {/* Luces */}
      <LightsSvg />
    </main>
  );
};

export default Summary;
