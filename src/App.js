import React, { useState } from "react";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import DirectionPicker from "./components/DirectionPicker/DirectionPicker.jsx";
import ThicknessPicker from "./components/ThicknessPicker/ThicknessPicker";
import CSSCode from "./components/CssCode/CssCode";
import { Navbar } from "./components/Navbar/Navbar";
import Preview from "./components/Preview/Preview";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { AboutUs } from "./components/AboutUs/AboutUs";
function App() {
  const [colors, setColors] = useState(["#FF0000", "#FFFFFF"]);
  const [direction, setDirection] = useState("right");
  const [thickness, setThickness] = useState(3);
  
  return (
    <div className="ap_contain">
    <div>
      <Navbar />
      {/* <AboutUs/> */}
      <hr />
      <div className="cols">
        <div className="prop">
          <div className="border_prop">
            <div>
              <h2>Border Properties</h2>
            </div>
            <div>
              <DirectionPicker value={direction} onChange={setDirection} />
              <ThicknessPicker value={thickness} onChange={setThickness} />
            </div>
          </div>
          <div className="color_setting">
            <div>
              <h2>Color Settings</h2>
            </div>
            <ColorPicker colors={colors} onChange={setColors} />
          </div>
          {/* <div><AboutUs/></div> */}
        </div>
        <div className="preview">
          <Preview
            color1={colors[0]}
            color2={colors[1]}
            direction={direction}
            thickness={thickness}
          />
          <CSSCode
            color1={colors[0]}
            color2={colors[1]}
            direction={direction}
            thickness={thickness}
          />
        </div>
      </div>
      
    </div>
    {/* <div><Footer/></div> */}
    
    </div>
  );
}

export default App;
