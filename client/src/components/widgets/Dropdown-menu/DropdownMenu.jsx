import React, { useState, useContext } from "react";
import "./DropdownMenu.css";
import { gridRefresh } from "../../../pages/Dashboard";
import meteoImgActive from "../../../assets/images/widgets-btn-meteo-active.svg";
import meteoImgInactive from "../../../assets/images/widgets-btn-meteo.svg";
import meteo3dImgActive from "../../../assets/images/widgets-btn-meteo3d-active.svg";
import meteo3dImgInactive from "../../../assets/images/widgets-btn-meteo3d.svg";
import sunImgActive from "../../../assets/images/widgets-btn-sun-active.svg";
import sunImgInactive from "../../../assets/images/widgets-btn-sun.svg";
import tideImgActive from "../../../assets/images/widgets-btn-tide-active.svg";
import tideImgInactive from "../../../assets/images/widgets-btn-tide.svg";
import windImgActive from "../../../assets/images/widgets-btn-wind-active.svg";
import windImgInactive from "../../../assets/images/widgets-btn-wind.svg";



const DropdownMenu = ({
  formInfos,
  setFormInfos,
  setShowDropMenu,
  showDropMenu,
  currentUserName,
  currentUserPicture,
  setShow,
  show
}) => {

  // resize muuri
  const[muuriRefresh, setMuuriRefresh] = useContext(gridRefresh)

  //function to update active widgets list
  const handleFormInfos = (e) => {
    setMuuriRefresh(!muuriRefresh)
    setFormInfos({
    ...formInfos,
    [e.target.attributes.name.value]: e.target.checked,
    });
  };

  //function to show/hide the login modal
  const handleShow = () => {
    setShow(!show);
    setShowDropMenu(!showDropMenu);
  }

  /* EXEMPLE A GARDER
  const handleFormInfos = (e) =>{
      let name = e.target.attributes.name.value;
      let value = e.target.checked;

      const updatedInfos = formInfos;
      updatedInfos[name] = value;

      setFormInfos(updatedInfos)
  }*/

  return (
    <div className={showDropMenu ? "dropdown-menu visible" : "dropdown-menu"}>
      <div className="login-menu-dropdown">
        <div className="login-dropdown">
          <div className="user-img-dropdown" onClick={handleShow}>
            <img src={currentUserPicture} />
          </div>
          <div className="user-name-dropdown"onClick={handleShow}>{currentUserName}</div>
        </div>
      </div>

      <div className="widgets-menu">
        <h3>Select your widgets</h3>

        <form className="widgets-grid">
          <div className="widget-checkbox">
            <label htmlFor="meteo-widget">
              <img
                src={
                  formInfos["meteo-widget"] ? meteoImgActive : meteoImgInactive
                }
                alt="meteo widget"
              />
            </label>
            <input id="meteo-widget" name="meteo-widget" type="checkbox" checked={formInfos["meteo-widget"]} onChange={handleFormInfos} />
          </div>

          <div className="widget-checkbox">
            <label htmlFor="meteo3d-widget">
              <img
                src={
                  formInfos["meteo3d-widget"] ? meteo3dImgActive : meteo3dImgInactive}
                alt="Meteo 3 days widget"
              />
            </label>
            <input id="meteo3d-widget" name="meteo3d-widget" type="checkbox" checked={formInfos["meteo3d-widget"]} onChange={handleFormInfos}/>
          </div>

          <div className="widget-checkbox-wide">
            <label htmlFor="sun-widget">
              <img
                src={formInfos["sun-widget"] ? sunImgActive :  sunImgInactive}
                alt="sun widget"
              />
            </label>
            <input id="sun-widget" name="sun-widget" type="checkbox" checked={formInfos["sun-widget"]} onChange={handleFormInfos}/>
          </div>

          <div className="widget-checkbox-wide">
            <label htmlFor="tide-widget">
              <img
                src={formInfos["tide-widget"] ? tideImgActive : tideImgInactive}
                alt="tide widget"
              />
            </label>
            <input id="tide-widget" name="tide-widget" type="checkbox" checked={formInfos["tide-widget"]} onChange={handleFormInfos}/>
          </div>

          <div className="widget-checkbox">
            <label htmlFor="wind-widget">
              <img
                src={formInfos["wind-widget"] ? windImgActive : windImgInactive}
                alt="wind widget"
              />
            </label>
            <input id="wind-widget" name="wind-widget" type="checkbox" checked={formInfos["wind-widget"]} onChange={handleFormInfos}/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DropdownMenu;
