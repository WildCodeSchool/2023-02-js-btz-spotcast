import React from 'react'
import tideShape from '../../../../assets/images/tide-shape.svg'

const DailyTide = ({ tide }) => {
  return (
    <div className="daily-tide">
        <div className="coeff">
            <p className="coeff-data">
                120
            </p>
            <p>Coeff</p>
        </div>
        <div className="tide">
            <div className="daily-high-tide">
                <p className="first-high-tide">00:10</p>
                <p className="second-high-tide">12:55</p>
            </div>
            <img src={tideShape} alt="" className="tide-shape" />
            <div className="daily-low-tide">
                <p className="first-low-tide">06:44</p>
                <p className="second-low-tide">18:30</p>
            </div>
        </div>
    </div>
  )
}

export default DailyTide