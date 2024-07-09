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
        <p className="hobbies-text">HI! My name is Ariadna Medina, I'm currently in the last year of my Robotics and Systems Engineering degree. I hope you enjoy looking through all my proyects</p>
        <img className="hobbies-image" src="/images/YOYOY.jpeg" alt="Hobby" />
      </div>  
      <div className="carousel-container">
        <h1 className="carousel-title">I also want to share with you some of my favorite moments</h1>
        <Carousel
          data={[
            {
              src: "/images/Zeus.jpg",
              alt: "Image 1 for carousel"
            },
            {
             src: "/images/amigas.jpeg",
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
        <p className="carousel-text">I love spending time with my family, friends and my dog</p>
      </div>
    </div>
  );
}

export default Hobbies;
