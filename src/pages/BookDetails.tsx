import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface Book {
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
  openlibrary_url: string;
}

const BookPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(
          `https://api.libermaze.com/api/recommendations/books/${id}/`
        );
        setBook(response.data[0]);
      } catch (error) {
        setError("Failed to load book details.");
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);
  console.log("hiiiiiiiiii", book)

  if (loading) return <p>Loading book details...</p>;
  if (error) return <p>{error}</p>;

  return book ? (
    <div className="container mx-auto my-10 p-5">
      <div className="flex flex-col md:flex-row justify-center items-center max-w-[1200px] mx-auto">
        <img
          src={book.cover_image}
          alt={book.title}
          className="xl:max-w-[900px] xl:max-h-[600px] rounded-lg shadow-md pr-8 object-cover object-center mb-4 mx-auto"
        />
        {book.num_ratings > 0 &&(
          <div>{book.num_ratings}</div>
        )} 
        <div className="ml-5">
          <h1 className="text-3xl xl:text-5xl font-bold mb-2">{book.title}</h1>
          <p className="text-gray-600 text-lg">by {book.author}</p>
          <p className="text-gray-500">Published: {book.first_publish_year}</p>
          <p className="text-gray-500">isbn:{book.isbn}</p>
          <p className="mt-2">{book.description}</p>
          <p className="mt-2 italic text-gray-700">"{book.first_sentence}"</p>
          <a
            href={book.openlibrary_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-3 inline-block"
          >
            View on Open Library
          </a>
          <hr className="my-5"></hr>
          <p className="mt-2 text-justify text-sm">{book.genre}</p>
        </div>
      </div>
    </div>
  ) : (
    <p>Book not found.</p>
  );
};

export default BookPage;
