import React from "react";
import "./NavBar.css"; // Import CSS file for component styles

function NavBar() {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-link">
        Home
      </a>
      <a href="#about" className="nav-link">
        About
      </a>
    </nav>
  );
}

export default NavBar;

