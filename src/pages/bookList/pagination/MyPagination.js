import { useState } from "react";

const MyPagination = ({
    books,
    onPageChange,
    booksPerPage,
    baseUrls,
    limit,
    offset,
  }) => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const totalPages = Math.ceil(books.length / booksPerPage);
  
    const paginationButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      const newOffset = (i - 1) * limit;
  
      paginationButtons.push(
        <li key={i}>
          <a
            // href={`limit=${limit}&offset=${newOffset}`}
            href={'#'}
            className={`${
              currentPage === i
                ? "flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            }`}
            onClick={() => {
              setCurrentPage(i);
              onPageChange(i);
            }}
          >
            {i}
          </a>
        </li>
      );
    }
  
    return (
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-sm">
          <li>
            <a
              href={`${baseUrls}?limit=${limit}&offset=${offset - limit}`}
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          {paginationButtons}
        </ul>
      </nav>
    );
  };
  
  export default MyPagination;
  