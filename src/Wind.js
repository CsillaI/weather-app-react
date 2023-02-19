import React from "react";
import "./Wind.css";

export default function Wind() {
  return (
    <div className="Wind">
      <div className="more-details-boxes">
        Wind:
        <div className="p-1 d-inline-flex wind-main" id="wind-main">
          10 km/h
        </div>
      </div>
    </div>
  );
}
