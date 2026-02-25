import Papa from "papaparse";

let dataset = [];
let loaded = false;

export const loadCSV = () => {
  return new Promise((resolve) => {
    if (loaded) {
      resolve();
      return;
    }

    Papa.parse("/weather.csv", {
      download: true,
      header: true,
      skipEmptyLines: true,

      complete: (results) => {
        dataset = results.data;
        loaded = true;

        console.log("Loaded rows:", dataset.length);
        console.log("Sample row:", dataset[0]);

        resolve();
      },
    });
  });
};

export const getWeatherByDate = async (date) => {
  await loadCSV();

  /* Convert YYYY-MM-DD → YYYYMMDD */

  const formatted = date.replaceAll("-", "");

  const row = dataset.find((item) => {
    return item.datetime_utc && item.datetime_utc.startsWith(formatted);
  });

  if (!row) {
    alert("No data found");

    return null;
  }

  const temperature = row["_tempm"] || row[" _tempm"];
  const humidity = row["_hum"] || row[" _hum"];
  const pressure = row["_pressurem"] || row[" _pressurem"];
  const condition = row["conds"];

  return {
    condition,
    temperature,
    humidity,
    pressure,
  };
};

export const getMonthlyStats = async (year, month) => {
  await loadCSV();

  const filtered = dataset.filter((item) => {
    if (!item.datetime_utc) return false;

    const y = item.datetime_utc.substring(0, 4);
    const m = item.datetime_utc.substring(4, 6);

    return y == year && Number(m) == month;
  });

  if (filtered.length === 0) {
    alert("No data found");

    return null;
  }

  const temps = filtered.map((x) => Number(x["_tempm"] || x[" _tempm"]));

  temps.sort((a, b) => a - b);

  return {
    max: temps[temps.length - 1],
    min: temps[0],
    median: temps[Math.floor(temps.length / 2)],
  };
};
