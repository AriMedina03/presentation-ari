import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check my proyects!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                        src='/images/drone.jpeg'
                        text='Prototype of Drone delivery'
                        label='Drones'
                        path='/VantTec'
                    />
                    <CardItem
                        src='/images/SMALC2.jpeg'
                        text='Society of Engineering Students in Robotics and Systems'
                        label='SMALC program'
                        path='/SAIRS'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem
                        src={"/images/flip-drones.MP4"} autoPlay loop muted 
                        text='Drone swarm with TelloPy'
                        label='School proyect'
                        link="https://github.com/AriMedina03/TELLO_SWARM/tree/main"
                    />
                    <CardItem
                        src={"/images/fpga.mov"} autoPlay loop muted 
                        text='FPGA game in Verilog'
                        label='School proyect'
                   />
                    <CardItem
                        src={"/images/xarm.mov"} autoPlay loop muted 
                        text='X-Arm with ROS and OpenCV'
                        label='School proyect'
                   />
                    <CardItem
                        src={"/images/puzzlebot.MOV"} autoPlay loop muted 
                        text='Puzzlebot with ROS2 and Machine Learning'
                        label='School proyect'
                    />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
