import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";
import CardItem from "../components/book/CardItem";
import { useSearchParams } from "react-router";

export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
  num_ratings: number;
  isbn: string;
  first_publish_year: number;
  first_sentence: string;
  cover_image: string;
}


const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

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
        setBooks(response.data);
        setIsLastPage(false); 
      } else {
        setBooks([]);
        setIsLastPage(true);
      }
    } catch (error) {
      console.error(error);
      setError('Failed to fetch data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks(currentPage);
  }, [currentPage, searchQuery]);


  if (error) return <p>{error}</p>;

  return (
    <div className="container my-5 mx-auto">      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 mb-30 mx-auto">
        {books.map((book) => (
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

export default Books;
