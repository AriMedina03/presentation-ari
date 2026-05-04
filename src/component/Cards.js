import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>My projects</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                        src='/images/tmr_uav.jpeg'
                        text='VantTec Competitions'
                        label='Torneo Mexicano de Robótica'
                        path='/VantTec'
                    />
                    <CardItem
                        src='/images/drone.jpeg'
                        text='Prototype of Drone delivery'
                        label='Drones'
                        path='/VantTec'
                    />
                </ul>

                <ul className="cards__items">
                    <CardItem
                            src='/images/design_puzzlebt.jpeg' autoPlay loop muted
                            text='Puzzlebot with ROS2, SLAM and obstacle avoidance'
                            label='School project'
                            path='/School'
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
                        label='School project'
                        link="https://github.com/AriMedina03/TELLO_SWARM/tree/main"
                    />
                    <CardItem
                        src={"/images/fpga.mov"} autoPlay loop muted 
                        text='FPGA game in Verilog'
                        label='School project'
                        link="https://github.com/AriMedina03/FPGA_car_unity"
                   />
                    <CardItem
                        src={"/images/xarm.mov"} autoPlay loop muted 
                        text='X-Arm with ROS and OpenCV'
                        label='School project'
                        link="https://github.com/AriMedina03/Xarm-move"
                   />
                    <CardItem
                        src={"/images/puzzlebot.MOV"} autoPlay loop muted 
                        text='Puzzlebot with ROS2 and Machine Learning'
                        label='School project'
                        link="https://github.com/rllaguno/robotica_inteligente_eq5"
                    />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
