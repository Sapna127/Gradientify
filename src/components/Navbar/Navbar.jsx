import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { Backdrop } from "../BackOver/Backdrop";
import {Overlay} from "../BackOver/Overlay"
import Toggle from "../../UI/Toogle/Toggle";
// import { AboutUs } from "../AboutUs/AboutUs";
// import {logo} from 'C:\Users\sapna kul\OneDrive\Desktop\web dev\Gradientify\src\assets\logo.svg'
import about from '../../assets/about.svg'
import logo from '../../assets/logo.svg'
import { AboutUs } from "../AboutUs/AboutUs";
export const Navbar = ({onChange}) => {
  const [showAboutUs, setShowAboutUs] = useState(false);

  function handleAboutUsClick() {
    setShowAboutUs(true);
  }

  function handleCloseAboutUs() {
    setShowAboutUs(false);
  }
  
  return (
    <>
      <div className="whole">
      {/* <Toggle onChange={onChange} /> */}
    <div className="nav">
      <div className="header">
      <div className="logo">
        <img src={logo}/>
      </div>
      <div>
        <h1>Gradient Border Generator</h1>
      </div>
      </div>
      </div>
      <div className="about">
        <img src={about} className="about_svg" onClick={handleAboutUsClick}/>
      </div>
      <hr />
    </div>

      {showAboutUs && (
        <div>
          <Backdrop onClick={handleCloseAboutUs} />
          <Overlay>
            <div>
              <AboutUs/>
            </div>
          </Overlay>
        </div>
      )}
    </>

    
  );
};
