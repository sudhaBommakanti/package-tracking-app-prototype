import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function SearchComponent() {
  const [query, setQuery] = useState("");
  return (
    <div className="search-bar">
      <input
        placeholder="Search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <Link to={`orderdetails/${query}`}>Search</Link>
    </div>
  );
}
