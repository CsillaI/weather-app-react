import React from "react";
import "./FeelsLike.css";

export default function FeelsLike() {
  return (
    <div className="FeelsLike">
      <div className="more-details-boxes">
        Feels like:
        <div className="p-1 d-inline-flex feels-like-main" id="feels-like-main">
          25C
        </div>
      </div>
    </div>
  );
}
