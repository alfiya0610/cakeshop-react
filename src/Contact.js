// src/Contact.js
import React from "react";

function Contact() {
  return (
    <div>
      <h2>📩 Contact Us</h2>
      <form style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        <input type="text" placeholder="Enter your name" style={{ margin: "5px" }} />
        <input type="email" placeholder="Enter your email" style={{ margin: "5px" }} />
        <textarea placeholder="Write your message" style={{ margin: "5px" }} />
        <button type="submit" style={{ margin: "5px" }}>Send</button>
      </form>
    </div>
  );
}

export default Contact;