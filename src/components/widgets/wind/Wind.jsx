import React, { useState } from "react";
import "./Wind.css";
import "../cards.css";
import ToggleButton from "../../utilities/ToggleButton";

const Wind = ({winddirection_10m, windspeed_10m, timeStampIndex}) => {

  const [windDirection, setWindDirection] = useState('')

  // switch (winddirection_10m && winddirection_10m[timeStampIndex]){
  //   case (winddirection_10m > 337 && winddirection_10m <= 22) :
  //     setWindDirection('north');
  //     break;
  //   case (winddirection_10m > 22 && winddirection_10m <= 67) :
  //     return setWindDirection('north-east');
  //     break;
  //   case (winddirection_10m > 67 && winddirection_10m <= 112) :
  //     return setWindDirection('east');
  //     break;
  //   case (winddirection_10m > 112 && winddirection_10m <= 157) :
  //     return setWindDirection('south-east');
  //     break;
  //   case (winddirection_10m > 157 && winddirection_10m <= 202) :
  //     return setWindDirection('south-east');
  //     break;
  //   case (winddirection_10m > 202 && winddirection_10m <= 247) :
  //     return setWindDirection('south');
  //     break;
  //   case (winddirection_10m > 247 && winddirection_10m <= 292) :
  //     return setWindDirection('south-west');
  //     break;
  //   case (winddirection_10m > 292 && winddirection_10m <= 337) :
  //     return setWindDirection('west');
  //     break;
  //   default:
  //     setWindDirection('NO DATA');
  //     break;
  // }

  console.log(winddirection_10m && windDirection)
  // console.log(winddirection_10m && winddirection_10m[timeStampIndex])

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
            <p className="wind-strenght">
            {timeStampIndex&&
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
