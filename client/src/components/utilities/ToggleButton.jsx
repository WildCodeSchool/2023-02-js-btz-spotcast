import React, { useState, useContext } from "react";

import { gridRefresh } from "../../pages/Dashboard";
import "./ToggleButton.css";


const ToggleButton = ({ setFormInfos, formInfos, widgetName}) => {

  const [gridResize, setGridResize] = useContext(gridRefresh)
  const buttonToggle = () => {
    setFormInfos({
      ...formInfos,
      [widgetName] : !formInfos[widgetName]
    })
    setGridResize(!gridResize)
  };

 
  return (
    <div
      onClick={buttonToggle}
      className={
        formInfos && formInfos[widgetName] ? "switch-background" : "switch-background switched-background"
      }
    >
      <div
        className={formInfos && formInfos[widgetName] ? "switch-button" : "switch-button switched-button"}
      ></div>
    </div>
  );
};

export default ToggleButton;
