
import React, { useEffect } from 'react'

const EnergieMinified = ({surfDataHoule, onLoad, number, onLoadMarine}) => {
   
    const numberHours = [24, 48, 72, 96, 120, 144, 168]
 
    const heightWeek =  onLoadMarine 
      ? "" 
      : surfDataHoule.hourly.wave_height.filter((el,index)=>(
        number === 0 
        ? index < numberHours[number] 
        : index <=numberHours[number] & index >numberHours[number -1]        
    ))


    const periodWeek = onLoadMarine 
      ? "" 
      : surfDataHoule.hourly.wave_period.filter((el,index)=>(
        number === 0 
        ? index < numberHours[number] 
        : index <=numberHours[number] & index >numberHours[number -1] 
    ))
    
    // passage de l'objet height au format tableau + somme des éléments 
    let heigtArray = Object.values(heightWeek);
    let sumheight = heigtArray.reduce((acc, curr) => acc + curr, 0);
    
     // passage de l'objet periode au format tableau + somme des éléments 
    let periodAray = Object.values(periodWeek);
    let sumPeriod = periodAray.reduce((acc, curr) => acc + curr, 0);


  
  

  let energie = onLoadMarine
  ? ""
  : ((0.125 * 1020 * 9.81 * (Math.pow((sumheight/heigtArray.length),2)) * (sumPeriod/periodAray.length))/100).toFixed(0);


  return (
    <div>
      <p>Medium Energie</p>
      <div>{energie}</div>
    </div>
  )
}

export default EnergieMinified