import React from 'react';
import './WeatherHourly.css';
import Weather from "./weather_Icon/Weather";

const WeatherHourly = ({ forecast }) => {
  return (
      <div className="card">
      <div className="WeatherHourly">
        {forecast.slice(0, 8).map((weather, index) => (
            <div key={index} className="hourly-card">
              <div className="hourly-date">{new Date(
                  weather.dt * 1000).toLocaleDateString('ko-KR',
                  {month: 'long', day: 'numeric'})}</div>
              <div className="hourly-time">{new Date(
                  weather.dt * 1000).toLocaleTimeString('ko-KR',
                  {hour: '2-digit', minute: '2-digit'})}</div>
              <br/>
              <div>{Math.floor(weather.main.temp)}°C</div>
              <br/>
              <Weather condition={weather.weather[0].icon}/>
            </div>
        ))}
      </div>
      </div>
  );
};

export default WeatherHourly;
