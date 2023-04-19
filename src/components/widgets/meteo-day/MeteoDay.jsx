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

const MeteoDay = ({ hourly, timeStampIndex }) => {

    let [dayIcon, setDayIcon] = useState('')
    let [weatherCode, setweatherCode] = useState(hourly && hourly.weathercode[timeStampIndex])
    let [weatherText, setweatherText] = useState("")



    useEffect(() => {

        if (weatherCode == 0) {
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
    }, [weatherCode])

    console.log('dayicon', dayIcon)
    console.log('weathertext', weatherText)


    return (
        <div>
            {weatherText && dayIcon &&
                <div className="small-square">
                    <div className="card-header">
                        <p className="card-title">Meteo</p>
                        <ToggleButton />
                    </div>
                    <div className="card-content card-meteo">
                        <div className="day-icon">
                            <img src={dayIcon} alt="soleil" />
                        </div>
                        <div className="meteo-infos">
                            <p className="meteo-temperature">{hourly &&
                                hourly.temperature_2m[timeStampIndex]}</p>
                            <p className="meteo-text">{hourly &&
                                weatherText}</p>
                        </div>
                    </div>

                </div>}
        </div>
    )
}

export default MeteoDay;