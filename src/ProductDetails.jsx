import React from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Product not found</h2>
        <Link to="/">⬅ Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><b>Price:</b> ₹{product.price}</p>
      <Link to="/">
        <button>⬅ Back to Home</button>
      </Link>
    </div>
  );
}

export default ProductDetails;
