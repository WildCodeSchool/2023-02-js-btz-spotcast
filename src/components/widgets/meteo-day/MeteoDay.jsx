import React from "react";
import "../cards.css";
import ToggleButton from "../../utilities/ToggleButton";
import "./MeteoDay.css"

const MeteoDay = () => {

    return (
        <div className="small-square">
            <div className="card-header">
                <p className="card-title">Meteo</p>
                <ToggleButton />
            </div>
            <div className="card-content card-meteo">
                <div className="day-icon">
                    <img src="src\assets\weather-icons\soleil.svg" alt="" />
                </div>
                <div className="meteo-infos">
                    <p className="meteo-temperature">15°</p>
                    <p className="meteo-text">Cloudy</p>
                </div>
            </div>
        </div>
    )
}

export default MeteoDay;