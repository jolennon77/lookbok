import React, { useEffect } from 'react';
import './WeatherCard.css';
import Weather from "./weather_Icon/Weather";
import { WiDust, WiHumidity } from "react-icons/wi";
import ClothingRecommendation from '../look/ClothingRecommendation';

const WeatherCard = ({ weather, locationName }) => {
  useEffect(() => {
    console.log('날씨데이터확인', weather);
  });

  const currentDate = new Date().toLocaleDateString('ko-KR', {
    month: 'long',
    day: 'numeric',
    weekday: 'short',
    hour12: false,
    hour: 'numeric',
    minute: 'numeric'
  });

  return (
      <div className="card">
        <div className="card-header">
          <div>
            <span className="location">{locationName}</span>
            <div className="date">{currentDate}</div>
            <div className="container"></div>
            <div className="info_container">
              <Weather condition={weather.weather[0].icon} />
              <div>
                <span className="temp">{Math.floor(weather.main.temp)}°</span>
                <div className="weather_detail">
                  <div>{weather.weather[0].main}</div>
                  <div className="weather_detail2">
                  <span>
                    <div className="weather_mini_icon"><WiHumidity /></div>
                    <div>습도 : {weather.main.humidity}</div>
                  </span>
                    <span>
                    <div className="weather_mini_icon"><WiDust /> </div>
                    <div> 구름 : {weather.clouds.all} </div>
                  </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ClothingRecommendation temp={Math.floor(weather.main.temp)}  />
        </div>
      </div>
  );
};

export default WeatherCard;
