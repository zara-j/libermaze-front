import { useEffect, useState } from "react";
import axios from 'axios';
import "./BookList.css";

const BookList = (
) => {
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
    fetchBooks();
  }, []);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="book-page">
      <div className="subcontainer">
        {books.map((book) => (
          <div className="container" key={book.id || book.title}>
            <figure className="card">
              <div className="img-subcontainer">
                <div className="img-container">
                  <img
                    className="cardImg"
                    src={book.cover_image || "defaultImage.png"}
                    alt={book.title}
                  />
                </div>
              </div>
              <figcaption className="cardFigcaption">
                <div className="cardText">
                  <h1 className="title">{book.title}</h1>
                  {book.author && <p className="author">Author: {book.author}</p>}
                  {book.genre && <p className="genre">Genre: {book.genre}</p>}
                  <p className="cardDesc">Rating: {book.rating || 'N/A'}</p>
                 
                </div>
              </figcaption>
          <div className="cardFilter"></div>
            </figure>
          </div>
        ))}

     
      </div>
    </div>
  );
};

export default BookList;