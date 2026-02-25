# Delhi Weather Dashboard

## Project Overview

Delhi Weather Dashboard is a React-based web application that analyzes a 20-year historical weather dataset of Delhi. The application allows users to retrieve weather details for a specific date and view monthly temperature statistics such as maximum, minimum, and median temperature.

The dataset contains more than 100,000 weather records including temperature, humidity, pressure, and weather conditions.

Features:

- Search weather details by date
- View monthly temperature statistics
- Displays:
  - Weather condition
  - Temperature
  - Humidity
  - Pressure
- Calculates:
  - Maximum temperature
  - Minimum temperature
  - Median temperature

Technologies Used:

- React.js
- JavaScript
- HTML
- CSS
- Vite
- PapaParse


## Setup and Run Instructions

1. Clone the repository

git clone https://github.com/Ramyabharathi-Sakthivel/Weather_Dashboard.git

2. Open project folder

cd Weather_Dashboard

3. Install dependencies

npm install

4. Run the application

npm run dev


## API Details

This project uses the PapaParse API to load and process the weather dataset.

PapaParse is used to:

- Load the weather.csv dataset
- Convert CSV data into JavaScript objects
- Process more than 100,000 records efficiently

Example:

Papa.parse("/weather.csv", {
 download: true,
 header: true
});

No external weather API is used.
No API key is required.
