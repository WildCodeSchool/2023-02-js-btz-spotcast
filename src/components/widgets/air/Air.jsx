import React, { useEffect, useState } from "react";
import "../cards.css";
import ToggleButton from "../../utilities/ToggleButton";
import "./Air.css"

const Air = () => {

    const [airTemperature, setAirTemperature] = useState('')

    return (
        <div className="small-rectangle">
            <div className="card-header">
                <p className="card-title">Air</p>
                <ToggleButton />
            </div>
            <div className="card-content">
                <div className="air-infos">
                    <div className="air-temperature">
                        //fetch de l'api avec le useState
                        <p>°</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Air;
