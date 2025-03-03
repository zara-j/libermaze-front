import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

interface SearchbarProps {
  setSearchQuery: (query: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ setSearchQuery }) => {
  const [query, setQuery] = useState<string>("");
  const [expanded, setExpanded] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setSearchQuery(value);
    if (value) {
      navigate("/books");
    }
  };

  const toggleSearch = () => {
    setExpanded(!expanded);
  };

  return (
      <div className="relative flex items-center justify-end mt-7 xl:mt-0 mx-10 xl:mx-20">
        <input
          type="search"
          value={query}
          onChange={handleSearch}
          placeholder="Search..."
          className={`px-12 py-2 border border-black rounded-xl transition-all duration-300 ease-in-out ${expanded ? "w-[280px] opacity-90" : "w-0 opacity-0"}`}
          style={{visibility: expanded ? "visible" : "hidden"}}
        />
        <button className="size-8 absolute mr-2 hover:shadow-2xl" onClick={toggleSearch}>
          <CiSearch className="cursor-pointer size-8" />
        </button>
      </div>
  );
};

export default Searchbar;
