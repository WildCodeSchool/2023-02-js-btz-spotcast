import React, { useState } from 'react'
import './DropdownMenu.css'
import meteoImgActive from '../../../assets/images/widgets-btn-meteo-active.svg'
import meteoImgInactive from '../../../assets/images/widgets-btn-meteo.svg'
import meteo3dImgActive from '../../../assets/images/widgets-btn-meteo3d-active.svg'
import meteo3dImgInactive from '../../../assets/images/widgets-btn-meteo3d.svg'
import sunImgActive from '../../../assets/images/widgets-btn-sun-active.svg'
import sunImgInactive from '../../../assets/images/widgets-btn-sun.svg'
import tideImgActive from '../../../assets/images/widgets-btn-tide-active.svg'
import tideImgInactive from '../../../assets/images/widgets-btn-tide.svg'
import windImgActive from '../../../assets/images/widgets-btn-wind-active.svg'
import windImgInactive from '../../../assets/images/widgets-btn-wind.svg'



const DropdownMenu = ({formInfos, setFormInfos}) => {

    const handleFormInfos = (e) =>{
        formInfos &&
        setFormInfos({
            ...formInfos,
            [e.target.attributes.name.value]: e.target.checked,
        })
    }


    // const handleFormInfos = (e) =>{
    //     let name = e.target.attributes.name.value;
    //     let value = e.target.checked;

    //     const updatedInfos = formInfos;
    //     updatedInfos[name] = value;

    //     setFormInfos(updatedInfos)
    // }

  return (
    <div className='dropdown-menu'>
        <div className="login-menu">
            <div className="login-align">
                <div className="user-name"></div>
                <div className="user-img">
                    <img src="" alt='' />
                </div>
            </div>
        </div>
        <div className="widgets-menu">

            <h3>Select your widgets</h3>

            <form className="widgets-grid" onChange={handleFormInfos}>
              
                <div className="widget-checkbox">
                    <label htmlFor="meteo-widget">
                        <img src={formInfos["meteo-widget"] ? meteoImgInactive : meteoImgActive} alt="meteo widget" />
                    </label>
                    <input id="meteo-widget" name="meteo-widget" type="checkbox" />
                </div>

                <div className="widget-checkbox">
                    <label htmlFor="meteo3d-widget">
                        <img src={formInfos["meteo3d-widget"] ? meteo3dImgInactive : meteo3dImgActive} alt="Meteo 3 days widget" />
                    </label>
                    <input id="meteo3d-widget" name="meteo3d-widget" type="checkbox" />
                </div>

                <div className="widget-checkbox-wide">
                    <label htmlFor="sun-widget">
                        <img src={formInfos["sun-widget"] ? sunImgInactive : sunImgActive} alt="sun widget" />
                    </label>
                    <input id="sun-widget" name="sun-widget" type="checkbox" />
                </div>

                <div className="widget-checkbox-wide">
                    <label htmlFor="tide-widget">
                        <img src={formInfos["tide-widget"] ? tideImgInactive : tideImgActive} alt="tide widget" />
                    </label>
                    <input id="tide-widget" name="tide-widget" type="checkbox" />
                </div>

                <div className="widget-checkbox">
                    <label htmlFor="wind-widget">
                        <img src={formInfos["wind-widget"] ? windImgInactive : windImgActive} alt="wind widget" />
                    </label>
                    <input id="wind-widget" name="wind-widget" type="checkbox" />
                </div>

            </form>
        </div>
    </div>
  )
}

export default DropdownMenu