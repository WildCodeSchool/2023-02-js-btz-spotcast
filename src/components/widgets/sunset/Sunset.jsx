import React from 'react'
import ToggleButton from '../../utilities/ToggleButton'
import './Sunset.css'

const Sunset = () => {
  return (
    <div className='big-rectangle-width-sunset'>
        <div className="sunset-left">
            <p className="card-title-sunset">Sun cycle</p>
            <div className="sunset-forecast">
                <img src="" alt="" className="sun" />
                <p className="sunset">Sunrise</p>
            </div>
        </div>
        <div className="sunset-right">
            <ToggleButton className="sunset-toggle" />
            <div className="sunrise-forecast">
                <img src="" alt="" className="sun" />
                <p className="sunrise">Sunrise</p>
            </div>
        </div>
    </div>
  )
}

export default Sunset