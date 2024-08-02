

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button onClick={() => paginate(currentPage - 1)} className="page-link">&lt; &nbsp;Previous</button>
        </li>
             <li className="page-item-active">{currentPage}</li>
        <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
          <button onClick={() => paginate(currentPage + 1)} className="page-link">Next&nbsp; &gt;</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;