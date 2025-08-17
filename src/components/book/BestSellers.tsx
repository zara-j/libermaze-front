import { useEffect, useState } from "react";
import Card from "../Card";
import { NYTBook, OpenLibraryBook } from "../../types/bestseller.model";

const BestSellers: React.FC = () => {
  const [nytBooks, setNytBooks] = useState<NYTBook[]>([]);
  const [trendyBooks, setTrendyBooks] = useState<OpenLibraryBook[]>([]);

  useEffect(() => {
    const fetchNyTimesBooks = async () => {
      const apiKey = "Qut5fpbLwGjAV64JHheuJSWCnnibndXA";
      const url = `https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data. Please try again later.");
        }
        const data = await response.json();
        if (data.results && data.results.books) {
          setNytBooks(data.results.books);

        }
      } catch (error) {
        console.error("Error fetching NY Times books:", error);
      }
    };

    fetchNyTimesBooks();
  }, []);

  useEffect(() => {
    const fetchTrendyBooks = async () => {
      try {
        const response = await fetch(
          "https://openlibrary.org/trending/daily.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.works) {
          setTrendyBooks(data.works);
        }
      } catch (error) {
        console.error("Error fetching trendy books:", error);
      }
    };

    fetchTrendyBooks();
  }, []);

  return (
    <div className="p-6 mx-auto overflow-x-hidden">
      <h1 className="text-center font-bold text-2xl xl:text-3xl px-1 xl:px-5 py-10">
        The New York Times Best Sellers
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
      {nytBooks.map((book) => (
          <Card
            key={book.primary_isbn13}
            image={book.book_image}
            title={book.title}
            author={book.author}
          />
        ))}
      </div>

        <h1 className="text-center font-bold text-3xl px-5 py-10">
          Trendy Books
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
        {trendyBooks.map((book) => (
          <Card
            key={book.key}
            image={
              book.cover_i
                ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                : "/placeholder.jpg"
            }
            title={book.title}
            author={book.author_name?.join(", ") || "Unknown Author"}
          />
        ))}
        </div>
      </div>
  );
};

export default BestSellers;