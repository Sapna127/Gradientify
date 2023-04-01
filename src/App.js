import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker/ColorPicker';
import DirectionPicker from './components/DirectionPicker/DirectionPicker.jsx';
import ThicknessPicker from './components/ThicknessPicker/ThicknessPicker';
import CSSCode from './components/CssCode/CssCode';
import Preview from './components/Preview/Preview';
// import './App.css'
function App() {
  const [colors, setColors] = useState(['#FF0000', '#FFFFFF']);
  const [direction, setDirection] = useState('right');
  const [thickness, setThickness] = useState(3);

  return (
    <div>
      <h1>Gradient Border Generator</h1>
      <ColorPicker value={colors} onChange={setColors} />
      <DirectionPicker value={direction} onChange={setDirection} />
      <ThicknessPicker value={thickness} onChange={setThickness} />
      <CSSCode color1={colors[0]} color2={colors[1]} direction={direction} thickness={thickness} />
      <Preview color1={colors[0]} color2={colors[1]} direction={direction} thickness={thickness} />
    </div>
  );
}

export default App;
