import React from "react";
// import './ColorPicker.css';
function ColorPicker({ onChange }) {
  function handleStartColorChange(event) {
    onChange(event.target.value);
  }

  function handleEndColorChange(event) {
    onChange(event.target.value);
  }

  return (
    <div className="color-picker">
      <label htmlFor="start-color">Start Color:</label>
      <input
        type="color"
        id="start-color"
        name="start-color"
        onChange={handleStartColorChange}
      />

      <label htmlFor="end-color">End Color:</label>
      <input
        type="color"
        id="end-color"
        name="end-color"
        onChange={handleEndColorChange}
      />
    </div>
  );
}

export default ColorPicker;
