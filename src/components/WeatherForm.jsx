import React, { useState } from 'react';

function WeatherForm({ onFetchWeather }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFetchWeather(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button type="submit">Fetch Weather</button>
    </form>
  );
}

export default WeatherForm;
