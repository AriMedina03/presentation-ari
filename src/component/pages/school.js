import React from 'react'
import '../../App.css'
import './school.css'
import '../Cards.css'
import CardItem from '../CardItem'

function School() {
    return (
        <div className="school-container">
            <h1 className="school-title">Puzzlebot</h1>

            <div className="school-content">
                <div className="school-description">
                    <p className="school-text">
                        One of the most exciting projects I have worked on during my time at university is the design and development of a robot called Puzzlebot. 
                        This project was part of a course on robotics, where we were tasked with creating a robot that could navigate through a maze and solve puzzles using ROS2, SLAM, and obstacle avoidance techniques. 
                        The process involved designing the robot's hardware, programming its software, and testing it in various environments to ensure it could successfully complete its tasks. 
                        It was a challenging but rewarding experience that allowed me to apply my knowledge of robotics and programming in a practical setting.
                    </p>
                </div>
                <div className="school-image-wrapper">
                    <img 
                        className="school-image" 
                        src="/images/design_puzzlebt.jpeg" 
                        alt="School Projects" 
                    />
                </div>
            </div>

            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items school__cards">
                        <CardItem
                            src='/images/nav.MOV'
                            text='A* Navigation'
                            label='Nav'
                        />
                        <CardItem
                            src='/images/nav2.MOV'
                            text='Bug 0 obstacle avoidance'
                            label='Obstacle avoidance'
                        />
                        <CardItem
                            src='/images/nav2Package.MOV'
                            text='Simulation of the Nav2 package'
                            label='Nav2 Package'
                        />
                        <CardItem
                            src='/images/palletMoving.mp4'
                            text='Lifting and moving pallets'
                            label='Pallet moving'
                            customClass='card-vertical'
                        />
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default School;