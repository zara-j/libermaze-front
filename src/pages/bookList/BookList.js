import { useEffect, useState } from "react";
import axios from 'axios';
import MyPagination from "./pagination/MyPagination";
import "./BookList.css";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  const CardItem = ({ title, description, imgSrc }) => (
    <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
      <div className="card" style={{ width: '250px', height: '400px' }}>
        <img
          src={imgSrc}
          className="card-img-top"
          alt="Card cap"
          style={{ height: '300px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const config = {
        method: 'get',
        url: 'https://api.libermaze.com/api/recommendations/books/',
      };
      const response = await axios.request(config);
      console.log(response.data);
      setBooks(response.data);
    } catch (error) {
      console.error(error);
      setError('Failed to fetch data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>{error}</p>;

  // Calculate the start and end index for the current page
  const endIndex = currentPage * limit;
  const startIndex = endIndex - limit;
  const paginatedBooks = books.slice(startIndex, endIndex);

  return (
    <div className="container mt-5">
      <div className="row">
        {paginatedBooks.map((book) => (
          <CardItem
            key={book.id} // Add a unique key for each item
            title={book.title}
            description={book.genre}
            imgSrc={book.cover_image || "defaultImage.png"}
          />
        ))}
      </div>
      <MyPagination totalBooks={books.length} currentPage={currentPage} setCurrentPage={setCurrentPage} limit={limit}
      />
    </div>
  );
};

export default BookList;
