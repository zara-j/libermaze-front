
const MyPagination = ({ totalBooks, currentPage, setCurrentPage, limit }) => {
  const pagesCount = Math.ceil(totalBooks / limit);
  const pagesNumbers = Array.from({ length: pagesCount }, (_, index) => index + 1);

  const changePaginate = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <nav className="d-flex justify-content-center">
      <ul className="pagination" aria-current="page">
        {pagesNumbers.map((pageNumber) => (
          <li
            style={{ cursor: 'pointer' }}
            className={pageNumber === currentPage ? "page-item active" : "page-item"}
            key={pageNumber}
            onClick={() => changePaginate(pageNumber)}
          >
            <span className="page-link">{pageNumber}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MyPagination;
