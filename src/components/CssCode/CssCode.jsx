import React from 'react';
// import './CssCode.css';
function CSSCode(props) {
  const { color1, color2, direction, thickness } = props;
  
  const styles = {
    border: `${thickness}px solid}`,
    boxShadow: `inset 0 0 10px ${color1}`,
    height: '100px',
    width: '100px',
    margin: '10px'
  };
  
  const code = `
    div {
      border: ${thickness}px solid,
      boxShadow: inset 0 0 10px ${color1},
      border-image: linear-gradient(to ${direction}, ${color1},${color2}, transparent) 1;
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
