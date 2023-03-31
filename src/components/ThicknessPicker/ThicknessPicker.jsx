import React from "react";

function ThicknessPicker({ onChange }) {
  function handleThicknessChange(event) {
    onChange(event.target.value);
  }

  return (
    <div className="thickness-picker">
      <p>Thickness: {`${Math.round((50 / 100) * 10) / 10}rem`}</p>
      <input
        type="range"
        min="1"
        max="100"
        defaultValue="50"
        onChange={handleThicknessChange}
      />
    </div>
  );
}

export default ThicknessPicker;
