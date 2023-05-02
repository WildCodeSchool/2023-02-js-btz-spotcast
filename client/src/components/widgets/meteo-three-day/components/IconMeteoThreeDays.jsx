import React, { useEffect, useState } from 'react'
import soleil from '../../../../assets/images/soleil.svg';
import soleilNuages from '../../../../assets/images/soleil-nuages.svg';
import nuages from '../../../../assets/images/nuages.svg';
import pluie from '../../../../assets/images/pluie.svg';
import vent from '../../../../assets/images/vent.svg';
import neige from '../../../../assets/images/neige.svg';



const IconMeteoThreeDays = ({ meteoIcon, onLoadMeteo3D }) => {

    const [dayIcon, setDayIcon] = useState("")

    useEffect(() => {

        if (onLoadMeteo3D) {
        } else if (meteoIcon === 0) {
            setDayIcon(soleil)
        } else if (meteoIcon >= 1 && meteoIcon <= 3) {
            setDayIcon(soleilNuages)
        } else if (meteoIcon >= 45 && meteoIcon <= 48) {
            setDayIcon(soleilNuages)
        } else if (meteoIcon >= 51 && meteoIcon <= 57) {
            setDayIcon(nuages)
        } else if (meteoIcon >= 61 && meteoIcon <= 67) {
            setDayIcon(pluie)
        } else if ((meteoIcon >= 71 && meteoIcon <= 77) || (meteoIcon >= 85 && meteoIcon <= 86)) {
            setDayIcon(neige)
        } else if (meteoIcon >= 80 && meteoIcon <= 82) {
            setDayIcon(pluie)
        } if (meteoIcon >= 95) {
            setDayIcon(pluie)
        }
    }, [onLoadMeteo3D])





    return (

        <div className='day-icon-3d'>
            <img src={dayIcon} />
        </div>
    )
}

export default IconMeteoThreeDays

