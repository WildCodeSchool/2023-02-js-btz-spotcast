import React from "react";
import "./Wind.css";
import "../cards.css";
import ToggleButton from "../../utilities/ToggleButton";

const Wind = ({ time, winddirection_10m, windspeed_10m }) => {
  console.log(time, winddirection_10m, windspeed_10m);
  
  return (
    <div className="small-square">
      <div className="card-header">
        <p className="card-title">Wind</p>
        <ToggleButton />
      </div>
      <div className="card-content">
        <div className="wind-chart">
          <div className="cardinal-points">
            <span id="north" style={{"--n":1}}></span>
            <span id="north-east" className="checked" style={{"--n":2}}></span>
            <span id="east" style={{"--n":3}}></span>
            <span id="south-east" style={{"--n":4}}></span>
            <span id="south" style={{"--n":5}}></span>
            <span id="south-west" style={{"--n":6}}></span>
            <span id="west" style={{"--n":7}}></span>
            <span id="north-west" style={{"--n":8}}></span>
          </div>
          <div className="wind-stats">
            <p className="wind-strenght">21</p>
            <p>Km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wind;
