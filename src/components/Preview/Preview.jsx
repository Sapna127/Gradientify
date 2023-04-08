import React from 'react';
import './Preview.css'
function Preview(props) {
  const { color1,color2
    , direction, thickness } = props;
  
  // const styles = {
  //   border: `${thickness}px solid`,
  //   // boxShadow: `inset 0 0 10px ${color1}`,
  //   height: '100px',
  //   width: '100px',
  //   margin: '5px'
  // };
  const styles = {
    // borderImage: `linear-gradient(to ${direction}, ${color1},${color2} transparent) ${thickness}px `,
    height: '100px',
    width: '100px',
    margin: '5px',
    border: `${thickness}px solid` 
  };
  

  return (
      <div className='preview_front'>
      <div className='preview_back'>
      <div className="preview-container" style={{ ...styles, borderImage: `linear-gradient(to ${direction}, ${color1},${color2} transparent) 1`}} />
      </div></div>
  );
}

export default Preview;
