import React from 'react'
import '../../App.css'
import './SAIRS.css'
import '../Cards.css'

function SAIRS() {
    return (
    <div className="sairs-container">
        <h1 className="sairs-title">Society of Engineering Students in Robotics and Systems</h1>
        <div className="sairs-role-card">
            <span className="role-label">My Role</span>
            <h3 className="role-title">Director of Social Responsibility</h3>
            <p className="role-period">2023 – 2025 · Main leader of SMALC and Women 2 Connect</p>
        </div>
        <div className="sairs-content">
            <p className='sairs-text'>SAIRS is a student society where robotics and systems engineering students can 
                share experiences with peers and alumni through networking events, mentorship, and a shared 
                community that supports each member throughout their engineering journey.</p>
            <div className='one-image'>
                <img className='sairs-image' src= "/images/sairs.JPG" alt="SAIRS" />
            </div>
        </div>
        <div className='smalc-container'>
            <h2 className='smalc-title'>SMALC</h2>
            <p className='smalc-text'>
SMALC is an educational program that introduces high school students to advanced embedded robotics through projects: 
building drones, programming remote-controlled and maze-solving carts, and applying machine learning to a Mario Kart game.
Our mission is to grow the number of students entering STEM and enhance their confidence to pursue a career in engineering.
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
            <p className='smalc-text'>Women 2 Connect is an event that fosters a community of women in STEM careers,
                through meaningful dialogues by young students and established women leaders in the field. 
                Our goal is to inspire and support women in STEM by providing mentorship, building a strong community, 
                and fostering an environment where growth and innovation thrive.</p>
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
