import React from "react";

const Pagination = ({ page, totalPages, changePage }) => {
  return (
    <div className="row">
      <div className="col-12 text-center m-3">
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
    </div>
  );
};

export default Pagination;
