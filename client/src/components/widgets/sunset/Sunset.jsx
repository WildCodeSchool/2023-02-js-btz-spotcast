import React, { useEffect, useState } from 'react'
import ToggleButton from '../../utilities/ToggleButton'
import './Sunset.css'
import axios from 'axios'
import Aube from '../../../assets/images/aube.svg'
import Crepuscule from '../../../assets/images/crepuscule.svg'
import Separator from '../../../assets/images/sunset-separator.svg'

const Sunset = ({ formInfos, setFormInfos, grid}) => {
    
    const [sunset, setSunset] = useState();

    useEffect(() =>{
        axios
        .get("https://api.sunrise-sunset.org/json?lat=43.4831519&lng=-1.558626&formatted=0")
        .then((res) => res.data.results)
        .then((data) =>{
            setSunset(data)
        })
    },[])
    
    let sunriseHours = String(new Date(sunset ? sunset.civil_twilight_begin : "").getHours());
    let sunriseMinutes = String(new Date(sunset ? sunset.civil_twilight_begin : "").getMinutes());
    let sunriseFormatedTime = `${sunriseHours.padStart(2,'0')}:${sunriseMinutes.padStart(2,'0')}`;

    let sunsetHours = String(new Date(sunset ? sunset.civil_twilight_end : "").getHours());
    let sunsetMinutes = String(new Date(sunset ? sunset.civil_twilight_end : "").getMinutes());
    let sunsetFormatedTime = `${sunsetHours.padStart(2,'0')}:${sunsetMinutes.padStart(2,'0')}`;

    const elemItem = document.querySelector("#E");

  return (
    <div className='big-rectangle-width-sunset item-content' id="E">
        <div className="sunrise">
            <p className="card-title-sunset">Sun cycle</p>
            <div className="sunrise-forecast">
                <img src={Aube} alt="sun" className="sun" />
                <div className='sunset-forecast-container'>
                    <p className="sunrise-text">
                        Dawn
                    </p>
                    <p className="sunrise-value">
                        {sunset ? sunriseFormatedTime : ""}
                    </p>
                </div>
            </div>
        </div>
        <div className="separator">
            <img src={Separator} alt="separator" />
        </div>
        <div className="sunset">
            <ToggleButton 
                className="sunset-toggle"
                widgetName = "sun-widget"
                formInfos={formInfos}
                setFormInfos={setFormInfos}
                grid={grid}
                elemItem={elemItem}
            />
            <div className="sunset-forecast">
                <img src={Crepuscule} alt="moon" className="moon" />
                <div className='sunset-forecast-container'>
                    <p className="sunset-text">
                       Dusk
                    </p>
                    <p className="sunset-value">
                        {sunset ? sunsetFormatedTime : ""}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sunset