import React from "react";

const Pagination = ({ page, totalPages, changePage }) => {
  return (
    <div className="center tc pa3 ma3">
      {page === 1 ? (
        ""
      ) : (
        <span
          onClick={() => changePage(page - 1)}
          className="pagination-link link dim black mr1"
        >
          {"<<"}
        </span>
      )}
      {page}
      {page <= totalPages ? (
        <span
          onClick={() => changePage(page + 1)}
          className="pagination-link link dim black mr1"
        >
          {">>"}
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pagination;
