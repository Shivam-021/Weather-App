import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "b673a72816f4a5cdefcc4473ddd144da";

  let getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) throw new Error("City not found");
    let jsonResponse = await response.json();

    return {
      city: jsonResponse.name,  
      temp: jsonResponse.main.temp,
      tempmin: jsonResponse.main.temp_min,
      tempmax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelslike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
  };

  let handleChange = (event) => {
    setCity(event.target.value);
    setError(false);
  };

  let onHandleSubmit = async (event) => {
    event.preventDefault();
    setError(false);

    try {
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);  
      setCity("");
    } catch {
      setError(true);
    }
  };

  return (
    <div className="searchbox">
      <form onSubmit={onHandleSubmit}>
        <TextField label="City Name" variant="outlined" onChange={handleChange} value={city} required />
        &nbsp;&nbsp;&nbsp;
        <Button variant="contained" type="submit">  Search</Button>
        {error && <p style={{ color: "red" }}>NO SUCH PLACE EXISTS!</p>}
      </form>
    </div>
  );
}

