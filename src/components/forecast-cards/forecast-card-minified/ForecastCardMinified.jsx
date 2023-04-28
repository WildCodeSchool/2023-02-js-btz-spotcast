import React from 'react'
import WindMinified from './minified-components/Wind-Minified'
import './ForecastCardMinified.css'


const ForecastCardMinified = ({number, surfDataWind, onLoad}) => {


  return (
    <div className='minified-background'>
    
        <div >
        <WindMinified 
            number ={number}
            surfDataWind ={surfDataWind}
            onLoad ={onLoad}
         />
        <div>Energie</div>
        <div>Houle</div>
        <div>Periode</div>
        <div>Tide</div>
        </div>
    
    
    </div>
  )
}

export default ForecastCardMinified