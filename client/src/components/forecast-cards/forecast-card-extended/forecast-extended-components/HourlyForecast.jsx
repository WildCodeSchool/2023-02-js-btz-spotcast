import React, { useState, useEffect } from "react";
import chartBar from "../../../../assets/images/swell-bar.svg";
import chartWaveBar from "../../../../assets/images/swell-wave-bar.svg";
import windDirectionIcon from '../../../../assets/images/wind-direction.svg'
import EnergieExtended from "../extended-components/EnergieExtended";
import { v4 as uuidv4 } from 'uuid';


const HourlyForecast = ({
  windSpeedByDay,
  windDirectionByDay,
  waveHeightByDay,
  wavePeriodByDay,
  waveDirectionByDay,
  index,
  onLoad,
  onLoadMarine,
}) => {

  const hoursShowed = [5, 8, 11, 14, 17, 20, 23];

  // useState et useEffect to transform the swell height in chart bars
  const [swellChartBar, setSwellChartBar] = useState(0);

  useEffect(() => {
    if (onLoadMarine) {
      return;
    } else {
      if (waveHeightByDay[hoursShowed[index]].toFixed(1) < 0.5) {
        setSwellChartBar(1);
      } else if (
        waveHeightByDay[hoursShowed[index]].toFixed(1) >= 0.5 &&
        waveHeightByDay[hoursShowed[index]].toFixed(1) <= 0.9
      ) {
        setSwellChartBar(2);
      } else if (
        waveHeightByDay[hoursShowed[index]].toFixed(1) >= 1 &&
        waveHeightByDay[hoursShowed[index]].toFixed(1) <= 1.5
      ) {
        setSwellChartBar(3);
      } else if (
        waveHeightByDay[hoursShowed[index]].toFixed(1) >= 1.6 &&
        waveHeightByDay[hoursShowed[index]].toFixed(1) <= 2
      ) {
        setSwellChartBar(4);
      } else if(
        waveHeightByDay[hoursShowed[index]].toFixed(1) >= 2.1 
      ) {
        setSwellChartBar(5);
      }
    }
  }, [onLoadMarine]);

  // useState et useEffect to transform the wind direction in "N, NE, E, SE, S,..."
  const [waveDirection, setWaveDirection] = useState("");

  useEffect(() => {
    if (onLoadMarine) {
      return;
    } else {
      if (
        waveDirectionByDay[hoursShowed[index]] > 337 ||
        waveDirectionByDay[hoursShowed[index]] <= 22
      ) {
        setWaveDirection("N");
      } else if (
        waveDirectionByDay[hoursShowed[index]] > 22 &&
        waveDirectionByDay[hoursShowed[index]] <= 67
      ) {
        setWaveDirection("NE");
      } else if (
        waveDirectionByDay[hoursShowed[index]] > 67 &&
        waveDirectionByDay[hoursShowed[index]] <= 112
      ) {
        setWaveDirection("E");
      } else if (
        waveDirectionByDay[hoursShowed[index]] > 112 &&
        waveDirectionByDay[hoursShowed[index]] <= 157
      ) {
        setWaveDirection("SE");
      } else if (
        waveDirectionByDay[hoursShowed[index]] > 157 &&
        waveDirectionByDay[hoursShowed[index]] <= 202
      ) {
        setWaveDirection("S");
      } else if (
        waveDirectionByDay[hoursShowed[index]] > 202 &&
        waveDirectionByDay[hoursShowed[index]] <= 247
      ) {
        setWaveDirection("SW");
      } else if (
        waveDirectionByDay[hoursShowed[index]] > 247 &&
        waveDirectionByDay[hoursShowed[index]] <= 292
      ) {
        setWaveDirection("W");
      } else {
        setWaveDirection("NW");
      }
    }
  }, [onLoadMarine]);


  return (
    <div className="hourly-forecast">
      <div className="hourly-wind-container">
        <p className="time">{onLoad ? "" : hoursShowed[index]}h</p>
        <div className="hourly-wind">
          <div className="hourly-wind-direction">
            <p className="hourly-wind-data">
              {onLoad ? "" : Math.floor(windSpeedByDay[hoursShowed[index]])}
            </p>
            <img 
                style={{ transform: `translate(-50%, -50%) rotate(${windDirectionByDay[hoursShowed[index]]}deg)`}} 
                className="wind-direction-arrow" 
                src={windDirectionIcon} alt="wind-direction" 
            />
          </div>
        </div>
      </div>

      <div className="hourly-swell-container">
        <div className="swell-chart">
          <img className="swell-chart-bar" src={chartWaveBar} alt="" />
          {Array(swellChartBar)
            .fill()
            .map((_, index) => (
              <img key={uuidv4()} className="swell-chart-bar" src={chartBar} alt="chart-bar" />
            ))}
        </div>
          <EnergieExtended
            waveHeightByDay = {waveHeightByDay}
            wavePeriodByDay = {wavePeriodByDay}
            index ={index}
            onLoadMarine ={onLoadMarine}
          />
        <p className="hourly-swell">
          {onLoadMarine ? "" : waveHeightByDay[hoursShowed[index]].toFixed(1)}
        </p>
        <p className="hourly-swell-direction">
          {onLoadMarine ? "" : waveDirection}
        </p>
      </div>
      <div className="hourly-period">
        <p>
          {onLoadMarine ? "" : Math.floor(wavePeriodByDay[hoursShowed[index]])}s
        </p>
      </div>
    </div>
  );
};

export default HourlyForecast;
