import React from "react";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <table>
      <tbody>
        <tr>
          {pageNumbers.map((number) => {
            return (
              <td key={number}>
                <a onClick={() => paginate(number)} href="!#">
                  {number}
                </a>
              </td>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
}

export default Pagination;
