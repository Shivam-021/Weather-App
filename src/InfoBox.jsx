import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const RAIN_URL =
    "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFJBSU4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const HOT_URL =
    "https://media.istockphoto.com/id/1332108668/photo/heatwave-with-warm-thermometer-and-fire-global-warming-and-extreme-climate-environment.webp?a=1&b=1&s=612x612&w=0&k=20&c=TD95uCJmBIrWzvqYSoG5v1bb0gbaUXof4RN8xWop_qg=";
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  return (
    <div className="infobox">
    <Box  display="flex" justifyContent="center" mt={3}>
      <Card sx={{ maxWidth: 360, width: "100%", textAlign: "center" }}>
        <CardMedia
          sx={{ height: 100}}
          image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
          title="Weather Image"
        />
         
        <Typography variant="h6" sx={{ mt: 1, color: "primary.main" }}>
          📍 {info.city}
        </Typography>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {info.weather}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
            <p>🌡 Temperature: {info.temp}°C</p>
            <p>💧 Humidity: {info.humidity}%</p>
            <p>🔻 Min Temp: {info.tempmin}°C</p>
            <p>🔺 Max Temp: {info.tempmax}°C</p>
            <p>🤔 Feels Like: {info.feelslike}°C</p>
            
          </Typography>
        </CardContent>
         
      </Card>
    </Box>
    </div>
  );
}

