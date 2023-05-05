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
    <div className='swell'>
    <p className='title-minified'>Swell</p>  
    <p className='data-minified'>{onLoadMarine ? "" :`${ Math.min(...swellWeek)} - ${ Math.max(...swellWeek)} ` }</p>
    <p className="title-minified">m</p>
    </div>
  )
}

export default Swell