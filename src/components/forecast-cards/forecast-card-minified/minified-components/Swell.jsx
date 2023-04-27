import React from 'react'

const Swell = ({number, surfDataHoule,onLoadMarine}) => {

    const numberHours = [24, 48, 72, 96, 120, 144, 168]

    const swellWeek =  onLoadMarine 
      ? "" 
      : surfDataHoule.hourly.wave_height.filter((el,index)=>(
        number === 0 
        ? index < numberHours[number] 
        : index <=numberHours[number] & index >numberHours[number -1]        
    ))



  return (
    <div>
    <p>Swell Min & Max</p>  
    <p>{onLoadMarine ? "" :`${ Math.min(...swellWeek)} - ${ Math.max(...swellWeek)} ` }</p>
    </div>
  )
}

export default Swell