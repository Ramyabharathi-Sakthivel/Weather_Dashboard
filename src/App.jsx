import WeatherByDate from "./components/WeatherByDate";
import Statistics from "./components/Statistics";

function App() {
  return (
    <div className="container">
      <h1>Delhi Weather Dashboard</h1>
      <WeatherByDate />
      <Statistics />
    </div>
  );
}

export default App;
