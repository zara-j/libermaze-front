// components/SearchBar.tsx
import { useNavigate, useSearchParams } from "react-router";
import { useState } from "react";

const SearchBar = () => {
  const [searchParams] = useSearchParams();
  const [input, setInput] = useState(searchParams.get("q") || "");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = input.trim();
    if (query) {
      navigate(`/books?q=${encodeURIComponent(query)}`);
    } else {
      navigate("/books");
    }

  };

  return (
    <form onSubmit={handleSearch} className="mx-4">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Search books..."
        className="border text-md md:text-xs w-1/2 px-2 py-1 lg:py-2 rounded-md"
      />
      <button
        type="submit"
        disabled={!input.trim()}
        className="ml-2 px-3 py-1 lg:py-2 bg-blue-600 text-white text-md md:text-xs rounded-md"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
