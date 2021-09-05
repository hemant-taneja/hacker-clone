import React, { useState, useEffect } from "react";
import axios from "axios";

function Cell(props) {
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    await axios
      .get(
        `https://hacker-news.firebaseio.com/v0/item/${props.id}.json?print=pretty`
      )
      .then((response) => {
        setBlog(response.data);
      })
      .catch((err) => {
        console.error("error", err);
      });
  }
  if (!blog) return null;
  return (
    <tr>
      <td>{blog.title}</td>
    </tr>
  );
}

export default Cell;
