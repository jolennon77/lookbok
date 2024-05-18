import React, { useState, useEffect } from 'react';
import WeatherCard from "./WeatherCard";
import './WeatherApp.css'

const WeatherApp = () => {
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [locationName, setLocationName] = useState('');

  useEffect(() => {
    // 사용자의 현재 위치 가져오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      });
    }
  }, []);

  useEffect(() => {
    // OpenWeatherMap API로 날씨 정보 가져오기
    if (location.latitude && location.longitude) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&lang=kr&appid=5875c07a24e6e9876697423c7192dc2d&units=metric&units=metric`)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching weather:', error));

      // Nominatim API로 주소 가져오기
      fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${location.latitude}&lon=${location.longitude}`)
      .then(response => response.json())
      .then(data => {
        let location = data.address.city + ' ' +data.address.borough +  ' ' + data.address.suburb
        setLocationName(location);
      })
      .catch(error => console.error('Error fetching location:', error));
    }



    //대기질 API 가져오기


  }, [location]);

  // 현재 날짜 가져오기


  return (
      <div>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <div className="WeatherApp">
              <WeatherCard weather={weather}
                           locationName={locationName}/>
              {/*<WeatherHourly latitude={location.latitude} longitude={location.longitude} />*/}
            </div>

        )}

      </div>
  );
};

export default WeatherApp;
