import React, { useState } from 'react'
import WindMinified from './minified-components/Wind-Minified'
import EnergieMinified from './minified-components/Energie-Minified'
import PeriodeMinified from './minified-components/PeriodeMinified'
import Swell from './minified-components/Swell'

import './ForecastCardMinified.css'
import TideMinified from './minified-components/TideMinified'


const ForecastCardMinified = ({number, surfDataWind, onLoad, surfDataHoule, onLoadMarine, tide, dayDate, functionChange, date}) => {

  const sendBackIndex = () => {
    functionChange(number)
  }
  

  return (
    <div className='minified-background' onClick={sendBackIndex}> 

        <div className='date'>{date}</div>
        
        <WindMinified 
            number ={number}
            surfDataWind ={surfDataWind}
            onLoad ={onLoad}
         />
        <EnergieMinified
           number ={number}
           surfDataHoule = {surfDataHoule}
           onLoadMarine ={onLoadMarine}
           onLoad ={onLoad}
        />

        <Swell
          number ={number}
          surfDataHoule = {surfDataHoule}
          onLoadMarine ={onLoadMarine}
        />

        <PeriodeMinified
          number ={number}
          surfDataHoule = {surfDataHoule}
          onLoadMarine ={onLoadMarine}
        />
        <TideMinified 
          tide={tide}
          dayDate={dayDate}
        />
    
    
    
    </div>
  )
}

export default ForecastCardMinified