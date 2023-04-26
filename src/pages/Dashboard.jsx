import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Wind from '../components/widgets/wind/Wind';
import MeteoDay from '../components/widgets/meteo-day/MeteoDay';
import MeteoThreeDay from '../components/widgets/meteo-three-day/MeteoThreeDay';
import NavBar from '../components/widgets/navbar/NavBar';
import './Dashboard.css';
import Tide from '../components/widgets/tide/Tide';
import Sunset from '../components/widgets/sunset/Sunset';
import Login from '../../src/components/widgets/login/Login';
import Register from '../../src/components/widgets/login/Register';

const Dashboard = () => {
  //usdeState to check when the Open-Meteo API is loaded
  const [onLoadOpenMeteo, setOnLoadOpenMeteo] = useState(true);

  //Setting up a realtime clock
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 60000);
    return function () {
      clearInterval(timer);
    };
  });

  const timeStamp = `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}T${String(
    date.getHours()
  ).padStart(2, '0')}:00`;

  //fetching the wind infos
  const [wind, setWind] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.open-meteo.com/v1/forecast?latitude=42.47&longitude=-1.56&hourly=windspeed_10m,winddirection_10m'
      )
      .then((res) => res.data)
      .then((data) => {
        setWind(data.hourly);
        setOnLoadOpenMeteo(false);
      });
  }, []);

  //fetching the meteo infos
  const [meteo, setMeteo] = useState([]);
  const [onLoadMeteo, setOnLoadMeteo] = useState(true);

  useEffect(() => {
    axios
      .get(
        'https://api.open-meteo.com/v1/forecast?latitude=43.48&longitude=-1.56&hourly=temperature_2m,weathercode&timezone=Europe%2FBerlin'
      )
      .then((res) => res.data)
      .then((data) => {
        setMeteo(data.hourly);
        setOnLoadMeteo(false);
      });
  }, []);

  //fetching meteo infos at 3 day.
  const [meteo3D, setMeteo3D] = useState([]);
  const [onLoadMeteo3D, setOnLoadMeteo3D] = useState(true);

  useEffect(() => {
    axios
      .get(
        'https://api.open-meteo.com/v1/forecast?latitude=43.48&longitude=-1.56&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin'
      )
      .then((res) => res.data)
      .then((data) => {
        setMeteo3D(data.daily);
        setOnLoadMeteo3D(false);
      });
  }, []);

  //getting the index of current time in 'wind' array
  const [timeStampIndex, setTimeStampIndex] = useState('');

  useEffect(() => {
    wind.time && //checking if 'wind.time' is already loaded
      setTimeStampIndex(wind.time.indexOf(timeStamp));
  }, [wind.time]); //setup timeStampIndex after ' wind.time' is updated

  // all the UseStates for login popup
  const [currentForm, setCurrentForm] = useState('login');
  const [currentUserName, setCurrentUserName] = useState('Username');
  const [currentUserPicture, setCurrentUserPicture] = useState(
    'https://cdn.imgbin.com/5/6/5/imgbin-computer-icons-avatar-user-profile-photographer-yTHY2GAmFUKBhvVv8ikQwTMaH.jpg'
  );

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const [show, setShow] = useState(true);

  return (
    <div className="dashboard">
      {currentForm === 'login' ? (
        <Login
          setCurrentUserName={setCurrentUserName}
          setCurrentUserPicture={setCurrentUserPicture}
          onFormSwitch={toggleForm}
          show={show}
          setShow={setShow}
        />
      ) : (
        <Register show={show} setShow={setShow} onFormSwitch={toggleForm} />
      )}
      <NavBar
        setShow={setShow}
        show={show}
        currentUserName={currentUserName}
        currentUserPicture={currentUserPicture}
      />
      <div className="widgets-container">
        <Wind
          {...wind}
          timeStampIndex={timeStampIndex}
          onLoadOpenMeteo={onLoadOpenMeteo}
        />
        <Tide date={date} />
        <MeteoDay
          {...meteo}
          onLoadMeteo={onLoadMeteo}
          timeStampIndex={timeStampIndex}
        />
        <MeteoThreeDay meteo3D={meteo3D} onLoadMeteo3D={onLoadMeteo3D} />
        <Sunset />
      </div>
    </div>
  );
};

export default Dashboard;
