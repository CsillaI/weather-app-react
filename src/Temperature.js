import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <div
        className="d-sm-inline-flex temperature-wrapper"
        style={{ marginTop: "30px" }}
      >
        <h1 className="d-sm-inline-flex">
          <span className="temperature-main" id="temperature-main">
            1
          </span>
          <span className="d-sm-inline-flex units">
            <a href="/" className="celsius active" id="celsius">
              &deg;C<span className="units-separator">|</span>
            </a>
            <a href="/" className="fahrenheit" id="fahrenheit">
              &deg;F
            </a>
          </span>
        </h1>
      </div>
    </div>
  );
}
