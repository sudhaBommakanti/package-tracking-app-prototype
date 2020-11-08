import React from "react";
import { Link } from "react-router-dom";
import SearchComponent from "../templates/SearchComponent";

export default function Header() {
  return (
    <nav className="nav">
      <Link to="/">
        <i className="fas fa-3x fa-arrow-left icon-title"></i>
      </Link>
      <SearchComponent />
    </nav>
  );
}
