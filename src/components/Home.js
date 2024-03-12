import React from "react";
import { name, city } from "../data/data.js";
import "./Home.css"; // Import CSS file for component styles

function Home() {
  return (
    <div id="home" className="home-container">
      <h1 className="home-heading">
        Welcome, {name}!
      </h1>
      <p className="home-description">
        Explore the world of web development with me, a Web Developer from {city}.
      </p>
      <p className="home-message">
        Let's build amazing things together!
      </p>
    </div>
  );
}

export default Home;
