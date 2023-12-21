import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

// Import product images
import product1Image from "./cssp1.jpg";
import product2Image from "./cssp2.jpg";
import product3Image from "./cssp3.jpg";

function Store({ storeName }) {
  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  };

  const productLinkStyle = {
    textDecoration: "none",
    color: "#333",
    textAlign: "center",
  };

  const imageStyle = {
    maxWidth: "100%",
    border: "1px solid #ddd",
    borderRadius: "8px",
  };

  const productNameStyle = {
    marginTop: "8px",
    fontWeight: "bold",
  };

  return (
    <div style={gridContainerStyle}>
      {/* Product 1 */}
      <Link to={`/shop/${storeName}/product1`} style={productLinkStyle}>
        <img src={product1Image} alt="Product 1" style={imageStyle} />
        <p style={productNameStyle}>Product 1</p>
      </Link>

      {/* Product 2 */}
      <Link to={`/shop/${storeName}/product2`} style={productLinkStyle}>
        <img src={product2Image} alt="Product 2" style={imageStyle} />
        <p style={productNameStyle}>Product 2</p>
      </Link>

      {/* Product 3 */}
      <Link to={`/shop/${storeName}/product3`} style={productLinkStyle}>
        <img src={product3Image} alt="Product 3" style={imageStyle} />
        <p style={productNameStyle}>Product 3</p>
      </Link>

      <Routes>
        {/* Routes for each product go here */}
        <Route
          path="/shop/:storeName/product1"
          element={
            <div>
              <h2>{storeName} - Product 1 Page</h2>
              {/* Additional content for Product 1 */}
            </div>
          }
        />
        <Route
          path="/shop/:storeName/product2"
          element={
            <div>
              <h2>{storeName} - Product 2 Page</h2>
              {/* Additional content for Product 2 */}
            </div>
          }
        />
        <Route
          path="/shop/:storeName/product3"
          element={
            <div>
              <h2>{storeName} - Product 3 Page</h2>
              {/* Additional content for Product 3 */}
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default Store;
