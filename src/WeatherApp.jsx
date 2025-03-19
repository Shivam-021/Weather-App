import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./SearchBox.css";

export default function WeatherApp() {

  const [weatherInfo, setWeatherInfo] =useState({
    city: "Delhi",
    feelslike: 24.84,
    temp: 25.05,
    tempmin: 25.05,
    tempmax: 25.05,
    humidity: 47,
    weather: "Haze",
  })

  let updateInfo =(newInfo)=>{
    setWeatherInfo(newInfo);
  }
  return (
    <>
    <div className="Weatherdata">
    <h2 className="weatherapp">Weather App </h2>
    <div>
       
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
    </div>
    </>
  );
}
