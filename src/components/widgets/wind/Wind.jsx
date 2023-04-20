import React, { useEffect, useState } from "react";
import "./Wind.css";
import "../cards.css";
import ToggleButton from "../../utilities/ToggleButton";

const Wind = ({ winddirection_10m, windspeed_10m, timeStampIndex }) => {

  const [windDirection, setWindDirection] = useState('')

  useEffect(() => {
    if ((winddirection_10m && winddirection_10m[timeStampIndex] > 337) || (winddirection_10m && winddirection_10m[timeStampIndex] <= 22)) {
      setWindDirection('north')
    } else if ((winddirection_10m && winddirection_10m[timeStampIndex] > 22) && (winddirection_10m && winddirection_10m[timeStampIndex] <= 67)) {
      setWindDirection('north-east')
    } else if ((winddirection_10m && winddirection_10m[timeStampIndex] > 67) && (winddirection_10m && winddirection_10m[timeStampIndex] <= 112)) {
      setWindDirection('east')
    } else if ((winddirection_10m && winddirection_10m[timeStampIndex] > 112) && (winddirection_10m && winddirection_10m[timeStampIndex] <= 157)) {
      setWindDirection('south-east')
    } else if ((winddirection_10m && winddirection_10m[timeStampIndex] > 157) && (winddirection_10m && winddirection_10m[timeStampIndex] <= 202)) {
      setWindDirection('south')
    } else if ((winddirection_10m && winddirection_10m[timeStampIndex] > 202) && (winddirection_10m && winddirection_10m[timeStampIndex] <= 247)) {
      setWindDirection('south-west')
    } else if ((winddirection_10m && winddirection_10m[timeStampIndex] > 247) && (winddirection_10m && winddirection_10m[timeStampIndex] <= 292)) {
      setWindDirection('west')
    } else {
      setWindDirection('north-west')
    }
  }, [winddirection_10m && winddirection_10m[timeStampIndex]])


  return (
    <div className="small-square">
      <div className="card-header">
        <p className="card-title">Wind</p>
        <ToggleButton />
      </div>
      <div className="card-content">
        <div className="wind-chart">
          <div className="cardinal-points">
            <span className={windDirection === "north" ? "checked" : ""} style={{ "--n": 1 }}></span>
            <span className={windDirection === "north-east" ? "checked" : ""} style={{ "--n": 2 }}></span>
            <span className={windDirection === "east" ? "checked" : ""} style={{ "--n": 3 }}></span>
            <span className={windDirection === "south-east" ? "checked" : ""} style={{ "--n": 4 }}></span>
            <span className={windDirection === "south" ? "checked" : ""} style={{ "--n": 5 }}></span>
            <span className={windDirection === "south-west" ? "checked" : ""} style={{ "--n": 6 }}></span>
            <span className={windDirection === "west" ? "checked" : ""} style={{ "--n": 7 }}></span>
            <span className={windDirection === "north-west" ? "checked" : ""} style={{ "--n": 8 }}></span>
          </div>
          <div className="wind-stats">
            <p className="wind-strenght">
              {timeStampIndex &&
                Math.floor(windspeed_10m[timeStampIndex])}
            </p>
            <p>Km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wind;
