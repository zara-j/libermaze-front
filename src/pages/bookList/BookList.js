import { useEffect, useState } from "react";
import axios from 'axios';
import "./BookList.css";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const [modalBook, setModalBook] = useState(null); // State to manage modal book data
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

  const fetchBooks = async (page) => {
    setLoading(true);
    
    try {
      const config = {
        method: 'get',
        url: `https://api.libermaze.com/api/recommendations/books/?page=${page}&limit=${itemsPerPage}`,
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
    fetchBooks(currentPage);
  }, [currentPage]);

  const handleCardClick = (book) => {
    setModalBook(book); // Set the selected book for the modal
    setModalVisible(true); // Show the modal
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalBook(null); // Reset modal book data
  };

  const truncateDescription = (description, limit) => {
    if (description.length > limit) {
      return description.substring(0, limit) + "...";
    }
    return description;
  };

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="book-page">
      <div className="subcontainer">
        {books.map((book) => (
          <div className="container" key={book.id || book.title}>
            <figure className="card" onClick={() => handleCardClick(book)}>
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
                  <p className="cardDesc">
                    {truncateDescription(book.description || "No Description Available", 100)}
                  </p>
                </div>
              </figcaption>
              {book.url && <a href={book.url} className="cardButton">Read More</a>}
          <div className="cardFilter"></div>
            </figure>
          </div>
        ))}

        {/* Modal for Book Details */}
        {modalVisible && (
          <div className="modal">
            <div className="overlay" onClick={closeModal}></div>
            <div className="modal-content">
              {modalBook && (
                <>
                  <h2 className="modal-title">{modalBook.title}</h2>
                  <h3 className="modal-author">- {modalBook.author}</h3>
                  <p className="description">{modalBook.description}</p>
                  <img src={modalBook.cover_image} alt={modalBook.title} />
                </>
              )}
              <button className="close" onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookList;
