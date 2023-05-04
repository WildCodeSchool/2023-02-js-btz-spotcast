import React from 'react'

const PeriodeMinified = ({number, surfDataHoule,onLoadMarine}) => {

    const numberHours = [24, 48, 72, 96, 120, 144, 168]

    const periodWeek = onLoadMarine 
      ? "" 
      : surfDataHoule.hourly.wave_period.filter((el,index)=>(
        number === 0 
        ? index < numberHours[number] 
        : index <=numberHours[number] & index >numberHours[number -1] 
    ))

     // passage de l'objet periode au format tableau + somme des éléments 
     let periodAray = Object.values(periodWeek);
     let sumPeriod = periodAray.reduce((acc, curr) => acc + curr, 0);


  return (
    <div className='Period'>
        <p className='title-minified'>Period</p>
        <p className='data-minified'>{(sumPeriod/24).toFixed(0)}s</p>

    </div>
  )
}

export default PeriodeMinified