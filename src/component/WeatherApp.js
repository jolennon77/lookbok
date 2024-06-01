import React, { useState, useEffect } from 'react';
import WeatherCard from "./WeatherCard";
import WeatherHourly from "./WeatherHourly"; // 추가
import './WeatherApp.css';

const WeatherApp = () => {
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]); // 추가
  const [loading, setLoading] = useState(true);
  const [locationName, setLocationName] = useState('');

  useEffect(() => {
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
    if (location.latitude && location.longitude) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&lang=kr&appid=5875c07a24e6e9876697423c7192dc2d&units=metric`)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching weather:', error));

      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&lang=kr&appid=5875c07a24e6e9876697423c7192dc2d&units=metric`)
      .then(response => response.json())
      .then(data => {
        setForecast(data.list);
      })
      .catch(error => console.error('Error fetching forecast:', error));

      fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${location.latitude}&lon=${location.longitude}`)
      .then(response => response.json())
      .then(data => {
        let location = data.address.city + ' ' +data.address.borough +  ' ' + data.address.suburb;
        setLocationName(location);
      })
      .catch(error => console.error('Error fetching location:', error));
    }
  }, [location]);

  return (
      <div>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <div className="WeatherApp">
              <WeatherCard weather={weather} locationName={locationName} />
              <WeatherHourly forecast={forecast} /> {/* 추가 */}
            </div>
        )}
      </div>
  );
};

export default WeatherApp;
