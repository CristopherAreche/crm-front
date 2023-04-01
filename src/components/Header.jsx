import SearchBar from "./SearchBar";
const Header = ({ imageSrc, mainText }) => {
  return (
    <div className="text-white w-full py-4 lg:py-12  flex flex-col lg:flex-row items-center  lg:justify-between gap-y-2">
      <h2 className=" text-3xl  text-light font-bold">CLIENTES</h2>
      <SearchBar />
    </div>
  );
};

export default Header;
