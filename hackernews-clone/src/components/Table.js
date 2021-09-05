import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import axios from "axios";

const baseURL =
  "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";

function Table() {
  const [blogID, setBlogID] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    await axios
      .get(baseURL)
      .then((response) => {
        setBlogID((x) => [...x, response.data]);
        // console.log(response.data);
      })
      .catch((err) => {
        console.error("error", err);
      });
  }
  if (!blogID) return null;
  return (
    <div>
      <table>
        {console.log(blogID[0], "ues")}
        {/* {blogID.forEach((item, idx) => {
          console.log(idx);
          //   return <Cell id={item} />;
        })} */}
      </table>
    </div>
  );
}

export default Table;
