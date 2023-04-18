import React, { useEffect, useState } from "react";
import "../cards.css";
import ToggleButton from "../../utilities/ToggleButton";
import "./Water.css"

const Water = () => {

    const [waterTemperature, setWaterTemperature] = useState('')

    return (
        <div className="small-rectangle">
            <div className="card-header">
                <p className="card-title">Water</p>
                <ToggleButton />
            </div>
            <div className="card-content">
                <div className="water-infos">
                    <div className="water-temperature">
                    //fetch de l'api et useState
                        <p>°</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Water;