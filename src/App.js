// src/App.js
import React from "react";
import Gallery from "./Gallery";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        🎂 Welcome to Cake Shop 🎂
      </h1>

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default App;