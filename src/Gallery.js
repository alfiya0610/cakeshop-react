import React from "react";
import chocolate from "./assets/chocolate.jpg";
import vanilla from "./assets/vanilla.jpg";
import redvelvet from "./assets/redvelvet.jpg";

function Gallery() {
  const cakes = [
    { id: 1, name: "Chocolate Cake", image: chocolate },
    { id: 2, name: "Vanilla Cake", image: vanilla },
    { id: 3, name: "Red Velvet Cake", image: redvelvet },
  ];

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>🍰 Our Cake Gallery</h2>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {cakes.map((cake) => (
          <div key={cake.id} style={{ textAlign: "center" }}>
            <img
              src={cake.image}
              alt={cake.name}
              width="200"
              height="200"
              style={{ borderRadius: "10px", objectFit: "cover" }}
            />
            <p>{cake.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;