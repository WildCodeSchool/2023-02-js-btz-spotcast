import React from "react";
import "./Wind.css";
import "../cards.css";
import ToggleButton from "../../utilities/ToggleButton";

const Wind = () => {
  return (
    <div className="small-square">
      <div className="card-header">
        <p className="card-title">Wind</p>
        <ToggleButton />
      </div>
      <div className="card-content">Card-content</div>
    </div>
  );
};

export default Wind;
