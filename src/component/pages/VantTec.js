import React from 'react'
import '../../App.css'
import './VantTec.css'
import '../Cards.css'
import CardItem from '../CardItem'

function VantTec() {
    return (
    <div className="VantTec-container">
        <h1 className="VantTec-title">VANTTEC</h1>
        <div className="VantTec-content">
            <p className="VantTec-text">VantTec Student-led group, recognized for its award-wining in academics at international robotics
                competitions, dedicated to conducting research on autonomous vehicles and fostering entrepreneurial collaborations. 
                I am deeply honored to have such an incredible team making drone delivery possible </p>
            <img className="VantTec-image" src="/images/vanttec.JPG" alt="VantTec" />
        </div>
        <div className ="VantTec-drones-content">
            <h2 className="VantTec-drones-title">Drones</h2>
            <p className="VantTec-drones-text">The drones design was developed through solid works</p>
            <img className="VantTec-drones-image" src="/images/modelo.jpg" alt="Drones" />
            <p className="VantTec-drones-text"> The drone is equipped with a GPS module, a flight controller, and a Jetson.</p>
        </div>
        <div className ="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                        src='/images/MST_SIM.mp4'
                        text='SIMULATION OF DRONE DELIVERY'
                        label='First simulation'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem
                        src='/images/ROS.png'
                        text='Controlled with ROS2 installed in Docker containers'
                    />
                    <CardItem
                        src='/images/px4.png'
                        text='Developed with PX4 flight control software and communicates with Mavlink messages'
                    />
                    <CardItem
                        src='/images/qgro.png'
                        text='All simulated in QGroundControl'
                    />
                </ul>
            </div>
        </div>
        
    </div>

    )
}
export default VantTec
