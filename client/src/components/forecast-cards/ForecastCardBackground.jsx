import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { WhatsappShareButton } from "react-share";

//importing Components
import ForecastCardExtended from "./forecast-card-extended/ForecastCardExtended";
import ForecastCardMinified from "./forecast-card-minified/ForecastCardMinified";

//Importing images
import stars from "../../assets/etoile-32px.png";
import localisation from "../../assets/marqueur-32px.png";
import share from "../../assets/share-button.png";

//Importing CSS
import "./ForecastCardBackground.css";
import "./ResponsiveForecastCard.css";

const ForecastCardBackground = ({
  selectedSpots,
  tide,
  onLoadAllTides,
}) => {
  // Contient les donnés API
  const [surfDataWind, setSurfDataWind] = useState([]);
  const [surfDataHoule, setSurfDataHoule] = useState([]);

  // UseState(s) qui vérifient que l'API est chargée
  const [onLoad, setOnLoad] = useState(true);
  const [onLoadMarine, setOnLoadMarine] = useState(true);

  // UseState qui active et désactive les cards
  const [indexCard, setIndexCard] = useState(0);

  // UseState qui détecte la taille de l'écran
  const [widthSize, setWidthSize] = useState(window.innerWidth);

  const changeIndex = (newValue) => {
    setIndexCard(newValue);
  };

  useEffect(() => {
    const widthSizeDetector = () => {
      setWidthSize(window.innerWidth);
    };

    window.addEventListener("resize", widthSizeDetector);
  }, []);

  useEffect(() => {
    // API VENT( Orientation vent, Puissance en hourly et Daily sur 7 jours)
    axios
      .get(
        `https://api.open-meteo.com/v1/gfs?latitude=${selectedSpots.latitude}&longitude=${selectedSpots.longitude}&hourly=windspeed_10m,winddirection_10m&daily=windspeed_10m_max,winddirection_10m_dominant&timezone=Europe%2FBerlin`
      )
      .then((req) => req.data)
      .then((data) => {
        setSurfDataWind(data);
        setOnLoad(false);
      });

    // API HOULE (Hourly : Wave height et wave period / Daily : Wave height Max et Wave direction dominant)
    axios
      .get(
        `https://marine-api.open-meteo.com/v1/marine?latitude=${selectedSpots.latitude}&longitude=${selectedSpots.longitude}&hourly=wave_height,wave_period,wave_direction&daily=wave_height_max,wave_direction_dominant&timezone=Europe%2FBerlin`
      )
      .then((req) => req.data)
      .then((data) => {
        setSurfDataHoule(data);
        setOnLoadMarine(false);
      });
  }, []);

  const today = new Date(); // Créer un objet Date avec la date et l'heure actuelles
  const options =
    widthSize > 1180
      ? { day: "2-digit", weekday: "long" }
      : { weekday: "short", day: "2-digit" }; // affiche le jours en long et la date en chiffres en fonction de la taille ecran
  const oneDay = 24 * 60 * 60 * 1000; // durée de 24h
  const dayForecast = []; // array qui receveras les dates

  // boucle qui génère automatiquement les 7 prochains jours
  for (let i = 0; i < 7; i++) {
    dayForecast.push(
      new Date(today.getTime() + i * oneDay).toLocaleDateString(
        "en-EN",
        options
      )
    );
  }

  // url a changer quand on sera en ligne.
  const url = "http://localhost:3000/";
  const titleShare = "Let's go riding my friend ! 🤙🏽";

  return (
    <div className="background-forcast item-content" id="F">
      <div className="header">
        <div>
          <div className="flexSpotName">
            <p className="spotName">
              <img className="spotNameLocalisation" src={localisation} />
              {selectedSpots.name}
            </p>
            <img className="spotNameStars" src={stars} />
          </div>
          {selectedSpots.webcam === "0" 
          ? (<p></p>) 
          : (
            <a
              className="spotNameWebcam"
              href={selectedSpots.webcam}
              target="_blank"
            >
              Acceder à la webcam
            </a>
          )}
        </div>
        <WhatsappShareButton url={url} title={titleShare}>
          <img className="spotNameShare" src={share} />
        </WhatsappShareButton>
      </div>

      <div className="bodyForecastCard">
        {dayForecast.map((el, index) => (
          <div key={uuidv4()} className="daily-forecast">
            <div
              className={
                indexCard === index
                  ? "background-invisible"
                  : "background-visible"
              }
            >
              <ForecastCardMinified
                date={el}
                surfDataHoule={surfDataHoule}
                surfDataWind={surfDataWind}
                number={index}
                onLoad={onLoad}
                onLoadMarine={onLoadMarine}
                tide={tide}
                dayDate={new Date(today.getTime() + index * oneDay)}
                functionChange={changeIndex}
              />
            </div>
            <div
              className={
                indexCard === index
                  ? "background-visible"
                  : "background-invisible"
              }
            >
              <div className="extendedCard">
                
                <ForecastCardExtended
                  surfDataWind={surfDataWind}
                  surfDataHoule={surfDataHoule}
                  onLoadMarine={onLoadMarine}
                  onLoad={onLoad}
                  index={index}
                  functionChange={changeIndex}
                  date ={el}
                  tide={tide}
                  onLoadAllTides={onLoadAllTides}
                  dayDate={new Date(today.getTime() + index * oneDay)}
                />
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCardBackground;
