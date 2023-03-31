import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker/ColorPicker';
import DirectionPicker from './components/DirectionPicker/DirectionPicker.jsx';
import ThicknessPicker from './components/ThicknessPicker/ThicknessPicker';
import CSSCode from './components/CssCode/CssCode';
import Preview from './components/Preview/Preview';
import './App.css'
function App() {
  const [color, setColor] = useState('#FF0000');
  const [direction, setDirection] = useState('right');
  const [thickness, setThickness] = useState(3);

  return (
    <div>
      <h1>Gradient Border Generator</h1>
      <ColorPicker value={color} onChange={setColor} />
      <DirectionPicker value={direction} onChange={setDirection} />
      <ThicknessPicker value={thickness} onChange={setThickness} />
      <CSSCode color={color} direction={direction} thickness={thickness} />
      <Preview color={color} direction={direction} thickness={thickness} />
    </div>
  );
}

export default App;
