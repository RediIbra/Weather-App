import React from "react";
import "./style.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather-content">
      <div className="top-weather">
        <div className="icon">
          <img
            alt="weather"
            src={`icons-weather/${data.weather[0].icon}.png`}
            className="weather-img"
            width={80}
            height={80}
          />
        </div>
        <div
          className="temperature"
          style={{
            color: `${
              data.main.temp_max > 35
                ? "red"
                : data.main.temp_max < 20
                ? "blue"
                : "white"
            }`,
          }}
        >
          {Math.round(data.main.temp_max)}°C
        </div>
      </div>

      <div className="second-weather">
        <div className="city-content">
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <div className="label-details">
          <div className="parameter-span">Wind:</div>
          <div className="parameter-span">Humidity:</div>
        </div>
        <div className="details">
          <div className="parameter-value">{data.wind.speed}m/s</div>
          <div className="parameter-value">{data.main.humidity}%</div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
