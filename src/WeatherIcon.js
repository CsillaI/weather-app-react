import React from "react";
import "./WeatherIcon.css";

export default function WeatherIcon() {
  return (
    <div className="WeatherIcon">
      <div className="d-flex" style={{ textAlign: "right" }}>
        <div className="main-weather-icon-wrapper">
          <h3
            className="d-sm-inline-flex align-content-sm-center"
            style={{ marginLeft: "30px" }}
          >
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="partly cloudy"
              className="main-weather-icon"
              id="main-weather-icon"
            />
          </h3>
        </div>
      </div>
    </div>
  );
}
