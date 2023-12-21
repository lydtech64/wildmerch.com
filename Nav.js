import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Nav({ user, cart, isLoggedIn, handleLogout }) {
  const navStyle = {
    color: "white"
  };

  return (
    <nav>
      <ul className="nav-links">
        <li>
          <Link style={navStyle} to="/shop">
            Home
          </Link>
        </li>
        <li>
          <Link style={navStyle} to="/about">
            About
          </Link>
        </li>
        <li>
          {cart && (
            <Link style={navStyle} to="/cart">
              Cart ({cart.length})
            </Link>
          )}
        </li>
        <li>
          {isLoggedIn ? (
            <>
              <Link style={navStyle} to="/account">
                Welcome {`${user.lastName} ${user.firstName}`}
              </Link>
              <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
                Log Out
              </button>
            </>
          ) : (
            <Link style={navStyle} to="/login">
              Log In
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
