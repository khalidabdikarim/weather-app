import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch('http://localhost:5000/api/weather/fetch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city }),
      });
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
      alert('Failed to fetch weather data. Please try again.');
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherForm onFetchWeather={fetchWeatherData} />
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
