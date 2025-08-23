import React from "react";

function App() {
  const products = [
    { name: "Chocolate Cake", description: "Rich and creamy chocolate flavor", price: 500 },
    { name: "Vanilla Cake", description: "Classic vanilla sponge with cream", price: 400 },
    { name: "Red Velvet Cake", description: "Delicious red velvet with cheese frosting", price: 600 }
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>🍰 Welcome to Cake Shop</h1>

      <h2>Our Cakes</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((product, index) => (
          <li 
            key={index} 
            style={{ 
              margin: "15px auto", 
              padding: "10px", 
              border: "1px solid #ccc", 
              borderRadius: "10px", 
              width: "300px", 
              background: "#f9f9f9" 
            }}
          >
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><b>Price:</b> ₹{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
