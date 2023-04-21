import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const WindMinified = ({number, onLoad, surfDataWind}) => {

    
    /*const [surfDataWind,setSurfDataWind] = useState()

    useEffect(() => {
        // API VENT( Orientation vent, Puissance en hourly et Daily sur 7 jours)
        axios.get(`https://api.open-meteo.com/v1/forecast?latitude=43.3&longitude=-1.51&hourly=windspeed_10m&daily=windspeed_10m_max,winddirection_10m_dominant&timezone=Europe%2FBerlin`)
          .then((req) => req.data)
          .then((data) => {
            setSurfDataWind(data);
          });

    },[])*/

    const numberHours = [24, 48, 72, 96, 120, 144, 168]

    let dayWindRange = "";
    
    console.log(onLoad)
    
    if(onLoad){
      dayWindRange = ""
    } else {
      dayWindRange = surfDataWind.hourly.windspeed_10m.filter((el,index)=>(
        number === 0 
        ? index <= numberHours[number] 
        : index <=numberHours[number] & index >=numberHours[number -1]        
    ))
    }

    
    
    
  
  return (
    <div className='Wind'>
    <p>Vent</p>
    <p>{onLoad ? "" :`${surfDataWind &&  Math.min(...dayWindRange)} - ${surfDataWind &&  Math.max(...dayWindRange)} ` }</p>
    <p>km/H</p>
    </div>
    
  )
}

export default WindMinified