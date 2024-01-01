import React, { useState, useEffect } from "react";

const WeatherApiExample = () => {
  const [weatherData, setWeatherData] = useState(null);

  const [city, setCity] = useState("Greater Noida");
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const apiKey = "a84da307c96c4a89887135803240101"; // Replace with your actual API key


  // Fetching data from API
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [apiKey, city]);


  // DIsplaying content and Data from API in a specific Format
  return (
    <div>
      <h1>Weather Information for {city}</h1>
      <div>
        <label htmlFor="cityInput">Enter City:</label>
        <input
          type="text"
          id="cityInput"
          value={city}
          onChange={handleInputChange}
        />
        <p>Current City: {city}</p>
      </div>
      {weatherData && (
        <div>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
          <p>Wind: {weatherData.current.wind_kph} km/h</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApiExample;
