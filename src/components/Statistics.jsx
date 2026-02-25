import { useState } from "react";
import { getMonthlyStats } from "../services/dataService";

function Statistics() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");

  const [stats, setStats] = useState(null);

  const calculate = async () => {
    const result = await getMonthlyStats(year, month);

    setStats(result);
  };

  return (
    <div className="box">
      <h2>Monthly Statistics</h2>

      <input value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" />

      <input value={month} onChange={(e) => setMonth(e.target.value)} placeholder="Month" />

      <button onClick={calculate}>Get Statistics</button>

      {stats && (
        <div className="result">
          <p>Max Temp: {stats.max} °C</p>
          <p>Min Temp: {stats.min} °C</p>
          <p>Median Temp: {stats.median} °C</p>
        </div>
      )}
    </div>
  );
}

export default Statistics;
