import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about" style={{ textAlign: "center", marginTop: "20px" }}>
      <h2 style={{ color: "#333" }}>About Me</h2>
      <p style={{ fontSize: "16px", color: "#555" }}>
        Hey there! I'm excited to share a bit about myself with you.
      </p>
      <p style={{ fontSize: "18px" }}>
        This is my awesome content! 🚀
      </p>
      <img src={image} alt="I made this" style={{ maxWidth: "100%", borderRadius: "8px", marginTop: "20px" }} />
    </div>
  );
}

export default About;

