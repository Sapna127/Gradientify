import React from "react";
import "./DirectionPicker.css";
function DirectionPicker({ onChange }) {
  function handleDirectionChange(event) {
    onChange(event.target.value);
  }

  return (
    <div className="direction-picker">
      <label>Direction:</label>

      <label htmlFor="top">
        <input
          type="radio"
          id="top"
          name="direction"
          value="top"
          onChange={handleDirectionChange}
        />
        Top
      </label>

      <label htmlFor="right">
        <input
          type="radio"
          id="right"
          name="direction"
          value="right"
          onChange={handleDirectionChange}
        />
        Right
      </label>

      <label htmlFor="diagonal">
        <input
          type="radio"
          id="diagonal"
          name="direction"
          value="diagonal"
          onChange={handleDirectionChange}
        />
        Diagonal
      </label>
    </div>
  );
}

export default DirectionPicker;