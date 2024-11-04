import { useEffect, useState } from "react";
import axios from 'axios';
import MyPagination from "./pagination/MyPagination";
import "./BookList.css";
import CardItem from "./CardItem";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false); // Track if the last page has been reached
  const limit = 10; // Number of items per page


  const fetchBooks = async (page) => {
    setLoading(true);
    const offset = (page - 1) * limit;

    try {
      const config = {
        method: 'get',
        url: 'https://api.libermaze.com/api/recommendations/books/',
        headers: {
          'Limit': limit.toString(),
          'Offset': offset.toString(),
        }
      };
      const response = await axios.request(config);

      if (response.data && response.data.length > 0) {
        setBooks(response.data); // Update with new page data
        setIsLastPage(false); // If data exists, not the last page
      } else {
        setIsLastPage(true); // If no data, this is the last page
      }
    } catch (error) {
      console.error(error);
      setError('Failed to fetch data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch books whenever currentPage changes
  useEffect(() => {
    fetchBooks(currentPage);
  }, [currentPage]);

  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-5">
      <div className="row">
        {books.map((book) => (
          <CardItem key={book.id} title={book.title} description={book.genre} imgSrc={book.cover_image || "defaultImage.png"} />
        ))}
      </div>
      {loading && <p>Loading...</p>}
      <MyPagination currentPage={currentPage} setCurrentPage={setCurrentPage} isLastPage={isLastPage} />
    </div>
  );
};

export default BookList;
