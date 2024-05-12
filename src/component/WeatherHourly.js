// import React, { useState, useEffect } from 'react';
// import './WeatherHourly.css';
//
// const WeatherHourly = ({ latitude, longitude }) => {
//   const [hourlyWeather, setHourlyWeather] = useState([]);
//   const [loading, setLoading] = useState(true);
//
//   useEffect(() => {
//     const fetchHourlyWeather = async () => {
//       try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=5875c07a24e6e9876697423c7192dc2d`);
//         const data = await response.json();
//         setHourlyWeather(data.list);
//         setLoading(false);
//         console.log(hourlyWeather);
//       } catch (error) {
//         console.error('Error fetching hourly weather data:', error);
//       }
//     };
//
//     fetchHourlyWeather();
//   }, [latitude, longitude]);
//
//   // 현재 시간을 기준으로 12시부터 21시까지 필터링
//   const filteredWeather = hourlyWeather.filter(hourData => {
//     const hour = new Date(hourData.dt * 1000).getHours();
//     return hour >= 12 && hour <= 21 && hour % 3 === 0;
//   });
//
//   return (
//       <div className="weather-slider">
//         {loading ? (
//             <p>Loading hourly weather...</p>
//         ) : (
//             filteredWeather.map((hourData, index) => (
//                 <div key={index} className="weather-card">
//                   {hourData.dt_txt}
//                   <p>{new Date(hourData.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
//                   <p>Temperature: {hourData.main.temp}°C</p>
//                   <p>Description: {hourData.weather[0].description}</p>
//                 </div>
//             ))
//         )}
//       </div>
//   );
// };
//
// export default WeatherHourly;
