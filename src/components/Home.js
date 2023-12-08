import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  return (
    <div id="home" style={{ textAlign: "center", marginTop: "20px" }}>
      <h1 style={{ color: "firebrick" }}>
        Welcome, {Chris}!
      </h1>
      <p style={{ fontSize: "18px" }}>
        Explore the world of web development with me, a Web Developer from {Nairobi}.
      </p>
      <p style={{ fontSize: "16px", color: "#555" }}>
        Let's build amazing things together!
      </p>
    </div>
  );
}

export default Home;
