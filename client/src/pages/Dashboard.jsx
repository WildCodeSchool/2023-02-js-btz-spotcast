//Importing React Elements
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

//Importing Components
import Wind from '../components/widgets/wind/Wind';
import MeteoDay from '../components/widgets/meteo-day/MeteoDay';
import MeteoThreeDay from '../components/widgets/meteo-three-day/MeteoThreeDay';
import NavBar from '../components/widgets/navbar/NavBar';
import ForecastCardBackground from '../components/forecast-cards/ForecastCardBackground';
import Tide from '../components/widgets/tide/Tide';
import Sunset from '../components/widgets/sunset/Sunset';
import Muuri from 'muuri';
import Login from '../../src/components/widgets/login/Login';
import Register from '../../src/components/widgets/login/Register';
import DropdownMenu from '../components/widgets/Dropdown-menu/DropdownMenu';

//Importing CSS
import './Dashboard.css';
import './ResponsiveDashboard.css';


// instancier un useContext
export const selectedSpotsContext = createContext();
// instancier un state pour muuri true ou false
export const gridRefresh = createContext()

const Dashboard = () => {
  //Widget status
  const [formInfos, setFormInfos] = useState({
    'meteo-widget': true,
    'meteo3d-widget': true,
    'sun-widget': true,
    'tide-widget': true,
    'wind-widget': true,
  });

  

  //setting up Selected Spot
  const [selectedSpots, setSelectedSpots] = useState([
    {
      id: 0,
      name: 'Biarritz - La Côte des Basques',
      latitude: '43.48',
      longitude: '-1.56',
      webcam: 'https://gosurf.fr/webcam/fr/7/Biarritz-La-Cote-des-Basques',
    },
  ]);

  
  // Fetch of 'Surf Tides' database
  const[tides, setTides] = useState([])
  const [onLoadAllTides, setOnLoadAllTides] = useState(true)

  useEffect(() => {
    axios.get('/tides')
      .then(({ data }) => setTides(data))
      setOnLoadAllTides(false);
  }, []);

  

  // Fetch of 'Surf Spots' database

  const[allSpots, setAllSpots] = useState([])
  const [onLoadAllSpots, setOnLoadAllSpots] = useState(true)

  useEffect(()=>{
    axios
      .get(`/spots`)
      .then((res) => setAllSpots(res.data))
      setOnLoadAllSpots(false)
  }, [])


  useEffect(() => {
    axios.get(`/spots`).then((res) => setAllSpots(res.data));
    setOnLoadAllSpots(false);
  }, []);

  //useState to check when the Open-Meteo API is loaded
  const [onLoadOpenMeteo, setOnLoadOpenMeteo] = useState(true);

  //Setting up a realtime clock
  const [date, setDate] = useState(new Date());

  //getting time and date every hour
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 3600000);
    return function () {
      clearInterval(timer);
    };
  });

  //creating a time stamp written as the one in the API
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
        `https://api.open-meteo.com/v1/gfs?latitude=${selectedSpots[0].latitude}&longitude=${selectedSpots[0].longitude}&hourly=windspeed_10m,winddirection_10m&timezone=Europe%2FBerlin`
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
        `https://api.open-meteo.com/v1/gfs?latitude=${selectedSpots[0].latitude}&longitude=${selectedSpots[0].longitude}&hourly=temperature_2m,weathercode&timezone=Europe%2FBerlin`
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
        `https://api.open-meteo.com/v1/gfs?latitude=${selectedSpots[0].latitude}&longitude=${selectedSpots[0].longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin`
      )
      .then((res) => res.data)
      .then((data) => {
        setMeteo3D(data.daily);
        setOnLoadMeteo3D(false);
      });
  }, []);


  //getting the index of current time in API array
  const [timeStampIndex, setTimeStampIndex] = useState('');

  useEffect(() => {
    wind.time && //checking if 'wind.time' is already loaded
      setTimeStampIndex(wind.time.indexOf(timeStamp));
  }, [wind.time]); //setup timeStampIndex after ' wind.time' is updated

  // all the UseStates for login popup
  const [currentForm, setCurrentForm] = useState('login');
  const [currentUserName, setCurrentUserName] = useState('Doudou');
  const [currentUserPicture, setCurrentUserPicture] = useState(
    'https://i.pinimg.com/originals/f9/9c/f1/f99cf1db89af1ea64a7085eca75d98b2.jpg'
  );

  const toggleForm = (formName) => {
    setCurrentForm(formName);
    setEmail('');
    setPass('');
    setError('');
  };

  const toggleModal = () => {
    setShow(!show);
    setEmail('');
    setPass('');
    setError('');
  };

  const [show, setShow] = useState(true);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const [showDropMenu, setShowDropMenu] = useState(false);

//NE PAS TOUCHER
// Setting up the Muuri effect
const [grid, setGrid] = useState();
const [savedPositionsJSON, setSavedPositionsJSON] = useState("")

// créer use state avec savedPosiitons

useEffect(() => {
  const savedPositionsJSON = JSON.parse(localStorage.getItem('cardPositions'));

  console.log(savedPositionsJSON)
  setGrid(
    new Muuri('.grid', {
      dragEnabled: true,
      layoutDuration: 350,
      layoutEasing: 'ease-in-out',
      fillGaps: true,
      layoutOnResize: 0,
      sortData: {
        id: function (item, element) {
          return element.children[0].id;
        },
      },
    })
  );

  grid &&
  savedPositionsJSON.map((el, index) => {
    console.log(el.id)
    console.log(index)
    grid.move(el.id, index )
  })
  
}, []);


  

// génération de l'objet à envoyer dans le local Storage
  const itemsArray = grid && grid.getItems();
  const positions = grid && itemsArray.map((item) => {
  const element = item.getElement(); // Récupérer l'élément DOM de la carte
  //const position = item.getPosition(); // Récupérer la position de la carte dans la grille
   

  return {
    id : element.getAttribute('data-card-id'), // Identifiant unique de la carte (peut être personnalisé)
    /*x: position.left,
    y: position.top,*/
    };
  }
);

// Enregistrer les positions dans le local storage
// Resize Muuri grid
const [resizeGrid, setResizeGrid] = useState(true);

useEffect(() => {
  if (grid) {
    const positionsJSON = JSON.stringify(positions);
    localStorage.setItem('cardPositions', positionsJSON);
  }
  
}, [resizeGrid]);




useEffect(() => {
  grid && grid.refreshItems().layout();
  console.log(grid);
}, []);

useEffect(() => {
  grid && grid.refreshItems().layout();
}, [resizeGrid]);


  return (
    <div className={showDropMenu ? 'dashboard fixed' : 'dashboard'}>
      <selectedSpotsContext.Provider value={[selectedSpots, setSelectedSpots]}>
        <gridRefresh.Provider value={[resizeGrid, setResizeGrid]}> 
        <DropdownMenu
          formInfos={formInfos}
          setFormInfos={setFormInfos}
          showDropMenu={showDropMenu}
          setShowDropMenu={setShowDropMenu}
          currentUserName={currentUserName}
          currentUserPicture={currentUserPicture}
          setShow={setShow}
          show={show}
        />
        {currentForm === 'login' ? (
          <Login
            toggleModal={toggleModal}
            setCurrentUserName={setCurrentUserName}
            setCurrentUserPicture={setCurrentUserPicture}
            onFormSwitch={toggleForm}
            show={show}
            setShow={setShow}
            email={email}
            setEmail={setEmail}
            pass={pass}
            setPass={setPass}
            error={error}
            setError={setError}
          />
        ) : (
          <Register
            toggleModal={toggleModal}
            show={show}
            setShow={setShow}
            onFormSwitch={toggleForm}
          />
        )}
        <div
          className={show ? 'overlay-modal invisible' : 'overlay-modal'}
          onClick={toggleModal}></div>
        <NavBar
          setShow={setShow}
          show={show}
          showDropMenu={showDropMenu}
          setShowDropMenu={setShowDropMenu}
          currentUserName={currentUserName}
          currentUserPicture={currentUserPicture}
          allSpots={allSpots}
          onLoadAllSpots={onLoadAllSpots}
        />
        <div className="grid">
          <div className= 'item' data-card-id="1">
            <Wind
              {...wind}
              timeStampIndex={timeStampIndex}
              onLoadOpenMeteo={onLoadOpenMeteo}
              formInfos={formInfos}
              setFormInfos={setFormInfos}
            />
          </div>

          <div className='item' data-card-id= "2">
            <MeteoDay
              {...meteo}
              onLoadMeteo={onLoadMeteo}
              timeStampIndex={timeStampIndex}
              formInfos={formInfos}
              setFormInfos={setFormInfos}
            />
          </div>

          <div className='item'  data-card-id= "3">
            <Tide
              date={date}
              formInfos={formInfos}
              setFormInfos={setFormInfos}
              TideDatas={tides}
              onLoadAllTides ={onLoadAllTides}
            />
          </div>

          <div  className='item'  data-card-id= "4">
            <MeteoThreeDay
              meteo3D={meteo3D}
              onLoadMeteo3D={onLoadMeteo3D}
              formInfos={formInfos}
              setFormInfos={setFormInfos}
            />
          </div>
          <div className='item'  data-card-id= "5">
            <Sunset formInfos={formInfos} setFormInfos={setFormInfos} />
          </div>

          {selectedSpots.map((selectedSpot, index) => (
            <div className="item"   key={selectedSpot.id} data-card-id= {5+index}>
              <ForecastCardBackground

            
              selectedSpots={selectedSpot}
              timeStamp={timeStamp}
              tide={tides}
              onLoadAllTides={onLoadAllTides}

              />
            </div>
          ))}
         
        </div>
        </gridRefresh.Provider>
      </selectedSpotsContext.Provider>
    </div>
  );
};

export default Dashboard;
