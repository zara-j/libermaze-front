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

<<<<<<< HEAD





  const CardItem = ({ title, description, imgSrc }) => (
    <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
      <div className="card" style={{ width: '250px', height: '400px' }}> {/* Set fixed width and height */}
        <img
          src={imgSrc}
          className="card-img-top"
          alt="Card cap"
          style={{ height: '300px', objectFit: 'cover' }} // Set a specific height for the image
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );








  const fetchBooks = async (
  ) => {
    setLoading(true);

    try {
      const config = {
        method: 'get',
        url: 'https://api.libermaze.com/api/recommendations/books/',
      };
      const response = await axios.request(config);
      console.log(response.data)
=======
  const fetchBooks = async () => {
    setLoading(true);

    try {
      const response = await axios.get('https://api.libermaze.com/api/recommendations/books/');
>>>>>>> origin/main
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
<<<<<<< HEAD
    // <div className="book-page">
    //   <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mx-10">
    //     {books.map((book) => (
    //       <div className="bg-white shadow rounded overflow-hidden group" key={book.id || book.title}>
    //         <div className="relative">
    //           <img
    //             className="w-full h-full object-contain"
    //             src={book.cover_image || "defaultImage.png"}
    //             alt={book.title}
    //           />
    //           <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
    //             <a
    //               href="#"
    //               className="text-white text-lg w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
    //               title="View details"
    //             >
    //               <i className="fa-solid fa-magnifying-glass"></i>
    //             </a>
    //             <a
    //               href="#"
    //               className="text-white text-lg w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
    //               title="Add to wishlist"
    //             >
    //               <i className="fa-solid fa-heart"></i>
    //             </a>
    //           </div>
    //         </div>
    //         <div className="pt-3 pb-2 px-3">
    //           <h4 className="uppercase font-medium text-sm mb-1 text-gray-800 hover:text-primary transition">
    //              
    //           </h4>
    //           {book.author && <p className="text-xs text-gray-500">Author: {book.author}</p>}
    //           {book.genre && <p className="text-xs text-gray-500">Genre: {book.genre}</p>}
    //           <p className="text-xs text-gray-500">Rating: {book.rating || 'N/A'}</p>
    //         </div>
    //         <a
    //           href="#"
    //           className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
    //         >
    //           View Details
    //         </a>
    //       </div>
    //     ))}
    //   </div>
    //   <MyPagination books={books} onPageChange={(pageNumber) => setPage(pageNumber)} booksPerPage={booksPerPage} />
    // </div>



<div className="container mt-5">
<div className="row">
  {books.map((book) => (

      <CardItem
      title={book.title}
      description={book.genre}
      imgSrc={book.cover_image || "defaultImage.png"}
      />

  ))
  }



</div>
<MyPagination books={books} onPageChange={(pageNumber) => setPage(pageNumber)} booksPerPage={booksPerPage} />

</div>

=======
    <div className="book-page">
      <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mx-10">
        {paginatedBooks.map((book) => (
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
      <MyPagination 
        totalBooks={books.length} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        limit={limit} 
      />
    </div>
>>>>>>> origin/main
  );
};

export default BookList;
