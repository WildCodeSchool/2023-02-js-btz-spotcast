import React from 'react'
import WindMinified from './minified-components/Wind-Minified'
import EnergieMinified from './minified-components/Energie-Minified'
import PeriodeMinified from './minified-components/PeriodeMinified'
import Swell from './minified-components/Swell'

import './ForecastCardMinified.css'


const ForecastCardMinified = ({number, surfDataWind, onLoad, surfDataHoule, onLoadMarine}) => {


  return (
    <div className='minified-background'>
    
        <div >
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
        <div>Tide</div>
        </div>
    
    
    </div>
  )
}

export default ForecastCardMinified