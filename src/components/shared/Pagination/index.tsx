import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const pageFromQuery = queryParams.get("page");

    if (pageFromQuery) {
      setCurrentPage(Number(pageFromQuery));
    }
  }, [location.search]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    navigate(`?page=${page}`);
  };

  const getVisiblePages = () => {
    const visiblePages = [];

    if (currentPage > 1) {
      visiblePages.push(currentPage - 1);
    }

    visiblePages.push(currentPage);

    if (currentPage + 1 <= totalPages) {
      visiblePages.push(currentPage + 1);
    }
    if (currentPage + 2 <= totalPages) {
      visiblePages.push(currentPage + 2);
    }

    return visiblePages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={currentPage === page ? "active-page" : ""}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
