import React, { useContext } from "react";
import { gridRefresh } from "../../../pages/Dashboard";
import { v4 as uuidv4 } from "uuid";
import extendIcon  from '../../../assets/images/extend-icon.svg'

//Importing components
import HourlyForecast from "./forecast-extended-components/HourlyForecast";
import DailyTide from "../forecast-card-extended/forecast-extended-components/DailyTide";

//Importing CSS
import "./ForecastCardExtended.css";

const ForecastCardExtended = ({
  surfDataWind,
  surfDataHoule,
  onLoad,
  onLoadMarine,
  index,
  functionChange,
  date,
  tide, 
  onLoadAllTides,
  dayDate,
}) => {
  const [gridResize, setGridResize] = useContext(gridRefresh);

  const sendBackIndex = () => {
    functionChange(!index);
    setGridResize(!gridResize);
  };

  const range = (index + 1) * 24;
  const { windspeed_10m, winddirection_10m } = onLoad
    ? ""
    : surfDataWind.hourly;
  const { wave_height, wave_period, wave_direction } = onLoadMarine
    ? ""
    : surfDataHoule.hourly;

  const windSpeedByDay = onLoad ? "" : windspeed_10m.slice(range - 24, range);
  const windDirectionByDay = onLoad
    ? ""
    : winddirection_10m.slice(range - 24, range);

  const waveHeightByDay = onLoadMarine
    ? ""
    : wave_height.slice(range - 24, range);
  const wavePeriodByDay = onLoadMarine
    ? ""
    : wave_period.slice(range - 24, range);
  const waveDirectionByDay = onLoadMarine
    ? ""
    : wave_direction.slice(range - 24, range);

  return (
    <div className="daily-extended-forecast" onClick={sendBackIndex}>
      <div className="date">
        <p className="dateTexte">{date}</p>
        <img src={extendIcon} alt="extend" style={{width : "25px", marginLeft : "1em"}}/>
      </div>
      <div className="hour-by-hour">
        <div className="dataCategorie">
          <p className="WindCategorie">Wind km/h</p>
          <p className="EnergieCategorie">Energie</p>
          <p className="swellCategorie">Swell m</p>
          <p className="periodeCategorie">Periode</p>
        </div>
        {Array(7)
          .fill()
          .map((_, index) => (
            <HourlyForecast
              key={uuidv4()}
              windSpeedByDay={windSpeedByDay}
              windDirectionByDay={windDirectionByDay}
              waveHeightByDay={waveHeightByDay}
              wavePeriodByDay={wavePeriodByDay}
              waveDirectionByDay={waveDirectionByDay}
              index={index}
              onLoad={onLoad}
              onLoadMarine={onLoadMarine}
            />
          ))}
      </div>
      <DailyTide
        tide={tide}
        onLoadAllTides={onLoadAllTides}
        dayDate={dayDate}
      />
    </div>
  );
};

export default ForecastCardExtended;
