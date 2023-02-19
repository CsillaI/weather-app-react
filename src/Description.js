import React from "react";
import "./Description.css";

export default function Description() {
  return (
    <div className="Description">
      <div
        className="d-sm-flex align-content-sm-left weather-description"
        id="weather-description"
      ></div>

      <hr className="horizontal-line" />
    </div>
  );
}
