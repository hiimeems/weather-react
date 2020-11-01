import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    condition: "cloudy",
    date: "sep",
    description: "partly cloudy icon",
    humidity: 24,
    imgUrl: "http://openweathermap.org/img/wn/10d@2x.png",
    temp: 24,
    today: "mon 9.28",
  };

  return (
    <div className="Weather">
      <div className="container">
        <div className="weather-app">
          <h1>Weather Now or Later</h1>
          <form>
            <input
              type="search"
              placeholder="enter city here"
              className="search-button"
            />
            <input type="submit" value="search" className="btn btn-info" />
            <button className="btn btn-success" w-100>
              current
            </button>
          </form>
          <div className="row">
            <div className="col-4">
              <ul className="today">
                <li>{weatherData.city}</li>
                <li>{weatherData.today}</li>
                <li>{weatherData.date}</li>
              </ul>
            </div>
            <div className="col-4">
              <div className="clearfix new-temp">
                <div className="float-left">{weatherData.temp}</div>
                <span className="float-right">
                  <a href="/">°C</a> |
                  <a href="/">
                    <strong>°F</strong>
                  </a>
                </span>
              </div>
            </div>
            <div className="col-4">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="image-icon"
              />
              <br />
            </div>
          </div>

          <ul className="update">
            <hr />
            <li>condition:</li>
            <li>humidity: %</li>

            <hr />
          </ul>

          <div className="row weather-forecast"></div>
        </div>
      </div>
      <small>
        <a href="https://github.com/hiimeems/shecodes-weather-app">
          <strong>
            <i>open source code </i>
          </strong>
        </a>
        by michelle chung
      </small>
    </div>
  );
}
