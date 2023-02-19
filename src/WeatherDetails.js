import React from "react";
import "./WeatherDetails.css";
import Description from "./Description.js";
import FeelsLike from "./FeelsLike.js";
import Wind from "./Wind.js";
import Humidity from "./Humidity.js";

export default function WeatherDetails() {
  return (
    <div className="WeatherDetails">
      <div
        className="d-sm-inline-flex more-weather-details-wrapper"
        style={{ marginLeft: "30px" }}
      >
        <h4>
          <div
            className="d-flex flex-column more-details"
            style={{ marginTop: "30px" }}
          >
            <Description />
            <FeelsLike />
            <Wind />
            <Humidity />
          </div>
        </h4>
      </div>
    </div>
  );
}
