import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchbarProps {
  setSearchQuery: (query: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ setSearchQuery }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setSearchQuery(value);
    if (value) {
      navigate("/booklist");
    }
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleSearch}
      placeholder="Search books..."
      className="px-16 py-3 w-full rounded-md border border-gray-200"
    />
  );
};

export default Searchbar;