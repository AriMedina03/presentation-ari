import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={"/images/tmr.mp4"} autoPlay loop muted />
      <h1>TMR 2025</h1>
      <div className='hero-btns'>
       
      </div>
    </div>
  );
}

export default HeroSection;