import React, { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = ({ formInfos, widgetName}) => {
  
  const [isOn, setIsOn] = useState(true);

  const buttonToggle = () => {
    setIsOn(!isOn);
    formInfos[widgetName] = !formInfos[widgetName];
    console.log(formInfos);
  };

 
  return (
    <div
      onClick={buttonToggle}
      className={
        isOn ? "switch-background" : "switch-background switched-background"
      }
    >
      <div
        className={isOn ? "switch-button" : "switch-button switched-button"}
      ></div>
    </div>
  );
};

export default ToggleButton;
