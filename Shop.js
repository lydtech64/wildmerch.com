import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

// Import store images
import store1Image from "./SSG.jpg";
import store2Image from "./GDSC.jpg";
import store3Image from "./CSS.jpg";

// Components for each store
function Store1() {
  return <div>Content for Store 1</div>;
}

function Store2() {
  return <div>Content for Store 2</div>;
}

function Store3() {
  return <div>Content for Store 3</div>;
}

function Shop() {
  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  };

  const storeLinkStyle = {
    textDecoration: "none",
    color: "#333",
    textAlign: "center",
  };

  const imageStyle = {
    maxWidth: "100%",
    border: "1px solid #ddd",
    borderRadius: "8px",
  };

  const storeNameStyle = {
    marginTop: "8px",
    fontWeight: "bold",
  };

  return (
    <div style={gridContainerStyle}>
      {/* Store 1 */}
      <Link to="/shop/store1" style={storeLinkStyle}>
        <img src={store1Image} alt="Store 1" style={imageStyle} />
        <p style={storeNameStyle}>SSG</p>
      </Link>

      {/* Store 2 */}
      <Link to="/shop/store2" style={storeLinkStyle}>
        <img src={store2Image} alt="Store 2" style={imageStyle} />
        <p style={storeNameStyle}>GDSC</p>
      </Link>

      {/* Store 3 */}
      <Link to="/shop/store3" style={storeLinkStyle}>
        <img src={store3Image} alt="Store 3" style={imageStyle} />
        <p style={storeNameStyle}>CSS</p>
      </Link>

      {/* Routes for each store */}
      <Routes>
        <Route path="/shop/store1" element={<Store1 />} />
        <Route path="/shop/store2" element={<Store2 />} />
        <Route path="/shop/store3" element={<Store3 />} />
      </Routes>
    </div>
  );
}

export default Shop;
