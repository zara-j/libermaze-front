import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";
import CardItem from "../components/book/CardItem";
import GenreFilter from "../components/book/GenreFilter";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: any;
  description: string;
  num_ratings: number;
  isbn: string;
  first_publish_year: number;
  first_sentence: string;
  cover_image: string;
}

interface BookListProps {
  searchQuery: string;
}

const BookList: React.FC<BookListProps> = ({ searchQuery }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [selectedGenre, setSelectedGenre] = useState<string>("");

  const limit = 10;

  const fetchBooks = async (page: number) => {
    setLoading(true);
    const offset = (page - 1) * limit;

    try {
      const response = await axios.get(
        "https://api.libermaze.com/api/recommendations/books/",
        {
          headers: {
            Limit: limit.toString(),
            Offset: offset.toString(),
          },
        }
      );

      if (response.data && response.data.length > 0) {
        const booksWithGenres = response.data.map((book: Book) => {
          let parsedGenres: string[] = [];
  
          if (Array.isArray(book.genre)) {
            parsedGenres = book.genre; // If already an array, use it as-is
          } else if (typeof book.genre === "string") {
            try {
              parsedGenres = JSON.parse(
                book.genre.replace(/'/g, '"') // Convert single quotes to double quotes for JSON compatibility
              );
  
              if (!Array.isArray(parsedGenres)) {
                parsedGenres = [book.genre]; // Ensure it's always an array
              }
            } catch (error) {
              console.error(`Error parsing genre for book: ${book.title}`, error);
              parsedGenres = [book.genre]; // Fallback to string wrapped in an array
            }
          } else {
            parsedGenres = ["Unknown"]; // Fallback for missing or invalid genres
          }
  
          return { ...book, genre: parsedGenres };
        });

        setBooks(booksWithGenres);
        setIsLastPage(false);
      } else {
        setIsLastPage(true);
      }
    } catch (error) {
      console.error(error);
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks(currentPage);
  }, [currentPage]);

  useEffect(() => {
    let filtered = books;

    if (searchQuery) {
      filtered = filtered.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedGenre) {
      filtered = filtered.filter((book) =>
        book.genre.some((g:string) => g.toLowerCase() === selectedGenre.toLowerCase())
      );
    }

    setFilteredBooks(filtered);
  }, [searchQuery, selectedGenre, books]);
  

  if (error) return <p>{error}</p>;

  return (
    <div className="container my-5 mx-auto">
      <GenreFilter onGenreChange={setSelectedGenre} /> 

      {searchQuery && filteredBooks.length === 0 && (
        <p className="text-center text-gray-500">
          No results found for "{searchQuery}"
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 mb-30 mx-auto">
        {filteredBooks.map((book) => (
          <CardItem
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            imgSrc={book.cover_image}
          />
        ))}
      </div>

      {loading && <p>Loading...</p>}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isLastPage={isLastPage}
      />
    </div>
  );
};

export default BookList;
