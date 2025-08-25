import React from "react";
import { Link } from "react-router-dom";

function ProductList() {
  return (
    <div>
      <h1>Our Cakes</h1>
      <ul>
        <li>
          Chocolate Cake
          <Link to="/product-details"><button>View Details</button></Link>
        </li>
      </ul>
    </div>
  );
}

export default ProductList;
