import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const navStyle = {
    color: "white",
    width: "50%",
  };

  const iconStyle = {
    width: "50%",
  };

  return (
    <footer>
      <nav className="footer-nav">
        <ul className="footer-nav-links">
          <Link to="/" style={navStyle}>
            <li>
              <span className="span-li-item">
                <i className="fas fa-1x fa-box" style={iconStyle}></i>Home
              </span>
            </li>
          </Link>
          <Link to="/contact" style={navStyle}>
            <li>
              <span className="span-li-item">
                <i className="far fa-2x fa-address-book" style={iconStyle}></i>
                Contact
              </span>
            </li>
          </Link>
          <Link to="/profile" style={navStyle}>
            <li>
              <span className="span-li-item">
                <i className="fas fa-2x fa-user" style={iconStyle}></i>Profile
              </span>
            </li>
          </Link>
        </ul>
      </nav>
    </footer>
  );
}
