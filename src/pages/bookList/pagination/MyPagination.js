const MyPagination = ({ currentPage, setCurrentPage, isLastPage }) => {
  const totalPagesToShow = 10; 

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
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav className="d-flex justify-content-center align-items-center">
      <ul className="pagination" aria-current="page">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <span
            className="page-link"
            style={{ cursor: currentPage === 1 ? 'default' : 'pointer' }}
            onClick={handlePrevious}
          >
            Previous
          </span>
        </li>

        {pageNumbers.map((page) => (
          <li
            key={page}
            className={`page-item ${page === currentPage ? "active" : ""}`}
            onClick={() => handlePageClick(page)}
            style={{ cursor: 'pointer' }}
          >
            <span className="page-link">{page}</span>
          </li>
        ))}

        <li className={`page-item ${isLastPage ? "disabled" : ""}`}>
          <span
            className="page-link"
            style={{ cursor: isLastPage ? 'default' : 'pointer' }}
            onClick={handleNext}
          >
            Next
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default MyPagination;
