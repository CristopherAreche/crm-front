import SearchBar from "./SearchBar";
const Header = ({ imageSrc, mainText }) => {
  return (
    <header className="text-white w-full flex flex-col lg:flex-row items-center  lg:justify-between gap-y-2 mb-6">
      <h2 className=" text-3xl  text-light font-bold">CLIENTES</h2>
      <SearchBar />
    </header>
  );
};

export default Header;
