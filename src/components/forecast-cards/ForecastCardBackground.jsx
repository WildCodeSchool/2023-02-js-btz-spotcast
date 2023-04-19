import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ToggleButton from '../utilities/ToggleButton'
import './ForecastCardBackground.css'
import stars from '../../assets/etoile-32px.png'
import localisation from '../../assets/marqueur-32px.png'

const ForecastCardBackground = ({currentSpot}) => {
    // Contient les donnés API
    const [tide, setTide] = useState([])
    const [surfDataWind,  setSurfDataWind] = useState([])
    const [surfDataHoule, setSurfDataHoule] =useState([])

    
    useEffect(() => {
       // API TIDE récupère la marée haute et basse sur 10jours mais attentions car que 10 fetch par jous donc delay de 3h appliqué
      const delayTide = setTimeout(() => {
        axios
        .get(
          `https://api.stormglass.io/v2/tide/extremes/point?lat=${currentSpot.latitude}&lng=${currentSpot.longitude}&start=2023-04-19&end=2023-04-29`,{
          headers: {
              'Authorization': 'ed2bcc96-ddf7-11ed-92e6-0242ac130002-ed2bcd72-ddf7-11ed-92e6-0242ac130002'
            }}
        )
        .then((res) => res.data)
        .then((data) => {
          setTide(data);
        });

      }, 3*60*60*1000); 

    },[])

      
      

    useEffect(() => {
      // API VENT( Orientation vent, Puissance en hourly et Daily sur 7 jours)
      axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${currentSpot.latitude}&longitude=${currentSpot.longitude}&hourly=windspeed_10m&daily=windspeed_10m_max,winddirection_10m_dominant&timezone=Europe%2FBerlin`)
        .then((req) => req.data)
        .then((data) => {
          setSurfDataWind(data);
        });
      
        // API HOULE (Hourly : Wave height et wave period / Daily : Wave height Max et Wave direction dominant)
      axios.get(`https://marine-api.open-meteo.com/v1/marine?latitude=${currentSpot.latitude}&longitude=${currentSpot.longitude}&hourly=wave_height,wave_period&daily=wave_height_max,wave_direction_dominant&timezone=Europe%2FBerlin`)
        .then((req) => req.data)
        .then((data) => {
          setSurfDataHoule(data);
        });
      

    },[])

    console.log(tide);
    console.log(surfDataWind);
    console.log(surfDataHoule);

   

    
    
  return (
    <div className='background-forcast'>
        <div className='header'>
            <div>
              <div className='flexSpotName'>
                <p className='spotName'>
                  <img className='spotNameLocalisation' src={localisation} />
                    {currentSpot.name} 
                  </p>
                  <img className='spotNameStars' src={stars} />
                </div>
              <a className='spotNameWebcam' href={currentSpot.webcam} target='_blank'>
                Acceder à la webcam
              </a>
            </div>
            <div>
                <ToggleButton />
            </div>
        </div>
        <div className='body'>

        </div>
    </div>
  )
}

export default ForecastCardBackground