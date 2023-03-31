import React from 'react';
// import './CssCode.css';
function CSSCode(props) {
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
  
  const code = `
    div {
      borderWidth: ${thickness}px;
      border: solid;
      borderColor : ${color},
      box-shadow: inset 0 0 10px ${color};
      border-image: linear-gradient(to ${direction}, ${color}, transparent) 1;
      height: 100px;
      width: 100px;
      margin: 10px;
    }
  `;
console.log(props)
  return (
    <div className='code'>
      <h3>CSS Code:</h3>
      <pre>{code}</pre>
      <style>{code}</style>
      <div style={styles} />
      
    </div>
  );
}

export default CSSCode;
