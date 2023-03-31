import React from 'react';
// import './Preview.css'
function Preview(props) {
  const { color, direction, thickness } = props;
  
  const styles = {
    borderWidth: `${thickness}px`,
    border: 'solid', 
    borderColor : `${color}`,
    boxShadow: `inset 0 0 10px ${color}`,
    height: '100px',
    width: '100px',
    margin: '10px'
  };

  return (
    <div className='preview'>
      <div style={{ ...styles, borderImage: `linear-gradient(to ${direction}, ${color}, transparent) 1`}} />
    </div>
  );
}

export default Preview;
