import React from "react";
import "./Weather.css";

import Location from "./Location.js";

import WeatherIcon from "./WeatherIcon.js";
import Temperature from "./Temperature.js";
import WeatherDetails from "./WeatherDetails.js";

export default function Weather() {
  return (
    <div className="Weather">
      <div
        className="d-md-flex"
        style={{ marginTop: "10px", marginBottom: "40px" }}
      >
        <Location />
        <WeatherIcon />
        <Temperature />
        <WeatherDetails />
      </div>
    </div>
  );
}
