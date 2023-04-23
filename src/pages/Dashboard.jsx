import React, { useEffect, useState } from "react";
import axios from "axios";
import Wind from "../components/widgets/wind/Wind";
import MeteoDay from "../components/widgets/meteo-day/MeteoDay"
import MeteoThreeDay from "../components/widgets/meteo-three-day/MeteoThreeDay"
import NavBar from "../components/widgets/navbar/NavBar"
import ForecastCardBackground from "../components/forecast-cards/ForecastCardBackground";
import "./Dashboard.css";
import Tide from "../components/widgets/tide/Tide";
import Sunset from "../components/widgets/sunset/Sunset";

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
        setOnLoadOpenMeteo(false);
      });
  }, []);

  //fetching the meteo infos
  const [meteo, setMeteo] = useState([]);
  const [onLoadMeteo, setOnLoadMeteo] = useState(true)

  useEffect(() => {
    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=43.48&longitude=-1.56&hourly=temperature_2m,weathercode&timezone=Europe%2FBerlin"
      )
      .then((res) => res.data)
      .then((data) => {
        setMeteo(data.hourly);
        setOnLoadMeteo(false)
      });
  }, []);

  //fetching meteo infos at 3 day.
  const [meteo3D, setMeteo3D] = useState([]);
  const [onLoadMeteo3D, setOnLoadMeteo3D] = useState(true)

  useEffect(() => {
    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=43.48&longitude=-1.56&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin"
      )
      .then((res) => res.data)
      .then((data) => {
        setMeteo3D(data.daily);
        setOnLoadMeteo3D(false)
      });
  }, []);

  //useState to check when the Open-Meteo API is loaded
  const [onLoadOpenMeteo, setOnLoadOpenMeteo] = useState(true);

  //Setting up a realtime clock
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 60000);
    return function () {
      clearInterval(timer);
    };
  });

  const timeStamp = 
  `${date.getFullYear()}-${String(date.getMonth() +1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}T${String(date.getHours()).padStart(2,"0")}:00`;

  //getting the index of current time in API array
  const [timeStampIndex, setTimeStampIndex] = useState('');

  useEffect(() => {
    wind.time && //checking if 'wind.time' is already loaded
      setTimeStampIndex(wind.time.indexOf(timeStamp));
  }, [wind.time]); //setup timeStampIndex after ' wind.time' is updated


  return (
    <div className="dashboard">
      <NavBar/>
      <div className="widgets-container">
        <Wind
          {...wind}
          timeStampIndex={timeStampIndex}
          onLoadOpenMeteo = {onLoadOpenMeteo}
        />
        <Tide
          date={date}
        />

         <MeteoDay
        {...meteo}
        onLoadMeteo={onLoadMeteo}
        timeStampIndex={timeStampIndex}
        />

        <MeteoThreeDay
        meteo3D={meteo3D}
        onLoadMeteo3D={onLoadMeteo3D}
        />

        <Sunset />

        {currentSpots.map(currentSpot => (
          <ForecastCardBackground
          key={currentSpot.id}
          currentSpot={currentSpot}
          />
        ))}
    </div>
  </div>
  );
};

export default Dashboard
