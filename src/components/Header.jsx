import SearchBar from "./SearchBar";

const Header = ({ imageSrc, mainText, data, onSearch, onReset }) => {
  //SEARCH BAR ES UN COMPONENTE REUTILIZABLE
  return (
    <div className="text-white w-full py-4 lg:pt-12 lg:px-4 flex flex-col lg:flex-row items-center  lg:justify-between gap-y-2">
      <h2 className=" text-3xl  text-light font-bold">{mainText}</h2>
      <SearchBar data={data} onSearch={onSearch} onReset={onReset} />
    </div>
  );
};

export default Header;
