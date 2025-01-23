import React from 'react';

function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <h2>Weather in {data.city}</h2>
      <p>Temperature: {data.temperature}°C</p>
      <p>Description: {data.description}</p>
      <p>Time: {new Date(data.timestamp).toLocaleString()}</p>
    </div>
  );
}

export default WeatherCard;
