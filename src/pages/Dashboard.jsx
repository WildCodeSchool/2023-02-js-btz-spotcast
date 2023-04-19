import React, { useEffect, useState } from "react";
import axios from "axios";
import Wind from "../components/widgets/wind/Wind";
import ForecastCardBackground from "../components/forecast-cards/ForecastCardBackground";
import "./Dashboard.css";




const Dashboard = () => {





  //setting up Selected Spot 
  const [currentSpots, setCurrentSpots] = useState(
    [{
    id : 0,
    name : "Biarritz - La Côte des Basques",
    latitude : "43.48",
    longitude : "-1.56",
    webcam : "https://gosurf.fr/webcam/fr/84/Biarritz-La-Grande-Plage"
  }],
)


  //Setting up a realtime clock
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 60000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  //fetching the wind infos
  const [wind, setWind] = useState([]);
  
  useEffect(() => {
    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${currentSpots[0].latitude}&longitude=${currentSpots[0].longitude}&hourly=windspeed_10m,winddirection_10m`
      )
      .then((res) => res.data)
      .then((data) => {
        setWind(data.hourly);
      }); 
  }, []);

  

  //getting the index of current time in 'wind' array
  const [timeStampIndex, setTimeStampIndex] = useState('');

  const timeStamp = 
  `${date.getFullYear()}-${String(date.getMonth() +1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}T${String(date.getHours()).padStart(2,"0")}:00`;

  useEffect(() => {
    wind.time && //checking if 'wind.time' is already loaded
    setTimeStampIndex(wind.time.indexOf(timeStamp));
  }, [wind.time]); //setup timeStampIndex after ' wind.time' is updated

  return (
    <div className="dashboard">
      
      <Wind 
        {...wind} 
        timeStampIndex={timeStampIndex}
        />
        {currentSpots.map(currentSpot => (
          <ForecastCardBackground
          key={currentSpot.id}
          currentSpot={currentSpot}
          />
        ))}
    </div>
  );
};

export default Dashboard;
