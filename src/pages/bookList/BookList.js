import { useEffect, useState } from "react";
import axios from 'axios';
import "./BookList.css";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit] = useState(20); // Number of books per page
  const [offset, setOffset] = useState(0); // Offset for pagination
  const [totalBooks, setTotalBooks] = useState(0); // Track the total number of books

  const fetchBooks = async () => {
    setLoading(true);

    try {
      // Update the API URL to include limit and offset as query parameters
      const response = await axios.get(`https://api.libermaze.com/api/recommendations/books/?limit=${limit}&offset=${offset}`);
      
      setBooks(response.data); // Assuming the response contains a `books` array
      setTotalBooks(response.data); // Assuming the total number of books is available
    } catch (error) {
      console.error(error);
      setError('Failed to fetch data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [offset]); // Re-fetch books when the offset changes

  // Pagination handlers
  const handleNextPage = () => {
    if (offset + limit < totalBooks) {
      setOffset(offset + limit);
    }
  };

  const handlePrevPage = () => {
    if (offset > 0) {
      setOffset(offset - limit);
    }
  };

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

      {/* Pagination controls */}
      <div className="flex justify-between mt-4 mx-10">
        <button
          onClick={handlePrevPage}
          disabled={offset === 0}
          className={`px-4 py-2 bg-primary text-white rounded ${offset === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={offset + limit >= totalBooks}
          className={`px-4 py-2 bg-primary text-white rounded ${offset + limit >= totalBooks ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BookList;
