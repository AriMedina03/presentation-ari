import React from 'react'
import '../../App.css'
import './school.css'
import '../Cards.css'
import CardItem from '../CardItem'

function School() {
    return (
        <div className="school-container">
            <h1 className="school-title">School Projects</h1>
            <div className="school-content">
                <p className="school-text">I have been involved in several school projects, including robotics, programming, and electronics. 
                    These projects have allowed me to apply my knowledge and skills in practical situations, enhancing my learning experience.</p>
                <img className="school-image" src="/images/school_projects.jpg" alt="School Projects" />
            </div>
            <div className ="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='/images/puzzlebot_slam.mp4'
                            text='Robotics Project'
                            label='Robotics'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src='/images/design_puzzlebt.jepg'
                            text='Programming Project'
                            label='Programming'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default School;   