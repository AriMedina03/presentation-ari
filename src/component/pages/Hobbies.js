import React from 'react';
import '../../App.css';
import './Hobbies.css'; // Asegúrate de importar el archivo CSS para los estilos específicos
import './Carousel.css'; // Asegúrate de importar el archivo CSS para los estilos específicos
import { Carousel } from './Carousel';

function Hobbies() {
  return (
    <div className="hobbies-container">
      <h1 className="Hobbies-title">ABOUT ME</h1>
      <div className="hobbies-content">
        <p className="hobbies-text">HI! My name is Ariadna Medina, I have graduated from Robotics and Systems Engineering degree. I hope you enjoy looking through all my projects</p>
        <img className="hobbies-image" src="/images/YOYOY.jpeg" alt="Hobby" />
      </div>  
      <div className="carousel-container">
        <h1 className="Hobbies-title">Here are some hobbies</h1>
        <Carousel
          data={[
            {
              src: "/images/Zeus.jpg",
              alt: "Image 1 for carousel"
            },
            {
             src: "/images/climbingME.jpg",
              alt: "Image 2 for carousel"
            },
            {
              src: "/images/family.jpg",
              alt: "Image 3 for carousel"
            },
            {
              src: "/images/Comadres.jpg",
              alt: "Image 3 for carousel"
            },
            {
              src: "/images/eq.jpg",
              alt: "Image 3 for carousel"
            },
            {
              src: "/images/primos.jpg",
              alt: "Image 3 for carousel"
            }
          ]}
        />
        <p className="hobbies-text">I love climbing, running, spending time with my family, friends and my dog</p>
      </div>
    </div>
  );
}

export default Hobbies;
