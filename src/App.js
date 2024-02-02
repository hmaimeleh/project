import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [location, setLocation] = useState('');
  const [weatherReport, setWeatherReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeatherReport = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get('https://weatherapi-com.p.rapidapi.com/current.json', {
        params: {
          q: location
        },
        headers: {
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
          'x-rapidapi-key':  'a8566c22ffmsh9074052da1335e6p157d33jsn3bd41f3ea003',
        }
      });
      setWeatherReport(response.data);
    } catch (error) {
      setError('Error fetching weather data. Please try again.');
      setWeatherReport(null);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (location.trim() !== '') {
      fetchWeatherReport();
    }
  };

  return (

    <div className="App">
      <h1 style={{ color: 'blue', fontSize: '24px' }}>Weather Forecast </h1>


      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your city"
          value={location}
          onChange={handleInputChange}
        />
        <button type="submit">Click</button>
      </form>


      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weatherReport && (

        <div>
          <h2>The Current Weather in {weatherReport.location.name}, {weatherReport.location.country}</h2>
          <p>Condition: {weatherReport.current.condition.text}</p>
          <p>Temperature: {weatherReport.current.temp_c}°C</p>
        </div>

      )}

    </div>
  );
}

export default App;