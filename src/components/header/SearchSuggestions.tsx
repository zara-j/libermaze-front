import { Link } from "react-router-dom";
import { SearchSuggestionsProps } from "../../types/search.suggestions.model";

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({
  suggestions,
  onSuggestionClick,
  searchQuery,
}) => {
  return (
    <div className="absolute z-10 top-full left-0 bg-white w-full overflow-y-auto rounded-md shadow-lg max-h-60">
      {searchQuery && suggestions.length === 0 && (
        <p className="text-center text-gray-500">
          No results found for "{searchQuery}"
        </p>
      )}{" "}
      {suggestions.map((book) => (
        <Link
          key={book.id}
          to={`books/${book.id}`}
          onClick={onSuggestionClick}
          className="flex flex-col p-2 hover:bg-gray-300 transition-colors duration-200"
        >
          <div className="flex items-center">
            {book.cover_image && (
              <img
                src={book.cover_image}
                alt={book.title}
                className="w-10 h-10 object-cover rounded mr-2"
              />
            )}
            <div>
              <h1 className="text-sm font-semibold">{book.title}</h1>
              <p className="text-xs text-gray-600">{book.author}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default SearchSuggestions;
