import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={"/images/vuelo_delivery.MOV"} autoPlay loop muted />
      <h1>DRONE DELIVERY</h1>
      <div className='hero-btns'>
       
      </div>
    </div>
  );
}

export default HeroSection;