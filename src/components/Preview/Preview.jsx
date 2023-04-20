import "./Preview.css";
function Preview(props) {
  const { color1, color2, direction, thickness } = props;

  const borderStyle = {
    borderImage: `linear-gradient(to ${direction}, ${color1}, ${color2}) 1`,
    borderImageSlice: 1,
    borderStyle: "solid",
    borderWidth: `${thickness}px`,
  };

  return (
    <div className="preview_front">
      <div className="preview_back">
        <div
          className="preview-container"
          style={{
            ...borderStyle,
          }}
        />
      </div>
    </div>
  );
}

export default Preview;