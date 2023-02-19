import React from "react";
import "./Humidity.css";

export default function Humidity() {
  return (
    <div className="Humidity">
      <div className="more-details-boxes">
        Humidity:
        <div className="p-1 d-inline-flex humidity-main" id="humidity-main">
          80%
        </div>
      </div>
    </div>
  );
}
