import React from "react";
import "./Weatherapp.css";

const Weatherapp = () => {
  return (
    <div className="weather-template">
      <h1 className="title">Weather App</h1>
      <div className="weather-info">
        <h2 className="subtitle">Today's Weather</h2>
        <p className="location">Location: New York City</p>
        <p className="temperature">Temperature: 25°C</p>
        <p className="conditions">Conditions: Sunny</p>
      </div>
    </div>
  );
};

export default Weatherapp;
