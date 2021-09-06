import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import axios from "axios";
import Pagination from "./Pagination";

const baseURL =
  "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";

function Table() {
  const [blogID, setBlogID] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 25;
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    setLoading(true);
    await axios
      .get(baseURL)
      .then((response) => {
        setBlogID(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.error("error", err);
      });
    setLoading(false);
  }
  if (!blogID) return null;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogID.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <p>Page {currentPage} </p>
      <Cell blogsID={currentPosts} load={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={blogID.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Table;
