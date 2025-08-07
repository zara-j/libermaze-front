import { PaginationProps } from "../types/paginations";

const Pagination: React.FC<PaginationProps> = ({ currentPage, setCurrentPage, isLastPage }) => {
  const totalPagesToShow = 5;

  const generatePageNumbers = () => {
    const startPage = Math.max(1, currentPage - Math.floor(totalPagesToShow / 2));
    const endPage = Math.min(startPage + totalPagesToShow - 1, currentPage + totalPagesToShow - 1);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pageNumbers = generatePageNumbers();

  const handleNext = () => {
    if (!isLastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <nav className="flex justify-center align-items-center w-full mx-auto p-5">
      <ul className="flex" aria-current="page">
        <li className={`page-item text-sm sm:text-base ${currentPage === 1 ? "disabled" : ""}`}>
          <span
            className="page-link"
            style={{ cursor: currentPage === 1 ? "default" : "pointer" }}
            onClick={handlePrevious}
          >
            Previous
          </span>
        </li>

        {pageNumbers.map((page) => (
          <li
            key={page}
            onClick={() => handlePageClick(page)}
            style={{ cursor: "pointer"}}
            className="rounded-md hover:bg-gray-400"
          >
            <span className="page-link px-3 py-2">{page}</span>
          </li>
        ))}

        <li className={`page-item ${isLastPage ? "disabled" : ""}`}>
          <span
            className="page-link px-3 py-2"
            style={{ cursor: isLastPage ? "default" : "pointer" }}
            onClick={handleNext}
          >
            Next
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
