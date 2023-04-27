import React from 'react'
import './ForecastCardExtended.css'
import HourlyForecast from './forecast-extended-components/HourlyForecast'
import { v4 as uuidv4 } from 'uuid';


const ForecastCardExtended = ({surfDataWind, surfDataHoule, onLoad, onLoadMarine, index}) => {
  
  const range = (index+1)*24;
  const {windspeed_10m, winddirection_10m} = onLoad ? "" : surfDataWind.hourly;
  const {wave_height, wave_period, wave_direction} = onLoadMarine ? "" : surfDataHoule.hourly;

  const windSpeedByDay = onLoad ? "" : windspeed_10m.slice(range-24, range);
  const windDirectionByDay = onLoad ? "" : winddirection_10m.slice(range-24, range);

  const waveHeightByDay = onLoadMarine ? "" : wave_height.slice(range-24, range);
  const wavePeriodByDay = onLoadMarine ? "" : wave_period.slice(range-24, range);
  const waveDirectionByDay = onLoadMarine ? "" : wave_direction.slice(range-24, range);

  return (
    <div className='daily-extended-forecast'>
      {Array(7).fill().map((_, index)=>(
        <HourlyForecast 
        key={uuidv4()}
        windSpeedByDay ={windSpeedByDay}
        windDirectionByDay = {windDirectionByDay}
        waveHeightByDay = {waveHeightByDay}
        wavePeriodByDay = {wavePeriodByDay}
        waveDirectionByDay = {waveDirectionByDay}
        index = {index}
        onLoad ={onLoad}
        onLoadMarine ={onLoadMarine}
      />
      ))} 
    </div>
  )
}

export default ForecastCardExtended