import React, {useState, useEffect} from 'react';
import './WeatherCard.css';
import Weather from "./weather_Icon/Weather";
import Look from "../look/Look";
import {WiDust, WiHumidity} from "react-icons/wi";

const WeatherCard = ({weather, locationName}) => {
  useEffect(() => {
    console.log('날씨데이터확인')
    console.log(weather)
  })

  const currentDate = new Date().toLocaleDateString('ko-KR', {
    month: 'long',
    day: 'numeric',
    weekday: 'short',
    hour12: false, // 24시간 형식으로 변경
    hour: 'numeric',
    minute: 'numeric'
  });



  return (
      <div className="card">


        <div className="card-header">
          <span className="location">{locationName}</span>
          <span className="date">{currentDate}</span>
          <div className="container">
          </div>
          <div className="info_container">
            {/*<Weather condition={"11d"}/>*/}
            {/*<Weather condition={"13d"}/>*/}
            <Weather condition={weather.weather[0].icon}/>
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
                  <div> 미세먼지 : {weather.main.humidity} </div>
                </span>
              </div>
              </div>
            </div>

            <Look></Look>
          </div>
        </div>

      </div>
  );
};

export default WeatherCard;
