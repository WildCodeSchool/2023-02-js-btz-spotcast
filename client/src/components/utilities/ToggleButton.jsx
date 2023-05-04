import React, { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = ({ setFormInfos, formInfos, widgetName}) => {
  const buttonToggle = () => {
    setFormInfos({
      ...formInfos,
      [widgetName] : !formInfos[widgetName]
    })
  };

 
  return (
    <div
      onClick={buttonToggle}
      className={
        formInfos[widgetName] ? "switch-background" : "switch-background switched-background"
      }
    >
      <div
        className={formInfos[widgetName] ? "switch-button" : "switch-button switched-button"}
      ></div>
    </div>
  );
};

export default ToggleButton;
