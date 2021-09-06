import React, { useState, useEffect } from "react";
import axios from "axios";

function Cell({ blogsID, load, pageNumber }) {
  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    setBlog([]);
    blogsID?.forEach((id) => {
      getData(id);
    });
  }, [pageNumber]);
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
        return (
          <div
            style={{
              backgroundColor: "black",
              marginBottom: "10px",
              padding: "20px",
              border: "2px",
              color: "white",
              borderRadius: "30px",
            }}
            key={blog.id}
          >
            <div style={{ padding: "10px" }}>
              {blog.title}{" "}
              <a
                href={blog.url}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  fontSize: "14px",

                  fontWeight: "100",
                  color: "gray",
                }}
              >
                ({blog.url?.split("/")[2]?.split("www.")})
              </a>
            </div>
            <div
              style={{
                padding: "10px",
                fontSize: "14px",
                fontWeight: "100",
                color: "gray",
              }}
            >
              {blog.score} points by {blog.by}
              <span style={{ float: "right" }}>
                {blog.kids?.length} comments{" "}
                {Math.round(
                  (Math.floor(Date.now() / 1000) - blog.time) / (60 * 60)
                )}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cell;
