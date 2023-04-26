import React from 'react'
import chartBar from '../../../../assets/images/swell-bar.svg'
import chartWaveBar from '../../../../assets/images/swell-wave-bar.svg'
import { v4 as uuidv4 } from 'uuid';

const HourlyForecast = ({ windSpeedByDay, windDirectionByDay, waveHeightByDay, wavePeriodByDay, waveDirectionByDay, index, onLoad, onLoadMarine }) => {
    
    const hoursShowed = [5, 8, 11, 14, 17, 20, 23]

    return (
    <div className="hourly-forecast">

        <div className="hourly-wind-container">
            <p className="time">
            {onLoad ? "" : hoursShowed[index]}h
            </p>
            <div className="hourly-wind">
            <div className='hourly-wind-direction'>
            <p className='hourly-wind-data'>
                {onLoad ? "" : Math.floor(windSpeedByDay[hoursShowed[index]])}
            </p>
            </div>
            </div>
        </div>

        <div className="hourly-swell-container">
            <div className="swell-chart">
            <img className='swell-chart-bar' src={chartWaveBar} alt="" />
            {Array(5).fill().map((_, index) =>(
                <img key={uuidv4()}className='swell-chart-bar' src={chartBar} alt='chart-bar' />
            ))}
            </div>
            <p className="hourly-energy">
            1200
            </p>
            <p className="hourly-swell">
                {onLoadMarine ? "" : (waveHeightByDay[hoursShowed[index]]).toFixed(1)}
            </p>
            <p className="hourly-swell-direction">
                {onLoadMarine ? "" : waveDirectionByDay[hoursShowed[index]]}
            </p>
        </div>
        <div className="hourly-period">
            <p>
                {onLoadMarine ? "" : Math.floor(wavePeriodByDay[hoursShowed[index]])}s
            </p>
        </div>
        </div>
    )
}

export default HourlyForecast