import React, { useEffect } from "react";
import { useState } from "react";
import ToggleButton from "../../utilities/ToggleButton";
import soleil from '../../../assets/images/soleil.svg';
import soleilNuages from '../../../assets/images/soleil-nuages.svg';
import nuages from '../../../assets/images/nuages.svg';
import pluie from '../../../assets/images/pluie.svg';
import vent from '../../../assets/images/vent.svg';
import neige from '../../../assets/images/neige.svg';

import "../cards.css";
import "./MeteoDay.css";

const MeteoDay = ({ weathercode, temperature_2m, timeStampIndex, onLoadMeteo, time, formInfos, setFormInfos, grid }) => {

    let [dayIcon, setDayIcon] = useState('')
    let [weatherCode, setweatherCode] = useState(onLoadMeteo ? "" : weathercode[timeStampIndex])
    let [weatherText, setweatherText] = useState("")

    useEffect(() => {
        if (onLoadMeteo) {
        } else if (weatherCode === 0) {
            setDayIcon(soleil)
            setweatherText("Soleil")
        } else if (weatherCode >= 1 || weatherCode <= 3) {
            setDayIcon(soleilNuages)
            setweatherText("Couvert")
        } else if (weatherCode >= 45 || weatherCode <= 48) {
            setDayIcon(soleilNuages)
            setweatherText("Brouillard")
        } else if (weatherCode >= 51 || weatherCode <= 57) {
            setDayIcon(nuages)
            setweatherText("Bruine")
        } else if (weatherCode >= 61 || weatherCode <= 67) {
            setDayIcon(pluie)
            setweatherText("Pluie")
        } else if ((weatherCode >= 71 || weatherCode <= 77) || (weatherCode >= 85 || weatherCode <= 86)) {
            setDayIcon(neige)
            setweatherText("Neige")
        } else if (weatherCode >= 80 || weatherCode <= 82) {
            setDayIcon(pluie)
            setweatherText("Averses")
        } if (weatherCode >= 95) {
            setDayIcon(pluie)
            setweatherText("Orages")
        }
    }, [onLoadMeteo])

    const elemItem = document.querySelector("#B")
    
    return (
        <div className="small-square item-content" id="B">
            <div className="card-header">
                <p className="card-title">Meteo</p>
                <ToggleButton
                    grid={grid}
                    widgetName = "meteo-widget"
                    formInfos={formInfos}
                    setFormInfos={setFormInfos}
                    elemItem={elemItem}
                />
            </div>
            <div className="card-content card-meteo">
                {onLoadMeteo ? "" :
                <div className="day-icon">
                    <img src={dayIcon} alt="soleil" />
                </div>
                }
                {onLoadMeteo ? "" :
                <div className="meteo-infos">
                    <p className="meteo-temperature">{temperature_2m[timeStampIndex]}°</p>
                    <p className="meteo-text">{weatherText}</p>
                </div>
                }

                
            </div>
                
                
        </div>
    )
}

export default MeteoDay