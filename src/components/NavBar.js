import React from "react";

function NavBar() {
  return (
    <nav style={{ backgroundColor: "#333", padding: "10px", textAlign: "center" }}>
      <a href="#home" style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}>
        Home
      </a>
      <a href="#about" style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}>
        About
      </a>
    </nav>
  );
}

export default NavBar;

