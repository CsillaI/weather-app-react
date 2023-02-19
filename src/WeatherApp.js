import "bootstrap/dist/css/bootstrap.css";
import "./WeatherApp.css";
import Search from "./Search.js";
import Weather from "./Weather.js";

import Forecast from "./Forecast.js";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="WeatherApp container text-center">
        <div className="row wrapping">
          <div className="col-12 border">
            <div className="row main-weather-elemts-row">
              <div className="col-12">
                <Search />
                <Weather />
              </div>
            </div>
            <Forecast />
          </div>
        </div>
      </div>
    </div>
  );
}
