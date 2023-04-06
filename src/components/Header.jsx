import SearchBar from "./SearchBar";

const Header = ({ imageSrc, mainText, data, onSearch, onReset }) => {
  //SEARCH BAR ES UN COMPONENTE REUTILIZABLE
  return (
    <header className="text-white w-full flex flex-col lg:flex-row items-center  lg:justify-between gap-y-2 mb-6">
      <h2 className=" text-3xl  text-light font-bold">{mainText}</h2>
      <SearchBar data={data} onSearch={onSearch} onReset={onReset} />
    </header>
  );
};

export default Header;
