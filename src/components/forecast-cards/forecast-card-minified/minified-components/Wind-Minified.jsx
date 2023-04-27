import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const WindMinified = ({number, onLoad, surfDataWind}) => {


    const numberHours = [24, 48, 72, 96, 120, 144, 168]

    let dayWindRange = "";
    
 
    
    if(onLoad){
      dayWindRange = ""
    } else {
      dayWindRange = surfDataWind.hourly.windspeed_10m.filter((el,index)=>(
        number === 0 
        ? index <= numberHours[number] 
        : index <=numberHours[number] & index >numberHours[number -1]        
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