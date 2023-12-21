import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

function Mobiles() {
  const proStyle = {
    color: "black" // Adjusted the style property name to lowercase
  };

  return (
    <div>
      <ul className="mobList">
        <li>
          <Link to="iphone" style={proStyle}>
            Iphone
          </Link>
        </li>
        <li>
          <Link to="samsung" style={proStyle}>
            Samsung
          </Link>
        </li>
        <li>
          <Link to="oneplus" style={proStyle}>
            OnePlus
          </Link>
        </li>
      </ul>

      <Routes>
        <Route
          path="iphone"
          element={
            <div>
              <h2 style={proStyle}>Iphone Details</h2>
              {/* Additional content for the Iphone page */}
            </div>
          }
        />
        <Route
          path="samsung"
          element={
            <div>
              <h2 style={proStyle}>Samsung Details</h2>
              {/* Additional content for the Samsung page */}
            </div>
          }
        />
        <Route
          path="oneplus"
          element={
            <div>
              <h2 style={proStyle}>OnePlus Details</h2>
              {/* Additional content for the OnePlus page */}
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default Mobiles;

