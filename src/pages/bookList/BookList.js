import { useEffect, useState } from "react";
import axios from 'axios';
import MyPagination from "./pagination/MyPagination";
import "./BookList.css";

const BookList = (
) => {
  const [page, setPage] = useState(1);
  const [booksPerPage] = useState(10);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  const fetchBooks = async (
  ) => {
    setLoading(true);

    try {
      const config = {
        method: 'get',
        url: 'https://api.libermaze.com/api/recommendations/books/',
      };
      const response = await axios.request(config);
      setBooks(response.data);
    } catch (error) {
      console.error(error);
      setError('Failed to fetch data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks(page);
  }, [page]);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="book-page">
      <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mx-10">
        {books.map((book) => (
          <div className="bg-white shadow rounded overflow-hidden group" key={book.id || book.title}>
            <div className="relative">
              <img
                className="w-full h-full object-contain"
                src={book.cover_image || "defaultImage.png"}
                alt={book.title}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a
                  href="#"
                  className="text-white text-lg w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="View details"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="Add to wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="pt-3 pb-2 px-3">
              <h4 className="uppercase font-medium text-sm mb-1 text-gray-800 hover:text-primary transition">
                {book.title}
              </h4>
              {book.author && <p className="text-xs text-gray-500">Author: {book.author}</p>}
              {book.genre && <p className="text-xs text-gray-500">Genre: {book.genre}</p>}
              <p className="text-xs text-gray-500">Rating: {book.rating || 'N/A'}</p>
            </div>
            <a
              href="#"
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
      <MyPagination books={books} onPageChange={(pageNumber) => setPage(pageNumber)} booksPerPage={booksPerPage} />
    </div>

  );
};

export default BookList;