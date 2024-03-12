import React from "react";
import { image } from "../data/data";
import "./About.css"; // Import CSS file for component styles

function About() {
  return (
    <div id="about" className="about-container">
      <h2 className="about-heading">About Me</h2>
      <p className="about-description">
        Hey there! I'm excited to share a bit about myself with you.
      </p>
      <p className="about-content">
        This is my awesome content! 🚀
      </p>
      <img src={image} alt="I made this" className="about-image" />
    </div>
  );
}

export default About;

