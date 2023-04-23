import React from 'react'
import './ForecastCardExtended.css'
import chartBar from '../../../assets/images/swell-bar.svg'
import chartWaveBar from '../../../assets/images/swell-wave-bar.svg'

const ForecastCardExtended = () => {
  return (
    <div>
      <div className="hourly-forecast">

        <div className="hourly-wind-container">
          <p className="time">
            5h
          </p>
          <div className="hourly-wind">
            <div className='hourly-wind-direction'>
            <p className='hourly-wind-data'>
              18
            </p>
            </div>
          </div>
        </div>

        <div className="hourly-swell-container">
          <div className="swell-chart">
            <img className='swell-chart-bar' src={chartWaveBar} alt="" />
            {Array(5).fill().map((_, index) =>(
              <img className='swell-chart-bar' src={chartBar} alt='chart-bar' />
            ))}
          </div>
          <p className="hourly-energy">
            1200
          </p>
          <p className="hourly-swell">
            4.4
          </p>
          <p className="hourly-swell-direction">
            NE
          </p>
        </div>
        <div className="hourly-period">
          <p>
            12s
          </p>
        </div>
      </div>
    </div>
  )
}

export default ForecastCardExtended