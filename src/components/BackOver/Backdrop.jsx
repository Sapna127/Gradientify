import React from 'react'
import { AboutUs } from '../AboutUs/AboutUs'
import './BackOver.css'
export const Backdrop = ({ showBackdrop }) => {
  return (
    <div className={`backdrop ${showBackdrop ? "show" : "hide"}`}>
    </div>
  )
}
