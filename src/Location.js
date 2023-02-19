import React from "react";
import "./Location.css";

export default function Location() {
  return (
    <div className="Location">
      <div className="time-date-wrapper">
        <h2 className="d-md-flex city" id="city">
          Cluj-Napoca
        </h2>
        <div className="d-sm-inline-flex">
          <span className="today" id="current-day">
            Sunday,
          </span>
          <span className="date-main" id="current-date">
            {" "}
            Jan 29
          </span>
        </div>
        <div className="d-sm-flex time-main" id="current-time">
          20:00
        </div>
      </div>
    </div>
  );
}
