import React, { useEffect, useState } from "react";
import "../App.css";
function Pagination({ postsPerPage, totalPosts, paginate, pageNumber }) {
  //   const [pageNumbers, setPageNumbers] = useState([]);
  const pageNumbers = [];
  //   useEffect();
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        color: "white",
        margin: "10px",
      }}
    >
      {pageNumbers.map((number) => {
        return pageNumber === number ? (
          <div
            key={number}
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "black",
              borderRadius: "50%",
              justifyContent: "center",
              width: "50px",
              height: "50px",
              cursor: "pointer",
            }}
          >
            {number}
          </div>
        ) : (
          <div
            key={number}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",

              width: "50px",
              height: "50px",
              cursor: "pointer",
            }}
            className="pageList"
            onClick={() => paginate(number)}
            href="!#"
          >
            {number}
          </div>
        );
      })}
    </div>
  );
}

export default Pagination;
