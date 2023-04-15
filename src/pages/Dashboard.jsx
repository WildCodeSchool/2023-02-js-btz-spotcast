import React, { useEffect, useState } from "react";
import axios from "axios";
import Wind from "../components/widgets/wind/Wind";
import "./Dashboard.css";

const Dashboard = () => {
  //Setting up a realtime clock
  const [date, setDate] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  //fetching the wind infos
  const [wind, setWind] = useState([]);
  
  useEffect(() => {
    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=windspeed_10m,winddirection_10m"
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
    </div>
  );
};

export default Dashboard;
