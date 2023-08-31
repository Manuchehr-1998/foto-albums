import React from "react";
import "./pagination.css";

const Pagination = ({
  photosPerPage,
  totalPhotos,
  paginate,
  prevPage,
  nextPage,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalPhotos / photosPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="paginations">
      <span
        onClick={prevPage}
        className={`span ${currentPage === pageNumbers ? "active" : ""}`}
      >
        Prev
      </span>
      <ul>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={`btnli ${currentPage === number ? "active" : ""}`}
          >
            {number}
          </li>
        ))}
      </ul>
      <span
        onClick={nextPage}
        className={`btnli ${currentPage === pageNumbers ? "active" : ""}`}
      >
        Next
      </span>
    </div>
  );
};

export default Pagination;
