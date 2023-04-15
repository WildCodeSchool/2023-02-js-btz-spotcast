import React, { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(true);

  const buttonToggle = () => {
    setIsOn(!isOn);
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
