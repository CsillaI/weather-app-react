import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="mb-3" id="search-city">
        <input
          type="text"
          className="form-control shadow-sm"
          placeholder="Enter city name..."
          autoFocus="on"
          autoComplete="off"
          id="search-city-input"
        />
        <input
          type="submit"
          className="btn btn-primary shadow-sm search-button"
          value="Search"
        />
        <input
          type="submit"
          className="btn btn-secondary shadow-sm current-button"
          value="Current"
          id="current-button"
        />
      </form>
    </div>
  );
}
