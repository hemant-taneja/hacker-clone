import React, { useState, useEffect } from "react";
import axios from "axios";

function Cell({ blogsID, load }) {
  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    setBlog([]);
    blogsID?.forEach((id) => {
      getData(id);
    });
  }, [blogsID]);
  async function getData(id) {
    await axios
      .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      .then((response) => {
        setBlog((x) => [...x, response.data]);
      })
      .catch((err) => {
        console.error("error", err);
      });
  }
  if (load) return <h4>Loading...</h4>;
  if (!blogs) return null;
  return (
    <div>
      {blogs.map((blog) => {
        return blog.title;
      })}
    </div>
  );
}

export default Cell;
