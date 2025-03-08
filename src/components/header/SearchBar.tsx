import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Book } from "../../pages/Books";
import axios from "axios";
import SearchSuggestions from "./SearchSuggestions";

interface SearchbarProps {
  setSearchQuery: (query: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ setSearchQuery }) => {
  const [query, setQuery] = useState<string>("");
  const [expanded, setExpanded] = useState<boolean>(false)
  const [suggestions, setSuggestions] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false)

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setSearchQuery(value);
    if (value) {
      setLoading(true)
      try{
        const response = await axios.get(`https://api.libermaze.com/api/recommendations/books/?search=${value}`)
        setSuggestions(response.data)
      } catch (error) {
        console.error("Failed to fetch suggestions", error)
      } finally {
        setLoading(false)
      }
    } else {
      setSuggestions([])
    }
  };

  const toggleSearch = () => {
    setExpanded(!expanded);
  };

  const handleSearchClick = () => {
    setQuery("");
    setSuggestions([]);
  }

  return (
    <div className="relative flex items-center justify-end mt-7 xl:mt-0 mx-10 xl:mx-20">
      <input
        type="search"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
        className={`px-12 w-full py-2 border border-black rounded-xl transition-all duration-300 ease-in-out ${
          expanded ? "w-[280px] opacity-90" : "w-0 opacity-0"
        }`}
        style={{ visibility: expanded ? "visible" : "hidden" }}
      />
      {loading && <p className="absolute text-sm text-gray-500">Loading...</p>}
      {suggestions && (
        <SearchSuggestions searchQuery={query} suggestions={suggestions} onSuggestionClick={handleSearchClick} />
      )}
      <button
        className="size-8 absolute mr-2 hover:shadow-2xl"
        onClick={toggleSearch}
      >
        <CiSearch className="cursor-pointer size-8" />
      </button>
    </div>
  );
};

export default Searchbar;
