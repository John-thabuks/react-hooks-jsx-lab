import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <div>
        {/* Home Section */}
        <Home />

        {/* About Me Section */}
        <About />
      </div>
    </>
  );
}

export default App;