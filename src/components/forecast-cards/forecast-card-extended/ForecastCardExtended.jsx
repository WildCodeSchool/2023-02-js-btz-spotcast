import React from 'react'
import './ForecastCardExtended.css'
import HourlyForecast from './forecast-extended-components/HourlyForecast'

const ForecastCardExtended = ({surfDataWind, onLoad, index}) => {
  
  const range = (index+1)*24;
  const {windspeed_10m, winddirection_10m} = onLoad ? "" : surfDataWind.hourly;
  const windSpeedByDay = onLoad ? "" : windspeed_10m.slice(range-24, range);
  const windDirectionByDay = onLoad ? "" : winddirection_10m.slice(range-24, range);
  console.log(windSpeedByDay, windDirectionByDay);

  return (
    <div className='daily-extended-forecast'>
      {Array(7).fill().map((_, index)=>(
        <HourlyForecast 
        key={index}
        windSpeedByDay ={windSpeedByDay}
        windDirectionByDay ={windDirectionByDay}
        index = {index}
        onLoad ={onLoad}
      />
      ))} 
    </div>
  )
}

export default ForecastCardExtended