import React from "react";
import "../cards.css";
import ToggleButton from "../../utilities/ToggleButton";
import "./MeteoThreeDay.css"

const MeteoThreeDay = () => {

    return (
        <div className="small-square">
            <div className="card-header">
                <p className="card-title">Meteo 3d</p>
                <ToggleButton />
            </div>
            <div className="meteo-card">
                <div className="meteo-infos">
                    <div className="day-one-infos">
                        <p className="day-one">Vendredi 14 avril</p>
                        <img src="" alt="" />
                        <p>15°</p>
                    </div>
                    <div className="day-two-infos">
                        <p className="day-two">samedi 15 avril</p>
                        <img src="" alt="" />
                        <p>16°</p>
                    </div>
                    <div>
                        <p className="day-three">Dimanche 16 avril</p>
                        <img src="" alt="" />
                        <p>24°</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeteoThreeDay