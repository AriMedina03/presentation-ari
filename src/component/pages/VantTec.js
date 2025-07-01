import React from 'react'
import '../../App.css'
import './VantTec.css'
import '../Cards.css'
import CardItem from '../CardItem'
import { Link } from 'react-router-dom';


function VantTec() {
    return (
    <div className="VantTec-container">
        <h1 className="VantTec-title">VANTTEC</h1>
        <div className="VantTec-content">
            <p className="VantTec-text">VantTec Student-led group, recognized for its award-wining in academics at international robotics
                competitions, dedicated to conducting research on autonomous vehicles and fostering entrepreneurial collaborations. 
                I am deeply honored to have such an incredible team making all drone proyects possible </p>
            <img className="VantTec-image" src="/images/wabes_tmr.jpeg" alt="VantTec" />
        </div>
        <div className ="VantTec-drones-content">
            <h2 className="VantTec-drones-title">Drones</h2>
            <p className="VantTec-drones-text">We design from scratch two drones</p>
            <div className="VantTec-drones-images">
                <img className="VantTec-drones-image" src="/images/alexa2.jpeg" alt="Drone 1" />
                <img className="VantTec-drones-image" src="/images/wabe2.jpeg" alt="Drone 2" />
            </div>
            <p className="VantTec-drones-text"> The drone is equipped with a GPS module, a flight controller, and a Jetson.</p>
        </div>
        <h1 className="VantTec-title">DRONE DELIVERY</h1>
        <div className ="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                        src='/images/alexa_mecanism.mp4'
                        text='LAST ITERATION OF DRONE DELIVERY MECHANISM'
                        label='Drone delivery mechanism'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem
                        src='/images/delivery.mp4'
                        text='Delivery demostration'
                        label='Drone delivery'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem
                        src='/images/alexa.jpeg'
                        text='ALEXA DRONE'
                        label='Drone delivery'
                    />
                </ul>
                <div className="VantTec-links">
    
    <a 
        href="https://conecta.tec.mx/es/noticias/monterrey/educacion/entregas-aereas-desarrollan-estudiantes-del-tec-dron-repartidor" 
        target="_blank" 
        rel="noopener noreferrer"
        className="VantTec-link"
    >
        <span className="VantTec-link-text">News in CONECTA</span>
        <img src="/images/equipo_wabe.jpg" alt="Conecta Tec" className="VantTec-link-icon" />
    </a> 
    <a 
        href="https://www.instagram.com/share/_gxIPqzsu" 
        target="_blank"     
        rel="noopener noreferrer"
        className="VantTec-link"
    >
        <span className="VantTec-link-text">Instagram post</span>
        <img src="/images/delivery_promotion.jpeg" alt="Instagram" className="VantTec-link-icon" />
    </a>
</div>


                <ul className="cards__items"> 
                    <CardItem
                        src='/images/ROS.PNG'
                        text='Controlled with ROS2 installed in Docker containers'
                    />
                    <CardItem
                        src='/images/px4.png'
                        text='Developed with PX4 flight control software and communicates with Mavlink messages'
                    />
                    <CardItem
                        src='/images/qgro.PNG'
                        text='All simulated in QGroundControl'
                    />
                </ul>
            </div>
        </div>
        
    </div>

    )
}
export default VantTec
