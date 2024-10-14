import { useEffect, useState } from "react";
import axios from 'axios';
import "./BookList.css";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 20; // Adjust as necessary

  const fetchBooks = async (page) => {
    setLoading(true);
    try {
      const config = {
        method: 'get',
        url: `https://booknovo-api.shirpala.ir/api/recommendations/books/?page=${page}&limit=${itemsPerPage}`, // Include pagination parameters
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        },
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
    fetchBooks(currentPage); // Fetch books when the component mounts or the page changes
  }, [currentPage]);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {books.map((book) => (
        <figure className="card" key={book.id || book.title}>
          <img className="cardImg" src={book.cover_image || "defaultImage.png"} alt={book.title} />
          <figcaption className="cardFigcaption">
            <i className="fas fa-arrow-circle-up cardIcon"></i>
            <div className="cardText">
              <h1 className="cardDesc">{book.title}</h1>
              <p className="cardDesc">{book.description}</p>
              {book.author && <p className="cardDesc">Author: {book.author}</p>}
              {book.genre && <p className="cardDesc">Genre: {book.genre}</p>}
              <p className="cardDesc">Rating: {book.rating || 'N/A'}</p>
              <i className="fas fa-search cardDesc cardDescIcon"></i>
            </div>
          </figcaption>
          {book.url && <a href={book.url} className="cardButton">Read More</a>}
          <div className="cardFilter"></div>
        </figure>
      ))}
      <div className="pagination">
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>Previous</button>
        <span>Page {currentPage}</span>
        <button onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button>
      </div>
    </>
  );
}

export default BookList;
