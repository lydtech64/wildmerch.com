import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

function Product() {
  const proStyle = {
    color: "black" // Adjusted the style property name to lowercase
  };

  return (
    <div>
      <ul className="prodList">
        <li>
          <Link to="/shop/product/mobiles" style={proStyle}>
            Mobiles
          </Link>
        </li>
        <li>
          <Link to="/shop/product/watches" style={proStyle}>
            Watches
          </Link>
        </li>
        <li>
          <Link to="/shop/product/books" style={proStyle}>
            Books
          </Link>
        </li>
      </ul>

      <Routes>
        <Route
          path="mobiles"
          element={
            <div>
              <h2 style={proStyle}>Mobiles Page</h2>
              {/* Additional content for the Mobiles page */}
            </div>
          }
        />
        <Route
          path="watches"
          element={
            <div>
              <h2 style={proStyle}>Watches Page</h2>
              {/* Additional content for the Watches page */}
            </div>
          }
        />
        <Route
          path="books"
          element={
            <div>
              <h2 style={proStyle}>Books Page</h2>
              {/* Additional content for the Books page */}
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default Product;
