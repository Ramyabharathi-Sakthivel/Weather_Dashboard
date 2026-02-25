import { useState } from "react";
import { getWeatherByDate } from "../services/dataService";

function WeatherByDate() {
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState(null);

  const search = async () => {
    const result = await getWeatherByDate(date);

    setWeather(result);
  };

  return (
    <div className="box">
      <h2>Weather By Date</h2>

      <input
        value={date} onChange={(e) => setDate(e.target.value)} placeholder="YYYY-MM-DD"/>
      <button onClick={search}>Get Weather</button>

      {weather && (
        <div className="result">
          <p>Temperature: {weather.temperature} °C</p>
          <p>Humidity: {weather.humidity}</p>
          <p>Pressure: {weather.pressure}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherByDate;
