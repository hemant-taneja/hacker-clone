import React from "react";

function Header() {
  return (
    <div
      style={{
        backgroundColor: "orange",
      }}
    >
      <span>LOGO</span>
      <span style={{ marginRight: "10px" }}>MyNews </span>
      <span>new | </span>
      <span>past | </span>
      <span>comments | </span>
      <span>jobs</span>
    </div>
  );
}

export default Header;
