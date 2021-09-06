import React from "react";

function Header() {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "10vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        color: "white",
        marginBottom: "5vh",
        marginTop: "3vh",
        borderRadius: "50px 50px 50px 50px",
      }}
    >
      <span>LOGO</span>
      <span>MyNews </span>
      <span>new</span>
      <span>past</span>
      <span>comments</span>
      <span>jobs</span>
    </div>
  );
}

export default Header;
