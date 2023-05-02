import React from 'react'

const EnergieExtended = ({waveHeightByDay, wavePeriodByDay, index,onLoadMarine}) => {
    

    const hoursShowed = [5, 8, 11, 14, 17, 20, 23];

    

    let energie = onLoadMarine
        ? ""
        : ((0.125 * 1020 * 9.81 * (waveHeightByDay[hoursShowed[index]] * waveHeightByDay[hoursShowed[index]])* wavePeriodByDay[hoursShowed[index]])/100).toFixed(0);

    
  return (
       <p className="hourly-energy">{energie}</p> 
  )
}

export default EnergieExtended