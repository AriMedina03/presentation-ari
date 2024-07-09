import React from 'react'
import '../../App.css'
import './SAIRS.css'
import '../Cards.css'
import CardItem from '../CardItem'

function SAIRS() {
    return (
    <div className="sairs-container">
        <h1 claasName="sairs-title">Society of Engineering Students in Robotics and Systems</h1>
        <div className="sairs-content">
            <p className='sairs-text'>Guide young students towards fulfilling careers and inspire seasoned individuals to become influential leaders.</p>
            <div className='one-image'>
                <img className='sairs-image' src= "/images/sairs.JPG" alt="SAIRS" />
            </div>
        </div>
        <div className='smalc-container'>
            <h2 className='smalc-title'>SMALC</h2>
            <p className='smalc-text'>Inspiring and educating program for high school students in realm advance embedded robotics to design a drone, control remote cart, maze cart, and machine learning applied Mario Kart.
                Our mision in SMALC is to increase the number of students in the STEM field, and give them confidence to pursue a career in engineering.
            </p>
            <div className='smalc-content'>
                <img className='smalc-image' src="/images/SMALC_diplomas.jpeg" alt="SAIRS" />
                <img className='smalc-image' src="/images/SMALC2.jpeg" alt="SAIRS" />
            </div>
            <div className='smalc-content'>
                <img className='smalc-image' src="/images/SMALC3.jpeg" alt="SAIRS" />
                <img className='smalc-image' src="/images/SMALC4.jpeg" alt="SAIRS" />
            </div>
        </div>
        <div className='women-container'>
            <h2 className='smalc-title'>WOMEN 2 CONNECT</h2>
            <p className='smalc-text'>Fostering the ascendance of women in STEM by transformative dialogues and
            networking women in FRC Competition with distinguished woman in STEM. The proyect women to connect attends to inspire and support women in STEM field
            by giving mentorship, a strong community, and fostering a community that encourages growth and innovation in science</p>
            <div className='women-logo'>
                <img className='sairs-image' src= "/images/women_logo.jpg" alt="SAIRS" />
            </div>
            <div className='women-content'>
                <img className='women-image' src='/images/Women2Connect.jpg' alt='SAIRS' />
                <img className='women-image' src='/images/pulseras_women.JPG' alt='SAIRS' />
                <img className='women-image' src='/images/yo_women.jpeg' alt='SAIRS' />
            </div>
        </div>
    </div>
    )
}
export default SAIRS
