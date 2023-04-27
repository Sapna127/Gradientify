import React from "react";
import "./DirectionPicker.css";

const directions = [
  { id: "top", value: "top", label: "Top" },
  { id: "right", value: "right", label: "Right" },
  { id: "diagonal", value: "bottom right", label: "Diagonal" },
];

function DirectionPicker({ onChange }) {
  function handleDirectionChange(event) {
    onChange(event.target.value);
  }

  return (
    <>
      <label>Choose Direction:</label>
      <div className="direction_picker">
        {directions.map((direction) => (
          <label htmlFor={direction.id} key={direction.id}>
            <input
              type="radio"
              id={direction.id}
              name="direction"
              value={direction.value}
              onChange={handleDirectionChange}
            />
            {direction.label}
          </label>
        ))}
      </div>
    </>
  );
}

export default DirectionPicker;
