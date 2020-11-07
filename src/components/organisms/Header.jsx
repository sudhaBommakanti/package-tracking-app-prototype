import React from "react";
import { Link } from "react-router-dom";

// Media assets
import logo from "../../assets/images/logo2.png";

export default function Header() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav className="nav">
      <h3>logo</h3>
      <ul className="nav-links">
        <Link to="/" style={navStyle}>
          <li>Track</li>
        </Link>
        <Link to="/contact" style={navStyle}>
          <li>Contact</li>
        </Link>
        <Link to="/profile" style={navStyle}>
          <li>Profile</li>
        </Link>
      </ul>
    </nav>
  );
}
