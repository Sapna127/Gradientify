import React from 'react';
import './CssCode.css';
import { Button } from '../../UI/Button/Button';

function CSSCode(props) {
  const { colors, direction, thickness } = props;
  const colorList = Array.isArray(colors) ? colors.join(',') : '';
  
  const code = `
    div {
      border: ${thickness}px solid,
      border-image: linear-gradient(to ${direction}, ${colorList}, transparent) 1;
      height: 100px;
      width: 100px;
      margin: 10px;
      box-shadow: inset 0 0 10px ${colorList};
    }
  `;

  function copyToClipboard() {
    navigator.clipboard.writeText(code)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });

  }

  return (
    <div>
    
      <div className='code_front'>
        <div className='code_back'>
          <div className='cs_btn'><h3>CSS Code:</h3>
          <Button onClick={copyToClipboard} /></div>         
          <pre>{code}</pre>     
        </div>  
      </div>
    </div>
  );
}

export default CSSCode;
