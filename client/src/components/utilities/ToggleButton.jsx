import React, { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = ({ 
  setFormInfos,
  formInfos,
  widgetName,
  grid,
  elemItem,
  itemsToHide,
  setItemsToHide,
}) => {
  console.log(itemsToHide);

  const buttonToggle = () => {
    const item = grid.getItem(elemItem.parentElement);
    setItemsToHide([...itemsToHide, item]);
    // grid.hide([itemsToHide], { onFinish: () => grid.refreshItems().layout() });
    // console.log(grid._items)
    // console.log(hiddenItems)

    setFormInfos({
      ...formInfos,
      [widgetName] : !formInfos[widgetName]
    })
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
