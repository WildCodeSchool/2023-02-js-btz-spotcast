import React, { useEffect, useState } from "react";
import axios from "axios";
import Wind from "../components/widgets/wind/Wind";
import NavBar from "../components/widgets/navbar/NavBar"
import "./Dashboard.css";
import Tide from "../components/widgets/tide/Tide";
import Sunset from "../components/widgets/sunset/Sunset";


const Dashboard = () => {
  //Setting up a realtime clock
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function () {
      clearInterval(timer);
    };
  });

  const timeStamp = 
  `${date.getFullYear()}-${String(date.getMonth() +1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}T${String(date.getHours()).padStart(2,"0")}:00`;

  //fetching the wind infos
  const [wind, setWind] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=42.47&longitude=-1.56&hourly=windspeed_10m,winddirection_10m"
      )
      .then((res) => res.data)
      .then((data) => {
        setWind(data.hourly);
      });
  }, []);

  //getting the index of current time in 'wind' array
  const [timeStampIndex, setTimeStampIndex] = useState('');

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
      <Tide
        date={date}
      />
      <NavBar/>
      <Sunset />
    </div>
  );
};

export default Dashboard;
