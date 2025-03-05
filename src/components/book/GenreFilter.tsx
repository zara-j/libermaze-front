import { useState } from "react";

interface GenreFilterProps {
  onGenreChange: (genre: string) => void;
}

const GenreFilter: React.FC<GenreFilterProps> = ({ onGenreChange }) => {
  const [selectedGenre, setSelectedGenre] = useState("");

  const genres = [
    "All",
    "Fiction",
    "Classics",
    "Adventure",
    "Romance",
    "Historical",
    "Humor",
    "Children",
    "Fantasy", 
    "Mystery"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = e.target.value;
    setSelectedGenre(genre);
    onGenreChange(genre === "All" ? "" : genre.toLocaleLowerCase()); 
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2">
        Filter by Genre:
      </label>
      <select
        className="p-2 border rounded-md"
        value={selectedGenre}
        onChange={handleChange}
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;
